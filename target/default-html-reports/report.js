$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddUser.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "US05_TC01_Add new user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-286"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to logged into \"add user page\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_should_be_able_to_logged_into(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US06_TC04_Student can not add a new user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-288"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"student\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "system should not display the Users link button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.system_should_not_display_the_Users_link_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US06_TC02_New users parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-289"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "System should display the following parameters",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.system_should_display_the_following_parameters(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US05_TC05_User Types",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-290"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.scenario({
  "name": "User Types",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Group should have user types as Librarian and Students",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.user_Group_should_have_user_types_as_Librarian_and_Students()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US06_TC06_User Status",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-291"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click the Status dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_click_the_Status_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see user status",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_should_see_user_status(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US05_TC10_Mandatory Fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SYD-293"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.step({
  "name": "the user leave the \"\u003cmandatory field\u003e\" empty",
  "keyword": "When "
});
formatter.step({
  "name": "clicks Save changes",
  "keyword": "And "
});
formatter.step({
  "name": "message \"This field is required.\" should be displayed.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Mandatory Fields"
      ]
    },
    {
      "cells": [
        "Full Name"
      ]
    },
    {
      "cells": [
        "Password"
      ]
    },
    {
      "cells": [
        "Email"
      ]
    }
  ]
});
formatter.scenario({
  "name": "US05_TC10_Mandatory Fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-293"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user leave the \"\u003cmandatory field\u003e\" empty",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_leave_the_empty(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks Save changes",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.clicks_Save_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"This field is required.\" should be displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US05_TC10_Mandatory Fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-293"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user leave the \"\u003cmandatory field\u003e\" empty",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_leave_the_empty(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks Save changes",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.clicks_Save_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"This field is required.\" should be displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US05_TC10_Mandatory Fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-293"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user leave the \"\u003cmandatory field\u003e\" empty",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_leave_the_empty(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks Save changes",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.clicks_Save_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"This field is required.\" should be displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US06_TC11_Selecting date in calendar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-294"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the date field",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_on_the_date_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"2021-03-25\" is selected in calender",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.is_selected_in_calender(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"2021-03-25\" should get displayed in the date field.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.should_get_displayed_in_the_date_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US06_TC08_Current month\u0027s calendar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-295"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the date field",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_on_the_date_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "current month’s calendar should be displayed by default.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.current_month_s_calendar_should_be_displayed_by_default()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US06_TC09_Default start date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-296"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the current date should be displayed on the date field.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_current_date_should_be_displayed_on_the_date_field()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US05_TC10_Move to previous and next month’s calendar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-297"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the date field",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_date_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks next icon over the calendar",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.clicks_next_icon_over_the_calendar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should move to next month’s calendar",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.user_should_move_to_next_month_s_calendar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks previous icon over the calendar",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.clicks_previous_icon_over_the_calendar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should move to previous month’s calendar",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.user_should_move_to_previous_month_s_calendar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US06_TC03_Librarian can add a new user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-298"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters new information",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_enters_new_information(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to save changes",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_should_be_able_to_save_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US06_TC07_Email validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SYD-299"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters invalid \"\u003ce-mail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "message \"Please enter a valid email address.\" should be displayed.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "e-mail"
      ]
    },
    {
      "cells": [
        "testAtgmail.com"
      ]
    },
    {
      "cells": [
        "@gmail"
      ]
    },
    {
      "cells": [
        "test@gmail"
      ]
    }
  ]
});
formatter.scenario({
  "name": "US06_TC07_Email validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-299"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters invalid \"testAtgmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_enters_invalid_e_mail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"Please enter a valid email address.\" should be displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US06_TC07_Email validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-299"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters invalid \"@gmail\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_enters_invalid_e_mail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"Please enter a valid email address.\" should be displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US06_TC07_Email validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-299"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters invalid \"test@gmail\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_enters_invalid_e_mail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"Please enter a valid email address.\" should be displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Please enter a valid email address.\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6JJOAII\u0027, ip: \u0027192.168.1.29\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.83, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:53323}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8869f64bd63c1063dde5e6e4b2dcef1a\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Please enter a valid email address.\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.sydeck.stepDefinitions.AddUserStepDef.message_should_be_displayed(AddUserStepDef.java:104)\r\n\tat ✽.message \"Please enter a valid email address.\" should be displayed.(file:///C:/Users/Asus/IdeaProjects/Sydeck/src/test/resources/features/AddUser.feature:241)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US05_TC12_Comparing the end date with the start date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-300"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"2021-02-24\" as a start date and \"2021-01-24\" as an end date",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_enters_as_a_start_date_and_as_an_end_date(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "system should give an error message.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.system_should_give_an_error_message()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat com.sydeck.stepDefinitions.AddUserStepDef.system_should_give_an_error_message(AddUserStepDef.java:268)\r\n\tat ✽.system should give an error message.(file:///C:/Users/Asus/IdeaProjects/Sydeck/src/test/resources/features/AddUser.feature:266)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US05_TC13_Already exist email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-301"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters already exist email \"librarian106@library\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_enters_already_exist_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"The email address already exists on the system.\" should be displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US05_TC14_Cancel the data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-302"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.scenario({
  "name": "Librarian can cancel new user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters new information",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_enters_new_information(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks Close",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.clicks_Close()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should not be added.",
  "rows": [
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_should_not_be_added(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US05_TC15_Fullname Validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SYD-303"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters invalid \"\u003cfull name\u003e\" as fullname",
  "keyword": "When "
});
formatter.step({
  "name": "message \"Please enter a valid full name.\" should be displayed.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "full name"
      ]
    },
    {
      "cells": [
        "1234"
      ]
    },
    {
      "cells": [
        "%"
      ]
    },
    {
      "cells": [
        "ayse12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "US05_TC15_Fullname Validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-303"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters invalid \"1234\" as fullname",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_enters_invalid_as_fullname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"Please enter a valid full name.\" should be displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Please enter a valid full name.\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6JJOAII\u0027, ip: \u0027192.168.1.29\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.83, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:53567}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 12094195e0a2ab49a8dd20595e7d9819\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Please enter a valid full name.\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.sydeck.stepDefinitions.AddUserStepDef.message_should_be_displayed(AddUserStepDef.java:104)\r\n\tat ✽.message \"Please enter a valid full name.\" should be displayed.(file:///C:/Users/Asus/IdeaProjects/Sydeck/src/test/resources/features/AddUser.feature:324)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US05_TC15_Fullname Validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-303"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters invalid \"%\" as fullname",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_enters_invalid_as_fullname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"Please enter a valid full name.\" should be displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Please enter a valid full name.\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6JJOAII\u0027, ip: \u0027192.168.1.29\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.83, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:53625}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 834994a32e241a8872fb9e4d19ebfe4d\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Please enter a valid full name.\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.sydeck.stepDefinitions.AddUserStepDef.message_should_be_displayed(AddUserStepDef.java:104)\r\n\tat ✽.message \"Please enter a valid full name.\" should be displayed.(file:///C:/Users/Asus/IdeaProjects/Sydeck/src/test/resources/features/AddUser.feature:324)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US05_TC15_Fullname Validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SYD-303"
    },
    {
      "name": "@SYD-287"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Users\" button on the dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_button_on_the_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_clicks_the_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters invalid \"ayse12\" as fullname",
  "keyword": "When "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.the_user_enters_invalid_as_fullname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"Please enter a valid full name.\" should be displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.sydeck.stepDefinitions.AddUserStepDef.message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Please enter a valid full name.\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6JJOAII\u0027, ip: \u0027192.168.1.29\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.83, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:53732}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 818b0222530401095fefee0f1d491995\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Please enter a valid full name.\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.sydeck.stepDefinitions.AddUserStepDef.message_should_be_displayed(AddUserStepDef.java:104)\r\n\tat ✽.message \"Please enter a valid full name.\" should be displayed.(file:///C:/Users/Asus/IdeaProjects/Sydeck/src/test/resources/features/AddUser.feature:324)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png", "screenshot");
formatter.after({
  "status": "passed"
});
});