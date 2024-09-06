@loginRequired
Feature: Register a New Employee in BambooHR
  As a user
  I want to register a new employee
  So that the employee can be added to the BambooHR system

  Scenario: Successfully registering a new employee
    Given The user is on the Add New Employee page
    When The user enters the data in form
    And The user submits the employee registration form
    Then The user should see a confirmation message "Nice! Michi was added successfully."