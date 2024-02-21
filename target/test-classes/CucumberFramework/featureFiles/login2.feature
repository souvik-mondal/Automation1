#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Log into Account
  Existing user should be able to login to account using correct credentials2

  Scenario: Login into account with correct credentials2
    Given User navigates to StackOverflow website2
    When User clicks on the login button on homescreen2
    And User enters a valid username2
    And User enters a valid password2
    And User clicks on the login button2
    Then User should be taken to the successful login page2

