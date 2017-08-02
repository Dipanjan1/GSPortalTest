package testSearch;

import testSearch.stepDefinitionHelper;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class stepDefinitions {
	private stepDefinitionHelper script;

	public void setUpWebDriver() throws Exception {
	   script = new stepDefinitionHelper();
	   script.setUp();
	   script.goToHomePage();
	}
	
	public void seeSearchIcon() {
		script.seeSearchIcon();
	}
	
	public void clickSearchIcon() {
		script.clickSearchIcon();
	}
	
	public void clickSearchField() {
		script.clickSearchField();
	}
	
	public void enterSearchString(String textOnPage) {
		script.enterSearchString(textOnPage);
	}
	
	public void clickSearchSubmit() {
		script.clickSearchSubmit();
	}
	
	public void seeSearchResultText(String searchQuery) {
		script.seeSearchResultText(searchQuery);
	}
	
	public void validateSearchCount() {
		script.validateSearchCount();
	}
	
	@Given("I am on the homepage")
		public void i_am_on_the_homepage() throws Throwable{
		setUpWebDriver();
	}
	
	@Then("I should see search icon")
	public void i_should_see_search_icon() throws Throwable{
		seeSearchIcon();
	}
	
	@And("I click on Search icon")
		public void i_click_on_search_icon() throws Throwable{
		clickSearchIcon();
	}
	
	@Then("I should see Search text field")
		public void i_should_see_search_text_field() throws Throwable{
		clickSearchField();
	}
	
	@When("I search for (.*)")
		public void i_enter_search_string(String searchQuery) throws Throwable{
		enterSearchString(searchQuery);
	}
	
	@And("I click on Search submit")
		public void i_enter_search_submit() throws Throwable{
		clickSearchSubmit();
	}
	
	@Then("I should see search results contain (.*)")
		public void i_should_see_search_results(String textOnPage) throws Throwable{
		seeSearchResultText(textOnPage);
	}
	
	@Then("I should see search count and search result items match")
		public void search_count_search_items_match() throws Throwable{
		validateSearchCount();
	}
}
