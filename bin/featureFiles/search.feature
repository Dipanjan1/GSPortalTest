Feature: Testing Search

@Runme

Scenario: Check search icon
#
#Given I am on the homepage
#Then I should see search icon
#
Scenario: Click search icon
#
#Given I am on the homepage
#Then I should see search icon
#And I click on Search icon
#Then I should see Search text field


Scenario Outline: Test Search Functionality

Given I am on the homepage
And I click on Search icon
Then I should see Search text field
When I search for <search_query>
And I click on Search submit
Then I should see search results contain <search_query>

Examples:
|search_query|
#|Genie|
#|Gentu|
#|gfjh|
|We123|
|@123|
|@e12|


Scenario Outline: Check Search Result Count (Result count and result items listed not matching)

Given I am on the homepage
And I click on Search icon
Then I should see Search text field
When I search for <search_query>
And I click on Search submit
Then I should see search count and search result items match

Examples:
|search_query|
|Genie|
