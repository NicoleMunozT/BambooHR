Feature: BambooHR Login
  As a BambooHR user
  I want to be able to log in to the application
  So that I can access my account and use its features

  Scenario: User logs in with valid credentials
    Given The user is on the login page
    When The user enters the username and password
    And The user clicks the login button
    Then The user should see the BambooHR dashboard

