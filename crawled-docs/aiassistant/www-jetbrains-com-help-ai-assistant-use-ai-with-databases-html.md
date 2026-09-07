Specific IDEs

# Use AI with databases

Last modified: 15 July 2026

**Available in:** DataGrip and IDEs with [Database Tools and SQL](https://plugins.jetbrains.com/plugin/10925-database-tools-and-sql-for-webstorm) plugin

AI Assistant enhances your database workflows by enabling natural language interactions within your IDE. It allows you to generate, explain, and optimize SQL queries more efficiently.

Specific IDEs

## Database-related AI agent skills

**Available in:** DataGrip

[Agent skills](agent-skills.html) define reusable procedures for AI agents. They provide step-by-step instructions for completing complex tasks using existing DataGrip or the [Database Tools and SQL](https://plugins.jetbrains.com/plugin/10925-database-tools-and-sql-for-webstorm) plugin features, including [MCP tools](mcp.html#database_specific_tools). Following these instructions helps agents generate higher-quality results with lower token usage.

Currently available database-related skills are as follows: [`database-tools`](/help/ai-assistant/use-ai-with-databases.html#explanation-for-query-plans), [`database-connection-management`](/help/ai-assistant/use-ai-with-databases.html#data_source_management), and [`database-text-to-sql`](/help/ai-assistant/use-ai-with-databases.html#text_to_sql).

This set of agent skills also enables [MCP tools](mcp.html#database_specific_tools) by default, which means you do not have to enable any additional settings to use the following agentic scenarios:

-   Text-to-SQL

-   Running queries

-   Retrieving the results

-   Observing schemas

-   Database introspection

These database-related skills are bundled with DataGrip and enabled by default. They are available only in the AI chat – not in the CLI. To toggle them, go to Settings | Tools | AI Assistant | Skills.

![The database-related AI agent skills in IDE settings](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_skill_bundled.png "The database-related AI agent skills in IDE settings")

Specific IDEs

## Database exploration and querying

**Available in:** DataGrip

You can ask questions about contents of a database in AI chat. The `database-tools` [agent skill](/help/ai-assistant/use-ai-with-databases.html#database_related_ai_agent_skills) helps you explore and interact with connected databases. For example, if you ask an agent to list the tables from a database, to show the first rows of a given table, or to run a query, the agent will browse schemas, introspect metadata, and preview data. When allowed by your settings and permissions, the agent will execute queries directly against the live connection.

To reduce token usage, only a small sample of query results is initially added to the agent's context, and additional rows are retrieved only when needed.

[![AI agent uses the database-tools skill to explore a connected database](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_skill_database_tools.png "AI agent uses the database-tools skill to explore a connected database")](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_skill_database_tools.png)

Specific IDEs

## Data source management

**Available in:** DataGrip

The `database-connection-management` [agent skill](/help/ai-assistant/use-ai-with-databases.html#database_related_ai_agent_skills) helps you set up a working database connection from the AI chat. For example, when you ask an agent to create a data source, providing some connection details, the agent will collect the missing information, build the JDBC URL, create the data source, and verify that the connection works. It can also fix and retest broken connections and list configured data sources.

Using the `database-connection-management` skill together with the `create_database_connection` and `edit_database_connection` tools, agents can perform the following tasks more efficiently:

-   Creating new data sources

-   Running test connections

-   Diagnosing connection issues

-   Updating existing data source settings

To have an agent create a new data source, ask it to do so and provide the connection details. The agent will create the data source and run a test connection.

[![AI agent creates a data source using MCP tools and agent skill](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_skill_data_source_create.png "AI agent creates a data source using MCP tools and agent skill")](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_skill_data_source_create.png)

The data source settings contain the connection details you provided.

![Data source settings contain the connection details provided earlier in chat](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_skill_data_source_settings.png "Data source settings contain the connection details provided earlier in chat")

If you need the agent to diagnose a connection issue or update an existing data source, ask it to do so, providing the details if needed.

![AI agent updates the dta source settings using the provided details](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_skill_data_source_update.png "AI agent updates the dta source settings using the provided details")

Specific IDEs

## Text-to-SQL

**Available in:** DataGrip

You can word your requests in AI chat in natural language. The `database-text-to-sql` [agent skill](/help/ai-assistant/use-ai-with-databases.html#database_related_ai_agent_skills) helps you turn plain-language requests into SQL queries. For example, if you ask an agent to show you the top 10 customers by total order value, it will explore the relevant schema and table structures on its own. The agent will generate a query against the actual database metadata, rather than guessing about table and column names. When safe and allowed by your settings, it can also run the query to verify that it works.

[![AI agent uses the database-to-sql skill to turn a plain-language request into a SQL query](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_skill_database_test_to_sql.png "AI agent uses the database-to-sql skill to turn a plain-language request into a SQL query")](https://resources.jetbrains.com/help/img/idea/2026.2/db_ai_skill_database_test_to_sql.png)

## Explanation for query plans

**IDE versions:** starting from 2026.1

You can ask our AI Assistant to explain your query plans. To do this, you have to invoke the Explain Plan action on your query first.

1.  In a query console, right-click your query and go to Explain Plan | Explain Plan or Explain Plan | Explain Analyse.

    The plan appears in the Query Plan tab of the Services tool window.

2.  On the left toolbar of the tab, click Analyze SQL Plan with AI. AI Assistant will then provide an explanation in the chat, where you can ask any additional questions you might have about the plan.

![AI Assistant explaining a query plan](https://resources.jetbrains.com/help/img/idea/2026.2/db_aia_explain_plan.png "AI Assistant explaining a query plan")

## Query optimization

**IDE versions:** starting from 2026.1

AI Assistant can now optimize your query for better performance and efficiency. It does this by:

-   Automatically detecting inefficiencies such as redundant `JOIN` clauses, missing indexes, or suboptimal execution plans.

-   Providing actionable suggestions or automatically rewriting queries to improve performance.

-   Leveraging Explain Plan outputs for deeper analysis and diagnostics.

This feature may require [attaching the database schema](ai-chat.html) to suggest proper explanations.

-   In a query console, right-click your query and select AI Actions | Optimize Query with AI.

    ![AI Assistant query optimization context menu action](https://resources.jetbrains.com/help/img/idea/2026.2/db_aia_query_optimization_action.png "AI Assistant query optimization context menu action")

    AI Assistant gives you a list of suggestions in the chat, and you can continue to ask any questions you might have there.

    ![AI Assistant query optimization](https://resources.jetbrains.com/help/img/idea/2026.2/db_aia_query_optimization.png "AI Assistant query optimization")
