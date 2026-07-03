1.  [AI Assistant](settings-reference-ai-assistant.html)

2.  [Skills](#0)

# Skills

Last modified: 02 April 2026

Settings | Tools | AI Assistant | Skills

Use this page to configure skill sources and install [skills](agent-skills.html) for agents.

[![Skills settings](https://resources.jetbrains.com/help/img/idea/2026.1/ai_skills_settings.png "Skills settings")](https://resources.jetbrains.com/help/img/idea/2026.1/ai_skills_settings.png)

## Actions

Item

Description

![Skills Settings](https://resources.jetbrains.com/help/img/idea/2026.1/app.expui.general.settings.svg "Skills Settings") Skills Settings

Click to select which skills source you want to configure:

-   Manage Skill Directories – select this option if you want to specify your local directory as a skill source.

-   Manage External Registries – select this option if you want to specify a URL of an external registry as a skill source.

![Install Skill](https://resources.jetbrains.com/help/img/idea/2026.1/app-client.expui.general.add.svg "Install Skill") Install Skill

Click to install the selected skill and make it available for all projects in the current IDE.

Install !

Click the arrow button to select the level at which you want to install the skill:

-   IDE – the skill is available in all projects in the current IDE.

-   Project – the skill is available only in the current project.

-   Claude Agent – the skill is available only to [Claude Agent](claude-agent.html).

Open

Depending on the state of the skill:

-   Skill is not installed – navigate to the directory or external registry that contains the skill.

-   Skill installed – navigate to the directory on your machine where the installed skill is located.

Disable

Disable a skill to prevent it from being used by the agent.

Try

Click to test the selected skill in AI Chat.

## Manage Skill Directories dialog

Item

Tooltip

Description

![the Add Directory button](https://resources.jetbrains.com/help/img/idea/2026.1/app.expui.general.add.svg "the Add Directory button")

Add Directory

⌘Cmd0N

Add a new directory containing skills.

![the Remove Directory button](https://resources.jetbrains.com/help/img/idea/2026.1/app.expui.general.remove.svg "the Remove Directory button")

Remove Directory

⌘Cmd⌫Delete

Remove the selected directory.

## Manage External Skill Registries dialog

Item

Tooltip

Description

![the Add Registry URL button](https://resources.jetbrains.com/help/img/idea/2026.1/app.expui.general.add.svg "the Add Registry URL button")

Add Registry URL

⌘Cmd0N

Add a new registry URL.

![the Remove Registry URL button](https://resources.jetbrains.com/help/img/idea/2026.1/app.expui.general.remove.svg "the Remove Registry URL button")

Remove Registry URL

⌘Cmd⌫Delete

Remove the selected registry URL.

![the Edit Registry URL button](https://resources.jetbrains.com/help/img/idea/2026.1/app-client.expui.general.edit.svg "the Edit Registry URL button")

Edit Registry URL

↩Enter

Edit the selected registry URL.

For additional information, refer to [Skills](agent-skills.html).
