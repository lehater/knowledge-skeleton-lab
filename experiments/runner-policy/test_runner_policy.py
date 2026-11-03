"""Deterministic SDK-side Runner policy experiment.

No external LLM calls: ScriptedModel supplies fixed model responses, while
the real Agents SDK Runner invokes the actual local Python tool.
See docs/proposals/runner-local-detail-pilot.md for the reader check.
"""

import unittest

from agents import Agent, RunConfig, Runner
from agents.decorators import tool
from agents.testing import ScriptedModel, assistant_message, function_call


def make_agent(policy: str, model: ScriptedModel, executions: list[str]) -> Agent:
    @tool
    def get_weather(city: str) -> str:
        """Return deterministic weather for the requested city."""
        executions.append(city)
        return f"{city}: sunny"

    return Agent(
        name="Weather assistant",
        model=model,
        tools=[get_weather],
        tool_use_behavior=policy,
    )


class RunnerPolicyTest(unittest.IsolatedAsyncioTestCase):
    async def test_a_run_llm_again(self) -> None:
        """A: Tool Result is supplied to a second LLM turn."""
        executions: list[str] = []
        model = ScriptedModel(
            [
                [function_call("get_weather", {"city": "Tokyo"}, call_id="call_1")],
                [assistant_message("It is sunny in Tokyo.")],
            ]
        )
        agent = make_agent("run_llm_again", model, executions)
        result = await Runner.run(
            agent,
            "What is the weather in Tokyo?",
            run_config=RunConfig(tracing_disabled=True),
        )

        self.assertEqual(executions, ["Tokyo"])
        self.assertEqual(len(model.calls), 2)
        self.assertEqual(result.final_output, "It is sunny in Tokyo.")
        second_turn = model.calls[1].input
        tool_results = [
            item
            for item in second_turn
            if item.get("type") == "function_call_output"
            and item.get("call_id") == "call_1"
        ]
        self.assertEqual(len(tool_results), 1)
        self.assertIn("Tokyo: sunny", str(tool_results[0].get("output")))
        model.assert_complete()
        print("A PASS: 2 model calls; 1 tool call; call_1 result sent to model")

    async def test_b_stop_on_first_tool(self) -> None:
        """B: Tool Result directly becomes final_output without another turn."""
        executions: list[str] = []
        model = ScriptedModel(
            [[function_call("get_weather", {"city": "Tokyo"}, call_id="call_1")]]
        )
        agent = make_agent("stop_on_first_tool", model, executions)
        result = await Runner.run(
            agent,
            "What is the weather in Tokyo?",
            run_config=RunConfig(tracing_disabled=True),
        )

        self.assertEqual(executions, ["Tokyo"])
        self.assertEqual(len(model.calls), 1)
        self.assertEqual(result.final_output, "Tokyo: sunny")
        model.assert_complete()
        print("B PASS: 1 model call; 1 tool call; tool result is final_output")


if __name__ == "__main__":
    unittest.main()
