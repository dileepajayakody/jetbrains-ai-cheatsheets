# Early Access Program (EAP)

Last modified: 10 July 2026

The Early Access Program (EAP) gives you access to pre-release versions of Junie CLI with the latest features and improvements before they are generally available.

> ### note
>
> By participating in the EAP, you agree to the [JetBrains Junie Terms of Service](https://www.jetbrains.com/legal/docs/terms/jetbrains-junie/), including the EAP-specific terms. "EAP" means any of the pre-release versions of the product made available under these Terms as determined by JetBrains.

## Join the EAP

The EAP is free to join and includes a monthly usage quota at no cost. To request access, fill out the [Contact Form](https://intellij-support.jetbrains.com/hc/en-us/requests/new?ticket_form_id=66731).

We are actively looking for developers working with the following languages and technologies:

-   C and C++

-   PHP

-   Rust

-   Java

If you work with any of these languages, we especially encourage you to apply.

## Install the Early Access version

To install the Early Access version of Junie CLI, run the following command in your terminal:

Linux / macOS

Windows

```
curl -fsSL https://junie.jetbrains.com/install-eap.sh | bash
```

```
powershell -NoProfile -ExecutionPolicy Bypass -Command "iex (irm 'https://junie.jetbrains.com/install-eap.ps1')"
```

To verify the installation, restart your shell if needed and run:

```
junie --version
```

## Switch between EAP and stable versions

To switch back to the stable version, remove the local Junie launcher first:

Linux / macOS

Windows

```
rm ~/.local/bin/junie
```

```
Remove-Item "$HOME\.local\bin\junie.bat"
```

Then install the stable version using the standard installation command:

Linux / macOS

Windows

```
curl -fsSL https://junie.jetbrains.com/install.sh | bash
```

```
powershell -NoProfile -ExecutionPolicy Bypass -Command "iex (irm 'https://junie.jetbrains.com/install.ps1')"
```

For more details on the standard installation process, see the [Quickstart](junie-cli.html).

Thanks for your feedback!

Was this page helpful?

YesNo
