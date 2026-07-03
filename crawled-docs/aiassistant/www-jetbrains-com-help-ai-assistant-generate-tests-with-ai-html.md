1.  [Understand and improve code](#0)

2.  [Generate tests](#0)

# Generate tests

Last modified: 18 March 2026

With AI Assistant, you can generate unit tests for code segments (including public methods in Ruby files, PHP, or C# methods). AI Assistant analyzes both your code and the code segment context to recommend tests that will provide insights into your code's behavior.

1.  Place the caret somewhere within a class or a specific method and right-click to open the context menu.

    Alternatively, press ⌥ Option↩Enter.

2.  Select AI Actions and then Generate Unit Tests.

    ![Generate Unit Tests action in context menu](https://resources.jetbrains.com/help/img/idea/2026.1/ij_generate_unit_tests_action.png "Generate Unit Tests action in context menu")

3.  The generated test opens in a separate AI Diff tab.

    ![Generated unit test in a separate AI Diff tab](https://resources.jetbrains.com/help/img/idea/2026.1/ij_generated_unit_test.png "Generated unit test in a separate AI Diff tab")

    > ### note
    >
    > In PyCharm, AI Assistant generates tests for the default test runner of your project (Settings | Python | Tools | Integrated Tools | Testing | Default test runner).

    If you want to improve the generated code, click Specify, add new requirements, and press ↩Enter.

    If you want to regenerate the answer, click ! Regenerate.

    If you want to [modify](prompt-library.html#ai_modify_default_prompts) the prompt, click ! Customize Prompt and provide new instructions. The changes will take effect from the next test generation attempt.

4.  Click Accept all to save the generated test.

    It will be shown as a new file in a separate tab.

    ![Generated test saved as a new file](https://resources.jetbrains.com/help/img/idea/2026.1/ij_accepted_new_test.png "Generated test saved as a new file")

    If you already have a test module in your project, the new test will be stored there. If not, AI Assistant will automatically create a test module and place the generated test inside it.

    If a test file already exists, AI Assistant will locate it and add the generated tests to that file.

    If you invoke the Generate Unit Tests action directly in a test file, AI Assistant will prompt you to provide additional details about the scenario you want to test. The generated code will then be added to the existing tests within the file.
