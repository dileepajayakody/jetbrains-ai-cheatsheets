1.  [Write and edit code](#0)

2.  [Refactoring with AI](#0)

# Refactoring with AI

Last modified: 20 October 2025

AI Assistant can suggest refactorings for the selected code fragments, helping ensure consistency and clarity throughout your codebase.

## Suggest refactoring

1.  Select a code fragment and click ! in the popup that appears.

2.  In the menu, click Suggest Refactoring.

    ![Suggest Refactoring](https://resources.jetbrains.com/help/img/idea/2026.2/ai_popup_find_problems.png "Suggest Refactoring")

    The AI chat will open to offer you refactoring suggestions.

    [![AI Assistant: AI Assistant suggests refactoring](https://resources.jetbrains.com/help/img/idea/2026.2/ai_suggest_refactoring.png "AI Assistant: AI Assistant suggests refactoring")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_suggest_refactoring.png)

3.  In the field with the refactored code, click Apply to add the suggested changes to the currently open file.

4.  In the editor, review the changes by clicking ! Next Change and ! Previous Change buttons.

    [![Diff tab with refactored code](https://resources.jetbrains.com/help/img/idea/2026.2/ai_refactoring_diff.png "Diff tab with refactored code")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_refactoring_diff.png)

5.  When you are ready to apply the changes, click Accept All. Otherwise, click Discard All to reject the changes.

    > ### tip
    >
    > You can reject a specific change by clicking the ! Revert button in the gutter.

Not in some IDEs

## Get help with name suggestions

**Not available in:** DataGrip, DataSpell

When you rename (ShiftF6) a symbol inline, AI Assistant suggests name options for it based on its contents.

![AI Assistant suggests new names](https://resources.jetbrains.com/help/img/idea/2026.2/ai_suggest_renaming.png "AI Assistant suggests new names")

This feature is enabled by default. To switch it on and off, check the AI Assistant settings.

1.  Press CtrlAlt0S to open settings and then select Tools | AI Assistant.

2.  Use the Provide AI-generated name suggestions checkbox.

    ![Enable name suggestion option in AI Assistant settings](https://resources.jetbrains.com/help/img/idea/2026.2/name_suggestions.png "Enable name suggestion option in AI Assistant settings")

Specific IDEs

## Add Python type annotations

**Only available in:** PyCharm, DataSpell

While [PyCharm](https://www.jetbrains.com/help/pycharm/type-hinting-in-product.html#adding-type-hints) and [DataSpell](https://www.jetbrains.com/help/dataspell/type-hinting-in-product.html#adding-type-hints) let you add type hints via intention actions, AI Assistant further extends this functionality by suggesting types based on the context.

1.  Right-click a function or method definition to open the context menu.

    Alternatively, place the caret on it and press AltEnter.

2.  Select AI Actions and then Add Type Hints.

    ![Adding Python type annotations via AI Assistant](https://resources.jetbrains.com/help/img/idea/2026.2/py_ai_type_annotations_select.png "Adding Python type annotations via AI Assistant")

3.  Type annotations are added to the function definition.

    ![Python type annotations added via AI Assistant](https://resources.jetbrains.com/help/img/idea/2026.2/py_ai_type_annotations_result.png "Python type annotations added via AI Assistant")
