1.  [Write and edit code](#0)

2.  [Convert code to another language](#0)

# Convert code to another language

Last modified: 11 August 2026

With AI Assistant, you can convert your code from one programming language to another.

Specific IDEs

## Convert Java to Kotlin

**Available in:** IntelliJ IDEA Ultimate

AI Assistant can convert Java code to Kotlin with the help of a large language model. Compared with static, rule-based conversion, AI-assisted conversion produces more idiomatic Kotlin and can refine framework-specific code. You can convert a single file or several files at once.

> ### note
>
> AI-assisted Java-to-Kotlin conversion is an experimental feature. It does not replace the static, rule-based converter, which remains available.

### Before you start

Before you start the conversion, consider configuring the following:

-   Select a model used to perform the conversion on the [Java to Kotlin](settings-reference-java-to-kotlin.html) settings page. You can use the models provided by JetBrains AI, or select [your own provider](settings-reference-providers-and-api-keys.html).

-   Install the `kotlin-tooling-java-to-kotlin` skill if you want framework-specific refinements. For more information, refer to [Installed Skill](settings-reference-java-to-kotlin.html#settings-j2k-skill).

### Convert a single file

To convert a single open Java file to Kotlin using AI-assisted conversion:

1.  Open the Java file in the editor.

2.  From the main menu, select Code | Convert Java to Kotlin | AI-Assisted.

    [![Convert Java to Kotlin submenu with the AI-Assisted option in the Code menu](https://resources.jetbrains.com/help/img/idea/2026.2/ai_j2k_code_menu.png "Convert Java to Kotlin submenu with the AI-Assisted option in the Code menu")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_j2k_code_menu.png)

3.  If you have not configured the [conversion settings](settings-reference-java-to-kotlin.html) beforehand, configure them in the AI-Assisted Java to Kotlin dialog and click Convert.

    ![AI-Assisted Java to Kotlin dialog](https://resources.jetbrains.com/help/img/idea/2026.2/ai_j2k_conversion_dialog.png "AI-Assisted Java to Kotlin dialog")

4.  Review the suggested Kotlin in the Java to Kotlin | AI-Assisted panel. Click Accept Translation to apply the result or Cancel Translation to discard it.

When you accept a conversion, AI Assistant creates a corresponding Kotlin file and deletes the original Java file. To roll back the changes, press Ctrl0Z.

> ### tip
>
> You can also start the conversion from the Search Everywhere dialog: press Shift twice to open the search window and type AI-Assisted.

### Convert multiple files

AI-assisted conversion can process several files in one run. To do this:

1.  In the Project tool window, select what you want to convert: individual Java files, a package, a directory, or a source root.

2.  Right-click the selection and select Convert Java to Kotlin | AI-Assisted.

    [![Project tool window with several Java files selected and the Convert Java to Kotlin AI-Assisted option in the context menu](https://resources.jetbrains.com/help/img/idea/2026.2/ai_j2k_multifile_menu.png "Project tool window with several Java files selected and the Convert Java to Kotlin AI-Assisted option in the context menu")](https://resources.jetbrains.com/help/img/idea/2026.2/ai_j2k_multifile_menu.png)

3.  If you have not configured the [conversion settings](settings-reference-java-to-kotlin.html) beforehand, configure them in the AI-Assisted Java to Kotlin dialog and click Convert.

    ![AI-Assisted Java to Kotlin dialog](https://resources.jetbrains.com/help/img/idea/2026.2/ai_j2k_conversion_dialog.png "AI-Assisted Java to Kotlin dialog")

    AI Assistant then scans the selection for Java files and converts each one. Files that already have a matching Kotlin file, along with package-info.java and module-info.java, are skipped.

4.  In the Java to Kotlin | AI Assisted tool window, review the results. Files are grouped as Successful conversions, Failed conversions, and Skipped files. Select a file to see the Java-to-Kotlin diff. Only successful conversions can be selected for applying.

5.  Select the files to apply and click Accept Selected, or click Accept All to apply every successful conversion. To close the tool window without applying anything, click Cancel Migration.

When you accept a conversion, AI Assistant creates a corresponding Kotlin file and deletes the original Java file. Failed and skipped files are left unchanged. To roll back the changes, press Ctrl0Z.

### Configure Kotlin during conversion

If the project does not have Kotlin configured yet, you will be offered to configure it before the conversion. In the Kotlin Is Not Configured in the Project dialog, click OK, Configure Kotlin in the Project to continue, or No, Cancel Conversion to stop.

![Kotlin Is Not Configured in the Project dialog](https://resources.jetbrains.com/help/img/idea/2026.2/ai_j2k_configure_kotlin.png "Kotlin Is Not Configured in the Project dialog")

## Convert pasted code to another language

AI Assistant can suggest converting any code you paste into a file to the language of that file. This option is disabled by default. To use it:

> ### note
>
> This functionality is currently not supported in Jupyter notebooks.

1.  Press CtrlAlt0S to open settings and then select Tools | AI Assistant.

2.  Enable the Suggest converting pasted code to the language of the target file option and click Apply.

    ![Selected option that enables converting pasted code](https://resources.jetbrains.com/help/img/idea/2026.2/ai_enable_copy_paste_conversion.png "Selected option that enables converting pasted code")

Now you can copy the piece of code you want to convert and paste it into the file you work on.

AI Assistant detects the language of the pasted code and suggests to convert it to the language of the opened file.

![Convert Pasted Code dialog](https://resources.jetbrains.com/help/img/idea/2026.2/convert_pasted_code.png "Convert Pasted Code dialog")

If you click Convert, the code will be converted to the language of the target file. The code in the original language will also be pasted, but commented out.

![Commented-out code in the original language above the converted code](https://resources.jetbrains.com/help/img/idea/2026.2/converted_piece_of_code.png "Commented-out code in the original language above the converted code")
