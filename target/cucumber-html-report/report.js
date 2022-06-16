$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Sauce Demo login feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate user is able to login with Valid Username \u0026 Password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validateLoginWithValidIUsers"
    }
  ]
});
formatter.step({
  "name": "user should see login form",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should able to enter username \u0026 password",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on login button",
  "keyword": "When "
});
formatter.step({
  "name": "User should see product home screen",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to saucedemo application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userNavigateTo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate user is able to login with Valid Username \u0026 Password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@validateLoginWithValidIUsers"
    }
  ]
});
formatter.step({
  "name": "user should see login form",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldSeeLoginForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"standard_user\" and password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userEnterUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to enter username \u0026 password",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldAbleToEnterUsernamePassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see product home screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldSeeProductHomeScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to saucedemo application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userNavigateTo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate user is able to login with Valid Username \u0026 Password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@validateLoginWithValidIUsers"
    }
  ]
});
formatter.step({
  "name": "user should see login form",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldSeeLoginForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"problem_user\" and password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userEnterUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to enter username \u0026 password",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldAbleToEnterUsernamePassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see product home screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldSeeProductHomeScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to saucedemo application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userNavigateTo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate user is able to login with Valid Username \u0026 Password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@validateLoginWithValidIUsers"
    }
  ]
});
formatter.step({
  "name": "user should see login form",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldSeeLoginForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"performance_glitch_user\" and password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userEnterUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to enter username \u0026 password",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldAbleToEnterUsernamePassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see product home screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldSeeProductHomeScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate error message \"Username is required\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validateErrorMessageUsername"
    }
  ]
});
formatter.step({
  "name": "user should see login form",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should able to enter \"username\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on login button",
  "keyword": "When "
});
formatter.step({
  "name": "User should see error message as \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "standard_user",
        "",
        "Epic sadface: Password is required"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to saucedemo application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userNavigateTo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate error message \"Username is required\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@validateErrorMessageUsername"
    }
  ]
});
formatter.step({
  "name": "user should see login form",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldSeeLoginForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"standard_user\" and password as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userEnterUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to enter \"username\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldAbleToEnter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see error message as \"Epic sadface: Password is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldSeeErrorMessageAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate error message \"Password is required\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validateErrorMessagePassword"
    }
  ]
});
formatter.step({
  "name": "user should see login form",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should able to enter \"password\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on login button",
  "keyword": "When "
});
formatter.step({
  "name": "User should see error message as \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "",
        "secret_sauce",
        "Epic sadface: Username is required"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to saucedemo application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userNavigateTo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate error message \"Password is required\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@validateErrorMessagePassword"
    }
  ]
});
formatter.step({
  "name": "user should see login form",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldSeeLoginForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"\" and password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userEnterUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to enter \"password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldAbleToEnter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see error message as \"Epic sadface: Username is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldSeeErrorMessageAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate error message \"Password is required\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validateErrorMessageUsernamePassword"
    }
  ]
});
formatter.step({
  "name": "user should see login form",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should able to enter \"password\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on login button",
  "keyword": "When "
});
formatter.step({
  "name": "User should see error message as \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Epic sadface: Username is required"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to saucedemo application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userNavigateTo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate error message \"Password is required\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@validateErrorMessageUsernamePassword"
    }
  ]
});
formatter.step({
  "name": "user should see login form",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldSeeLoginForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"\" and password as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userEnterUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to enter \"password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldAbleToEnter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see error message as \"Epic sadface: Username is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldSeeErrorMessageAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate error message \"Sorry, this user has been locked out.\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validateErrorMessageUserLocked"
    }
  ]
});
formatter.step({
  "name": "user should see login form",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should able to enter \"password\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on login button",
  "keyword": "When "
});
formatter.step({
  "name": "User should see error message as \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to saucedemo application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userNavigateTo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate error message \"Sorry, this user has been locked out.\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@validateErrorMessageUserLocked"
    }
  ]
});
formatter.step({
  "name": "user should see login form",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldSeeLoginForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"locked_out_user\" and password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userEnterUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to enter \"password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldAbleToEnter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see error message as \"Epic sadface: Sorry, this user has been locked out.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userShouldSeeErrorMessageAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});