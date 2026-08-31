1.  [Work with code](#0)

2.  [Open projects](#0)

# Open projects

Last modified: 18 August 2026

A project is the folder that holds your code, the same as in any other JetBrains IDE. Opening one creates a workspace around it: the container that keeps that project's tasks, Git state, and tools together.

Workspaces share one window, so you never open a second one. The Tasks tool lists your workspaces by project name, so you can work in one project while agents keep working in another.

![The Tasks tool listing the open workspaces by project name, below the New Task button and the task search
field](https://resources.jetbrains.com/help/img/air/tasks-projects-list.png "The Tasks tool listing the open workspaces by project name, below the New Task button and the task search
field")

### Open a project from disk

1.  Select File | Open, or File | Open Recent for a project you worked on before.

    Alternatively, open the workspace selector in the task header and select Open Folder.

2.  Select the project folder.

3.  When the project opens, JetBrains Air asks whether you trust the code in the folder. Click Trust only if you trust the authors of the project – opening it may run scripts or import code, which can execute anything in the project. To look around first, click Preview: JetBrains Air functionality will be limited but safer.

### Clone a project from Git

1.  In the main menu, select Git | Clone. Alternatively, open the workspace selector in the task header and select Clone from Git.

2.  In Source URL and Location, specify the repository URL and where to store the cloned repository.

3.  Click Clone.

### Switch to another workspace

-   Do one of the following:

    -   In the task header, open the workspace selector and select a workspace.

        ![The workspace selector open in the task header, showing the search field, the open
        workspaces with their project paths, and the Open Folder and Clone from Git items at the
        bottom](https://resources.jetbrains.com/help/img/air/task-workspace-selector.png "The workspace selector open in the task header, showing the search field, the open
        workspaces with their project paths, and the Open Folder and Clone from Git items at the
        bottom")

    -   Select View | Tasks in the main menu, or press Alt01. Then expand the workspace and select the task you want to work on.

        ![An expanded workspace in the Tasks tool, showing its tasks with statuses such as Draft, Review required, and Done](https://resources.jetbrains.com/help/img/air/tasks-project-expanded.png "An expanded workspace in the Tasks tool, showing its tasks with statuses such as Draft, Review required, and Done")

### Remove a workspace from the list

1.  In the Tasks tool, point to the workspace and click ….

2.  Select Remove and confirm. This clears the workspace from the list and leaves the project on disk untouched.

    To open the project again, select File | Open Recent and pick it from the list, or select File | Open and choose the project folder. File | Open Recent lists only the projects that don't have a workspace in the Tasks tool.
