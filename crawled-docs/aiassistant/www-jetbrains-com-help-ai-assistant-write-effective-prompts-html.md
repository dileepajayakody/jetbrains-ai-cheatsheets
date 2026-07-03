# Write effective prompts

Last modified: 16 June 2026

The prompt is the biggest lever on the quality of a response. A clear, specific request gives AI Assistant what it needs to help you, while a vague one forces the model to guess your intent. These guidelines apply to both [chat](chat-mode.html) and [agents](agents.html).

## What makes a prompt effective

Strong prompts share a few habits. Each one below pairs a weak prompt with a stronger version, so you can see the difference.

State the goal and the outcome

Describe what you want and what a good result looks like.

**Weak:** "Fix my code."

There is no target and no symptom, so the model guesses what is broken and where.

**Better:** "The `parseDate` function in `DateUtils.kt` throws on timestamps with an offset like `+02:00`. Fix it and add a test."

Provide the right context

Attach the files, errors, or symbols the request depends on instead of describing them from memory.

**Weak:** "Why doesn't login work?"

The model cannot see which files or which error you are referring to.

**Better:** "Login returns 401 for valid credentials. See the attached `AuthService.kt` and the stack trace. The expected result is a 200 response with a token."

> ### tip
>
> For UI work, [attach](chat-mode.html#add-images-to-context) the target design so the model has something concrete to match.

Scope one task per request

Break a large task into steps you can review one at a time.

**Weak:** "Refactor the project, add tests, and fix the bugs."

The scope is too broad. The agent loses focus, and the result is hard to review.

**Better:** "Extract the validation logic from `OrderController` into a new `OrderValidator` class. Don't change the behavior."

> ### tip
>
> After receiving the response, you can send follow-ups for the next steps.

Plan large tasks first

For a broad task, ask the agent to propose a plan before it changes code.

**Weak:** "Rewrite the reporting module to support CSV and PDF export."

This is a broad change with many decisions, so going straight to code produces work that is hard to steer.

**Better:** "Before changing any code, outline a plan for adding CSV and PDF export to the reporting module. I'll review it before you start."

> ### tip
>
> You can also switch the agent to [Plan mode](agents.html#available-agents) if it is supported.

Define what "done" means

Name the metric, tests, or format that tells the model it has finished.

**Weak:** "Make it faster."

There is no metric and no finish line, so you cannot tell whether the change worked.

**Better:** "The `/search` endpoint takes about three seconds for 10,000 rows. Reduce the response time, keep the current API, and describe what you changed."

Name your constraints

Call out the libraries, files, or conventions to use or avoid.

**Weak:** "Add caching."

The model picks a library and an approach that might not match your project.

**Better:** "Cache `UserRepository.findById` using the existing Caffeine configuration in `CacheConfig.kt`, with a five-minute TTL. Don't add dependencies."

> ### tip
>
> When you rely on a convention, point to an example ("follow the pattern in `UserService.kt`") or move it into a [project rule](configure-project-rules.html) or [instruction file](configure-agent-behavior.html).

Ask the agent to verify its work

Tell the agent how to confirm the result.

**Weak:** "Update the code and we're done."

Without a check, neither you nor the agent can tell whether the change actually works.

**Better:** "Make the change, then run `./gradlew test` and confirm the build passes before you finish."

Iterate

Review the response and send focused follow-ups rather than starting over.

**Weak:** "That's not right, try again."

A blind retry discards the parts that were close and gives the model nothing new to act on.

**Better:** "Good start. Keep the structure, but handle the empty input and return an empty list instead of throwing."

## Common pitfalls

Even a strong prompt can be undercut by how you send it or what you do with the response. These are the mistakes that come up most often and how to avoid each one.

### Sending an incomplete request

Finish writing your request before you send it. Splitting one question across several messages leaves the model working with partial context and leads to weaker replies. While drafting a multi-line prompt, add line breaks to keep building the message and send only once the request is complete. You can also [attach context](chat-mode.html#add-context) so the model has everything it needs in a single turn.

### Carrying one chat across unrelated tasks

Each message in a chat builds on the ones before it. When you move on to an unrelated task in the same conversation, that earlier context lingers and can pull responses off-target. Start a new chat when the topic changes, so the model works from a clean slate.

### Expecting exact control over the output

A prompt steers the response, but it does not give you precise control over it. Wording such as "answer in two sentences" usually helps, yet it is not a hard limit. When the length or format matters, ask for an adjustment in a follow-up rather than expecting a single prompt to get it exactly right.

### Applying changes without reviewing them

Models and agents can sound confident even when they are wrong. Review the generated code and an agent's edits before you accept or commit them, as you would review a teammate's work. Treat each response as a draft to verify, not a finished result.

## Reuse prompts that work

When a prompt consistently gives you good results and you use it often, save it to the [Prompt Library](prompt-library.html) so you can run it again without rewriting it. For guidance that should apply to every request, define [project rules](configure-project-rules.html) or an [agent instruction file](configure-agent-behavior.html) instead of repeating it in each prompt.
