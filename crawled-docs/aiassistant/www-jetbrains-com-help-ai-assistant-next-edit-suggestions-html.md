1.  [Write and edit code](#0)

2.  [Next edit suggestions](#0)

# Next edit suggestions

Last modified: 05 May 2026

When you write or edit code, AI Assistant can predict which parts you might want to change or add next and suggest likely edits. This allows you to quickly apply a suggestion and jump to the next place that might need a change, making it easier to update related code throughout the file.

> ### warning
>
> This functionality is currently not available for users on the **AI Free** [license tier](licensing-and-subscriptions.html#ai-assistant-license-tiers). This limitation will be addressed in future releases.

## Enable next edit suggestions

To enable the feature:

1.  Go to Settings | Editor | General | Code Completion | Inline.

2.  In the Next Edit Suggestions section, select the Enable next edit suggestions setting. Additionally, you can further configure how the edits are suggested:

    [![Next edit suggestions settings](https://resources.jetbrains.com/help/img/idea/2026.1/ai_settings_code_completion.png "Next edit suggestions settings")](https://resources.jetbrains.com/help/img/idea/2026.1/ai_settings_code_completion.png)

    -   Preview instantly – enable this setting to display suggested edits with fewer confirmation prompts.

    -   Chain suggestions – enable this setting to automatically request the next edit suggestion once the previous one has been accepted.

    -   Suggest refactorings – enable this setting to allow AI Assistant to suggest edits based on IDE refactoring actions, such as Rename refactoring.

    -   Suggest formatting-only edits – enable this setting if you want to receive suggestions that change indentation, spacing, and blank lines.

3.  In the Display Suggestions For section, configure for which languages the suggestions must be provided. The next edit suggestions feature will be available when working in files of the [corresponding types](/help/ai-assistant/next-edit-suggestions.html#languages-and-corresponding-file-types).

    ![The Display Suggestions For section](https://resources.jetbrains.com/help/img/idea/2026.1/ai_display_suggestions_for.png "The Display Suggestions For section")

    The All others option covers [other file types](/help/ai-assistant/next-edit-suggestions.html#all-other-file-types) and is disabled by default.

    Alternatively, you can click the Advanced Settings button to fine-tune the configuration.

    ![Advanced Settings](https://resources.jetbrains.com/help/img/idea/2026.1/ai_code_completion_advanced_settings.png "Advanced Settings")

4.  Click Apply to save changes.

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

## Invoke next edit suggestions

Once the next edit suggestions are enabled:

1.  In the editor, modify an existing line or write new code. AI Assistant will suggest the next edit.

2.  Press ⇥Tab to jump to the suggestion to review it, then press ⇥Tab again to apply it.

3.  Repeat the previous step to apply other suggestions.

    To cancel the suggestion, press ⎋Esc.

## Application examples

This section provides several examples of what can trigger the next edit suggestions feature.

Simple formatting

In the example below, the code has a formatting issue: no space after commas in parameter lists. Once you fix it in one place, AI Assistant will detect the pattern and suggest fixing all similar cases.

> ### note
>
> For simple formatting issues, the diff with changes is not shown.

Fixing typos

The example below demonstrates another common case: when you make a typo in your code, AI Assistant suggests replacing the typo with the correct word.

Introducing changes

The main case for this feature is when you introduce changes to your code. AI Assistant suggests the next place that you might want to change and provides the most likely edit.
