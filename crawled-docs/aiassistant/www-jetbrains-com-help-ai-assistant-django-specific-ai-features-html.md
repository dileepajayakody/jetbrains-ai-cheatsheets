Specific IDEs

# Django-specific AI features

Last modified: 23 October 2025

**Only available in:** PyCharm

AI Assistant provides Django-specific support in PyCharm, offering context-aware code generation and suggestions for models, views, and other framework components to speed up Django development.

## Suggest Django intentions

1.  Select a code fragment and right-click it to open the context menu.

    Alternatively, select a code fragment and press AltEnter.

2.  Select AI Actions and choose the Django intention.

    ![Choosing the Django intention](https://resources.jetbrains.com/help/img/idea/2026.2/py_ai_choose_django_intention.png "Choosing the Django intention")

    Create Django View For Model

    AI Assistant suggests the code of a class-based view for the selected model along with the steps required to implement it in your project.

    This action is available only for Django models.

    Custom Django Intention

    AI Assistant provides the possible actions for the selected entity.

    ![AI Assistant suggests Django intentions](https://resources.jetbrains.com/help/img/idea/2026.2/py_ai_custom_django.png "AI Assistant suggests Django intentions")

    Create Django Admin For Model

    AI Assistant suggests the code required to register the selected model in the Django admin interface along with other necessary steps.

    Create Django Serializer For Model

    AI Assistant suggests the code of a `Serializer` class along with other necessary steps.

    Custom Django Smart Chat Intention

    AI Assistant provides the possible actions for the selected entity taking into account the context of your project provided as attached elements in the chat.

    ![AI Assistant suggests Django intentions with context](https://resources.jetbrains.com/help/img/idea/2026.2/py_ai_custom_django_context.png "AI Assistant suggests Django intentions with context")
