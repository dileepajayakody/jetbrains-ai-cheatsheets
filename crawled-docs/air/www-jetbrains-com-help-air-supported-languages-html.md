1.  [Getting started](getting-started.html)

2.  [Language support](#0)

# Language support

Last modified: 09 March 2026

JetBrains Air supports different feature levels depending on the language. For some languages, JetBrains Air provides code navigation such as Go to Definition, Go to Implementation, and Find Usages. For other languages, JetBrains Air provides syntax highlighting only.

## Languages with LSP-backed support

For the languages in this section, JetBrains Air uses an LSP server to provide code insight. This can include navigation, completion, semantic highlighting, quick-fixes, rename, formatting, and related features.

Language

Provider

Kotlin

Kotlin Analyzer (kotlin-lsp)

Go

gopls

Rust

rust-analyzer

Python

basedpyright (Python + PythonStub)

C, C++, CUDA

clangd

TypeScript and JavaScript family

TypeScript language server (JS, JSX, TS, TSX, Vue, MJS, CJS, MTS, CTS)

HTML

VS Code HTML LSP (HTML, HTM)

CSS family

VS Code CSS LSP (CSS, SCSS, LESS)

Svelte

svelte-language-server

Java is not supported yet.

## LSP add-ons

JetBrains Air also uses add-on LSP servers in supported file types. These servers extend specific features but do not define primary language semantics.

Add-on

Where it works

Tailwind CSS LSP

HTML, Svelte, Vue, JavaScript, TypeScript, CSS, Sass, and related file types

Emmet LSP

HTML, CSS, SCSS, Sass, Less, JSX, TSX, XML, Vue, Svelte

## Syntax highlighting only

For the languages in this section, JetBrains Air provides TextMate-based syntax highlighting only.

-   MDX

-   Razor

-   ShaderLab

-   Dockerfile

-   Clojure

-   Dart

-   Erlang

-   TeX

-   LaTeX

-   BibTeX

-   Perl

-   Perl 6

-   Vim Script

-   Pug

-   F#

-   R

-   Diff

-   PHP

-   Lua

-   XML

-   XSL

-   ASP

-   PowerShell

-   Properties

-   INI

-   JSON

-   Java

-   Gitignore

-   Handlebars

-   CMake

-   Swift

-   Makefile

-   Shell

-   Markdown

-   YAML

-   Compose YAML

-   Log

-   C#

-   Julia

-   Batch

-   Groovy

-   CoffeeScript

-   HLSL

-   reStructuredText

-   Objective-C

-   Objective-C++

-   Ruby

-   Search Results

-   JSP

-   SQL

-   Twig

-   Terraform

-   HCL

## Third-party components

Some language features rely on third-party components. For the current list, see [Third Party Software and Licenses](https://www.jetbrains.com/legal/third-party-software/).
