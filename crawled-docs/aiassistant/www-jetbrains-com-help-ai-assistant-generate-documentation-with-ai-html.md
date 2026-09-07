1.  [Understand and improve code](#0)

2.  [Generate documentation](#0)

# Generate documentation

Last modified: 14 April 2025

With AI Assistant, you can generate documentation for any item declaration using the LLM ([Large Language Model](https://en.wikipedia.org/wiki/Large_language_model)).

In RustRover, [Doctests](https://www.jetbrains.com/help/rust/rust-doctest-support.html) will be included wherever possible.

1.  Place the caret at the desired item and right-click to open the context menu.

2.  In the context menu, select AI actions and then Write documentation.

    ![Write Documentation context menu item](https://resources.jetbrains.com/help/img/idea/2026.2/ai_write_doc_context_menu.png "Write Documentation context menu item")

    AI Assistant will generate documentation for the selected item.

    ![Generated documentation](https://resources.jetbrains.com/help/img/idea/2026.2/ai_generated_documentation.png "Generated documentation")

> ### tip
>
> Instead of using the context menu:
>
> -   type `/**` in IntelliJ IDEA, PhpStorm, WebStorm.
>
> -   type `"""` in PyCharm.
>
> -   type `//` in GoLand.
>
>
> Then press Enter and click Generate with AI Assistant.
>
> ![Generate with AI Assistant](https://resources.jetbrains.com/help/img/idea/2026.2/ai_suggest_documentation.png "Generate with AI Assistant")

You can customize the prompt for the Write Documentation action in Settings | Tools | AI Assistant | Prompt Library | Write Documentation.
