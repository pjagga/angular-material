Feature: end to end test

  @pj1
  Scenario: Wrapping WebDriver
    Given I am on the application home page
    And I wait for "2" seconds

    When I click the "DAVIS UGLO" contact button
    Then I should see "Davis Uglo" on icon name
    And I wait for "3" seconds
    And I click "NOTES" tab
    And I enter "Parma Lunch" in the "Title" input
    And I enter "12/03/2017" in the "Enter Date" input
    And I wait for "1" seconds

    And I click the "Add" button
    Then I should see the "Note added" toast message
    And I should see new card with "Parma Lunch" title


    @pj
Scenario: Search Text
  Given I am on the application home page
  And I wait for "2" seconds
  And I enter "Dav" in search contact field
  And I select "Davis Uglo" from the contact lookup