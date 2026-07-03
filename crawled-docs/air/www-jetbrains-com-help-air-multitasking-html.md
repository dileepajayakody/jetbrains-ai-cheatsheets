1.  [Run tasks](run-tasks.html)

2.  [Multitasking](#0)

# Multitasking

Last modified: 23 June 2026

Multitasking means running several tasks in the same workspace. You can run tasks in parallel, switch between them when input is required, and group tasks to keep work organized.

## Run tasks in parallel

You can run multiple tasks at the same time. Each task has its own state and progress in the Tasks tool.

![Tasks](https://resources.jetbrains.com/help/img/air/aird_multitasking_tasks.png "Tasks")

### Create another task

-   Select View | Tasks in the main menu and click New Task.

    ![New Task](https://resources.jetbrains.com/help/img/air/aird_multitasking_new_task.png "New Task")

-   Click the New Task icon or press ⌘Cmd⇧Shift0N.

    ![New Task](https://resources.jetbrains.com/help/img/air/aird_multitasking_new_task_2.png "New Task")

## Resume suspended tasks

When a task runs in an [isolated environment](/help/air/multitasking.html#multitasking_isolation) such as Docker or Git Worktree, it can become suspended when you close JetBrains Air. You can resume the task and continue from where it stopped.

### Resume a suspended task

1.  Select View | Tasks in the main menu.

2.  Select a task with the Suspended status.

3.  Click Resume.

    Send a follow-up message if you need to continue the work.

    ![Resume a task](https://resources.jetbrains.com/help/img/air/aird_multitasking_resume_task.png "Resume a task")

## Use isolation to avoid interference

Use isolated execution environments when tasks can edit the same files or run conflicting commands.

-   Use Git Worktree to isolate file changes in a separate working copy.

-   Use Docker to isolate tools and dependencies in a container.

For more information, refer to [Task run environments](execution-environments.html).

## Switch when input is required

A task can pause with the Input required state when it needs additional information. You can open the task, provide the input, or switch to a different task.

### Open a task that requires input

1.  Select View | Tasks from the main menu. Alternatively, press ⌘Cmd01

2.  Select the task with the Input required label. Alternatively, if a notification appears, click Open Task.

    ![Input Required](https://resources.jetbrains.com/help/img/air/aird_multitasking_input_required.png "Input Required")

## Group tasks

You can group tasks in the task list to keep work organized. You can group by date, status, or target.

### Change task grouping

1.  Select View | Tasks from the main menu. Alternatively, press ⌘Cmd01

2.  Click the settings icon next to the search field and select the grouping option: Date, Status, or Target.
