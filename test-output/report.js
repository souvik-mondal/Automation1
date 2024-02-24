$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/CucumberFramework/featureFiles/login.feature");
formatter.feature({
  "name": "Log into Account",
  "description": "  Existing user should be able to login to account using correct credentials",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login into account with correct credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User navigates to StackOverflow website",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberFramework.steps.LogInSteps.user_navigates_to_stack_overflow_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login button on homescreen",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberFramework.steps.LogInSteps.user_clicks_on_the_login_button_on_homescreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a valid username",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberFramework.steps.LogInSteps.user_enters_a_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a valid password",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberFramework.steps.LogInSteps.user_enters_a_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberFramework.steps.LogInSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be taken to the successful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberFramework.steps.LogInSteps.user_should_be_taken_to_the_successful_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/CucumberFramework/featureFiles/login2.feature");
formatter.feature({
  "name": "Log into Account",
  "description": "  Existing user should be able to login to account using correct credentials2",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login into account with correct credentials2",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User navigates to StackOverflow website2",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberFramework.steps.LogInSteps.user_navigates_to_stack_overflow_website2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login button on homescreen2",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberFramework.steps.LogInSteps.user_clicks_on_the_login_button_on_homescreen2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a valid username2",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberFramework.steps.LogInSteps.user_enters_a_valid_username2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a valid password2",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberFramework.steps.LogInSteps.user_enters_a_valid_password2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login button2",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberFramework.steps.LogInSteps.user_clicks_on_the_login_button2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be taken to the successful login page2",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberFramework.steps.LogInSteps.user_should_be_taken_to_the_successful_login_page2()"
});
formatter.result({
  "status": "passed"
});
});