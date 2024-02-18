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
  Existing user should be able to login to account using correct credentials

  Scenario: Login into account with correct credentials
    Given User navigates to StackOverflow website
    And User clicks on the login button
    And User enters a valid username
    And User enters a valid password
    And User clicks on the login button
    Then User should be taken to the successful login page

