Feature: Test Main Page

  I want to fail a login

  @focus
  Scenario: Failing login
    Given I login
    Then the url is /
    And I'm logged