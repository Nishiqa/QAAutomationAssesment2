@LoginFeature
Feature: Sauce Demo login feature

  Background:
    Given user navigate to saucedemo application

  @validateLoginWithValidIUsers
  Scenario Outline: Validate user is able to login with Valid Username & Password
    Then user should see login form
    When user enter username as "<username>" and password as "<password>"
    Then User should able to enter username & password
    When User click on login button
    Then User should see product home screen
    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |

  @validateErrorMessageUsername
  Scenario Outline: Validate error message "Username is required"
    Then user should see login form
    When user enter username as "<username>" and password as "<password>"
    Then User should able to enter "username"
    When User click on login button
    Then User should see error message as "<errorMessage>"
    Examples:
      | username      | password | errorMessage                       |
      | standard_user |          | Epic sadface: Password is required |

  @validateErrorMessagePassword
  Scenario Outline: Validate error message "Password is required"
    Then user should see login form
    When user enter username as "<username>" and password as "<password>"
    Then User should able to enter "password"
    When User click on login button
    Then User should see error message as "<errorMessage>"
    Examples:
      | username | password     | errorMessage                       |
      |          | secret_sauce | Epic sadface: Username is required |

  @validateErrorMessageUsernamePassword
  Scenario Outline: Validate error message "Password is required"
    Then user should see login form
    When user enter username as "<username>" and password as "<password>"
    Then User should able to enter "password"
    When User click on login button
    Then User should see error message as "<errorMessage>"
    Examples:
      | username | password | errorMessage                       |
      |          |          | Epic sadface: Username is required |

  @validateErrorMessageUserLocked
  Scenario Outline: Validate error message "Sorry, this user has been locked out."
    Then user should see login form
    When user enter username as "<username>" and password as "<password>"
    Then User should able to enter "password"
    When User click on login button
    Then User should see error message as "<errorMessage>"
    Examples:
      | username        | password     | errorMessage                                        |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |
