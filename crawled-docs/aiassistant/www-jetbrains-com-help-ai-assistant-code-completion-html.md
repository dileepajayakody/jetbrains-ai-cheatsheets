1.  [Write and edit code](#0)

2.  [Code completion](#0)

# Code completion

Last modified: 14 August 2026

Cloud completion powered by AI Assistant can autocomplete single lines, blocks of code, and even entire functions in real time based on the project context. The generated code is similar to how you would write code, matching your style and naming conventions.

Completion is available not only for code but also in commented lines, AI Chat, and commit messages. You can [configure](/help/ai-assistant/code-completion.html#configure-cloud-completion) where you want to receive completion suggestions.

> ### note
>
> By default, the cloud code completion feature relies on [Mellum](https://blog.jetbrains.com/ai/2025/02/why-and-how-jetbrains-built-mellum-the-llm-designed-for-code-completion/), a proprietary large language model developed by JetBrains and specifically optimized for this purpose.
>
> If needed, you can use a model of your choice for this feature by [configuring](use-custom-models.html#ai-completion-provider) an OpenAI-compatible provider.

## Work with cloud completion

To invoke code completion suggestions:

1.  Start typing in the editor, AI Chat, or Commit Message field. The suggestions start to appear as you type.

    Code

    AI Chat

    Code Comments

    Commit Message

    ![AI-generated code suggestion](https://resources.jetbrains.com/help/img/idea/2026.2/ai_code_completion.png "AI-generated code suggestion")

    ![AI-generated code suggestion in AI Chat](https://resources.jetbrains.com/help/img/idea/2026.2/ai_code_completion_in_ai_chat.png "AI-generated code suggestion in AI Chat")

    ![AI-generated code suggestion for commented code](https://resources.jetbrains.com/help/img/idea/2026.2/ai_code_completion_code_comments.png "AI-generated code suggestion for commented code")

    ![AI-generated commit message](https://resources.jetbrains.com/help/img/idea/2026.2/ai_code_completion_commit_message.png "AI-generated commit message")

    You can also trigger the code completion by pressing AltShift0\\.

    > ### tip
    >
    > If there are no suggestions, the code might already be complete.

2.  To apply the suggestion:

    -   Press Tab to accept the entire suggestion. You can [configure a different shortcut](/help/ai-assistant/code-completion.html#change-cloud-completion-shortcut) for this action.

    -   Press Ctrl0→ to accept a suggestion word by word.

    -   Press End to accept a suggestion line by line.

    To reject the suggestion, press Esc. Alternatively, continue typing or change the caret position either with the arrow keys or by a mouse click.

## Configure cloud completion

The cloud completion option is enabled by default. To configure the way it works, press CtrlAlt0S to open the settings and go to Editor | General | Code Completion | Inline.

[![Code completion settings](https://resources.jetbrains.com/help/img/idea/2026.2/ai_settings_code_completion.png "Code completion settings")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_settings_code_completion.png)

Enable the necessary options to personalize your experience with code completion.

### Enable inline completion

In this section, you can enable or disable the inline code completion feature and define which language models you want to use for inline completion:

![Enable inline completion](https://resources.jetbrains.com/help/img/idea/2026.2/ai_enable_inline_completion.png "Enable inline completion")

Item

Description

Enable inline completion using language models

Enable inline code completion and select the models that you want to use for it:

-   Local – code completion relies on a locally run deep learning model to provide suggestions. The models can be downloaded for supported languages manually.

    This setup is available for use when the AI Assistant plugin is not installed.

-   Cloud and local – code completion relies on both locally run and cloud models to provide suggestions.

-   Cloud – code completion relies only on a cloud model to provide suggestions.

> ### tip
>
> AI Assistant also allows you to assign a custom model to provide suggestions. For more information, refer to [Assign models to AI Assistant features](use-custom-models.html#use-custom-models-in-ai-features).

### Display Suggestions For

In this section, you can select the programming languages and features for which the suggestions are shown:

![the Display Suggestions For section](https://resources.jetbrains.com/help/img/idea/2026.2/ai_display_suggestions_for.png "the Display Suggestions For section")

Item

Description

Languages

Select the languages for which you want to receive suggestions. The code completion feature will be available when working in files of the [corresponding types](/help/ai-assistant/code-completion.html#languages-and-corresponding-file-types).

The All others option covers [other file types](/help/ai-assistant/code-completion.html#all-other-file-types) and is disabled by default.

> ### note
>
> When the All others option is selected and code completion is invoked in an uncommon file type, a small portion of [quota](licensing-and-subscriptions.html#ai-quota) might be consumed to provide completion suggestions.

Features

Select where else you want to receive code completion suggestions:

-   AI Chat Input – enable to receive suggestions when writing prompts in the AI Chat.

-   Commit Messages – enable to receive suggestions in the Commit Message field.

Advanced Settings

Click this button to specify for which languages and features code completion is available.

![Advanced Settings](https://resources.jetbrains.com/help/img/idea/2026.2/ai_code_completion_advanced_settings.png "Advanced Settings")

Languages and corresponding file types

Language/Type

Extension

Java

`java`

Kotlin

`kt`, `kts`

Python

`py`, `ipynb`

Rust

`rs`, `rsx`

Go

`go`

C/C++

`c`, `h`, `cpp`, `cc`, `cp`, `hpp`, `h++`

C#

`cs`

Ruby

`rb`, `ruby`, `rbw`, `ru`

RBS

`rbs`

ERB

`erb`, `rhtml`

PHP

`php`, `phtml`, `phpt`, `ctp`

Scala

`scala`, `sbt`

Terraform/OpenTofu

`tf`, `hcl`

XML

`xml`

JSON

`json`

YAML

`yml`, `yaml`

Properties

`properties`

Markdown

`md`, `markdown`, `mkd`, `mkdn`, `rmd`

Plain text

`txt`

HTML

`html`, `htm`, `xhtml`, `xht`

CSS-like

`css`, `scss`, `sass`, `less`

JavaScript/TypeScript

`js`, `jsx`, `ts`, `tsx`, `es6`, `sjs`, `jsm`, `pac`, `vue`

SQL

`sql`, `ddl`, `db2`, `udf`

Languages and file types covered by the All others setting

Language / Type

Extension

Python/Cython

`pyw`, `pyx`, `pxd`, `pxi`, `pyde`

Rusty Object Notation

`ron`

C++

`cxx`, `c++`, `hh`, `hxx`, `ipp`, `tpp`, `inl`, `tcc`

Visual Basic/VBScript/VBA

`vb`, `vbs`, `vba`, `bas`, `frm`

F#

`fs`, `fsi`, `fsx`

Swift

`swift`

PL/SQL

`plsql`, `plb`, `pkb`, `pks`, `prc`

R

`r`, `rd`

Shell scripts

`sh`, `bash`, `zsh`, `ksh`, `bats`, `command`, `tmux`

Windows Batch

`bat`, `cmd`

PowerShell

`ps1`, `psm1`, `psd1`

Objective-C++

`mm`

Make/ConTeXt

`makefile`, `mk`, `mak`, `mkiv`, `mkii`, `mkvi`

CMake

`cmake`

GYP

`gyp`

Bazel

`bzl`

TOML

`toml`

Docker

`dockerfile`

Build scripts (Dart, C#, Ruby, etc.)

`tool`, `cake`, `builder`

reStructuredText

`rst`

LaTeX

`tex`, `sty`, `bib`, `dtx`, `ins`

Templates (Ruby, Elixir, .NET, etc.)

`mustache`, `jinja`, `eex`, `rabl`, `cshtml`, `vbhtml`

Ruby DSLs

`thor`, `rake`, `jbuilder`, `gemspec`

LaTeX components

`cbx`, `bbx`, `lbx`

Cassandra Query Language

`cql`

SAP HANA XS JavaScript

`xsjslib`

Ruby CocoaPods specification

`podspec`

### Behavior

In this section, you can fine-tune specific aspects of the code completion feature:

![the Behavior section](https://resources.jetbrains.com/help/img/idea/2026.2/ai_code_completion_behavior.png "the Behavior section")

Item

Description

Completion policy

This option allows you to control how many code suggestions you receive and how strictly they are filtered for accuracy and relevance.

Select the number of suggestions you want to receive:

-   Creative – provides more extensive, open-ended suggestions by turning off all filters, allowing even incomplete or speculative code to encourage experimentation.

-   Balanced – delivers a moderate number of suggestions. Softer filters allow for more variety while still prioritizing relevance.

-   Focused – the default setting. Offers brief, precise suggestions by applying strict filters that exclude code that might be incorrect.

Enable suggestions in Code Comments using cloud models

Enable to receive suggestions in code comments.

Enable multi-line suggestions

Clear this checkbox to leave only single-line suggestions.

Synchronize inline and popup completions

Select this option to see suggestions listed in a popup that appears in the editor while you type. This way, you can avoid shortcut conflicts.

![Inline and popup completions combined](https://resources.jetbrains.com/help/img/idea/2026.2/ai_inline_and_popup_completions.png "Inline and popup completions combined")

Download models

Select how language models are downloaded for languages that support local code completion:

-   Ask before downloading

-   Automatically

-   Manually

## Change the cloud completion shortcut

You can change the default cloud completion shortcut that you use to accept suggestions.

1.  Hover over the suggestion.

2.  In the popup that appears, click ! and select the key that you want to use for accepting suggestions

    To assign your own shortcut, select Custom.

    ![Code completion popup%](https://resources.jetbrains.com/help/img/idea/2026.2/cloud_completion_shortcut.png "Code completion popup%")

You can also change any code completion shortcuts in the Settings | Keymap anytime.

## Collect AI completion logs

To analyze AI completion behavior or report inconsistencies to customer support, collect AI completion logs:

1.  In the main menu, go to Help | Edit Custom VM Options.

2.  In the .vmoptions file, add the `-Didea.is.internal=true` VM option.

3.  In the main menu, go to Navigate | Search Everywhere or press Shift twice to open the search window.

4.  Search for the `ml.completion.enable.diagnostics` setting and enable it.

5.  Restart the IDE.

6.  In the main menu, go to Tools | ML Diagnostics.

7.  In the ML Diagnostics tool window, open the Logs tab.

8.  Open any source file and start typing in the editor to trigger code completion suggestions.

9.  Select the log entries in the Logs tab, copy them, and send to [customer support](https://intellij-support.jetbrains.com/hc/en-us/requests/new?ticket_form_id=66731).

    > ### tip
    >
    > Review the logs and remove any confidential information before sending.
