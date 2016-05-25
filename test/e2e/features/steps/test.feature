Feature: end to end test

  Scenario: Wrapping WebDriver
    Given I am on the application home page
    And I wait for "1" seconds
    When I click the "DAVIS UGLO" button
    Then I should see "Davis Uglo" on icon name
#    When I click "Notes" tab
#    And I enter "" in title
#    And I select a date ""
#    And I click "Add"
#    Then I should see the note added