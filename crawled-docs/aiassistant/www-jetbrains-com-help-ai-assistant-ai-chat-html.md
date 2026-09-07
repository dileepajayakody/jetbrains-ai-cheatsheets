# AI Chat

Last modified: 18 August 2026

AI Chat is the main entry point for interacting with the AI models and agents supported in AI Assistant. Here, you can have conversations with language models, ask questions about your code or project, and work with agents to plan and execute development tasks.

AI Chat interactions generally follow this pattern:

-   **Select how you want to interact** – choose between a chat for everyday questions or an agent designed for advanced development tasks.

-   **Select a model** – choose the AI model that processes your requests. Models can be provided through the [JetBrains AI service](supported-llms.html#jbai-service-models), accessed from a [third-party AI provider](use-custom-models.html#provide-your-own-api-key), or [hosted locally](use-custom-models.html#connect-local-models).

-   **Add context to your request** – [provide](/help/ai-assistant/ai-chat.html#context-management) relevant information by attaching files, folders, images, symbols, or other elements that can serve as context for your query.

-   **Process the response** – AI Assistant can answer questions, generate code or terminal commands, and suggest file edits. You can review the results produced by the model or agent and [process](/help/ai-assistant/ai-chat.html#response-processing) the proposed changes as needed.

This allows you to get relevant answers, generate code, and make changes to your project using AI.

## Interface overview

AI Chat is available as a tool window located on the right toolbar. You can open it by clicking the ! AI Chat button.

![Open the AI Chat](https://resources.jetbrains.com/help/img/idea/2026.2/ai_open_ai_chat.png "Open the AI Chat")

The tool window consists of the following elements:

![AI Chat elements](https://resources.jetbrains.com/help/img/idea/2026.2/ai_chat_elements.png "AI Chat elements")

1.  [Chat mode selector](/help/ai-assistant/ai-chat.html#select-interaction-mode) – allows you to switch between a chat for quick conversations and one of the available agents for complex tasks.

2.  [Model selector](/help/ai-assistant/ai-chat.html#select-a-model) – lets you choose the language model to process your requests, including locally running models or models provided by configured third-party providers.

3.  [Add attachment button](/help/ai-assistant/ai-chat.html#context-management) – allows you to manually add files, folders, images, symbols, or other elements as context for your request.

4.  [Send button](chat-mode.html#send-messages) – submits your message to the AI model. Also allows you to choose how to send the prompt and to configure input shortcuts.

5.  [Chat History](/help/ai-assistant/ai-chat.html#conversations-history) – opens a list containing your previous conversations and allows you to manage them.

6.  [New Chat button](chat-mode.html#start-new-chat) – starts a new conversation.

7.  [Show Chats in Editor Tabs](customize-ai-chat.html#chat-in-editor) – opens the current chat as an editor tab to give the conversation more space.

8.  Options button – allows you to adjust the chat layout and manage AI Assistant settings from the ! Options menu.

## Interaction modes

AI Chat supports two ways of interacting with AI: **Chat** and **Agents**. The selected mode determines how the AI handles your requests.

![Select a chat mode](https://resources.jetbrains.com/help/img/idea/2026.2/ai_switch_chat_mode_intro.png "Select a chat mode")

JetBrains Pick

By default, AI Chat opens with a Recommended agent selected for use. This is JetBrains' current recommendation, chosen based on the benchmark results. JetBrains evaluates agent, model, and reasoning-level combinations on real development tasks across multiple programming ecosystems. Candidate configurations are evaluated by task solve rate, cost, and latency, and the finalists are then validated through A/B testing with real users, using signals such as engagement and agent switching.

The evaluation data is available in the [Developer Productivity AI Arena (DPAIA)](https://github.com/search?q=org%3Adpaia+is%3Apr+label%3Adefault-agent+&type=pullrequests), JetBrains' open benchmark for AI coding tools.

The recommendation can change over time as agents, models, and benchmark coverage evolve.

Agents

**Agents** are designed for more complex development tasks. They can perform multi-step actions in your project, modify multiple files, and report progress during execution. You can review the results and keep or roll back the changes if needed.

For the list of supported agents, refer to [Agents](agents.html).

Chat

Use **Chat mode** to ask general or project-related questions, request explanations, or generate code snippets. In this mode, the AI provides responses and suggestions but does not apply changes to your project automatically. Any generated code needs to be reviewed and [applied](/help/ai-assistant/ai-chat.html#response-processing) manually.

## Models

Different models have different capabilities, so you may want to switch them depending on your task. AI Assistant lets you choose from a [list](supported-llms.html#jbai-service-models) of supported LLMs, models from configured [third-party providers](use-custom-models.html#provide-your-own-api-key), or [locally running models](use-custom-models.html#connect-local-models).

![Select model](https://resources.jetbrains.com/help/img/idea/2026.2/ai_select_cloud_llm_intro.png "Select model")

For details on selecting a model in the chat, refer to [Select a model](chat-mode.html#select-a-model).

## Context

Attaching the right context to your request helps AI Assistant provide more accurate and relevant responses. You can add files, folders, images, symbols, commits, or other items to provide AI Assistant with additional information related to your question.

![Add context](https://resources.jetbrains.com/help/img/idea/2026.2/ai_add_context_to_request.png "Add context")

For details on adding context in Chat mode, refer to [Add context](chat-mode.html#add-context).

## Responses

AI Assistant responses can include code snippets, terminal commands, edit suggestions, or changes affecting one or multiple files.

How responses are processed depends on the selected [operation mode](/help/ai-assistant/ai-chat.html#select-interaction-mode):

-   In Chat mode, responses typically contain suggestions or code snippets that you can review and apply if needed.

    ![Chat response processing](https://resources.jetbrains.com/help/img/idea/2026.2/ai_chat_response_processing.png "Chat response processing")

-   **Agents** typically introduce more complex changes across multiple files, which you can review and accept or discard.

    ![Agent response processing](https://resources.jetbrains.com/help/img/idea/2026.2/ai_agents_rollback_specific_file.png "Agent response processing")

For details on processing responses in Chat mode, refer to [Process responses](chat-mode.html#process-responses).

## Conversations

AI Assistant organizes chat interactions as conversations. Each conversation keeps the history of your messages and responses, allowing you to revisit or continue previous interactions later if needed.

![All Chats list](https://resources.jetbrains.com/help/img/idea/2026.2/ai_all_chats.png "All Chats list")

For details on managing chat history, refer to [View chat history](chat-mode.html#chat-history).

## Next steps

To start working with AI Chat, explore the following topics:

-   [Chat with AI](chat-mode.html) – ask questions, attach context, process responses, and manage chat history.

-   [Agents](agents.html) – delegate complex, multi-step development tasks to a coding agent.
