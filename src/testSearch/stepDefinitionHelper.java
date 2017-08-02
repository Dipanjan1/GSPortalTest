package testSearch;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class stepDefinitionHelper {
	private WebDriver driver;
	private String baseUrl;

	
	public void setUp() throws Exception {
		System.setProperty("webdriver.gecko.driver", "/Applications/Automation/dependencies/geckodriver");
		driver = new FirefoxDriver();
		baseUrl = "https://www.geniesolutions.com.au";

		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
}
	//Open homepage
	public void goToHomePage(){
		driver.get(baseUrl);
	}
	
	//Check if search icon exists
	public void seeSearchIcon() {
		driver.findElement(By.id("Layer_1"));
	}
	
	//Click on the search icon
	public void clickSearchIcon() {
		WebElement element = driver.findElement(By.id("Layer_1"));
		element.click();
	}
	
	//Click on the search field
	public void clickSearchField() {
		WebElement element = driver.findElement(By.id("s"));
		element.click();
	}
	
	//Input search string
	public void enterSearchString(String searchQuery) {
		WebElement element = driver.findElement(By.id("s"));
		element.sendKeys(searchQuery);
	}
	
	//Search
	public void clickSearchSubmit() {
		WebElement element = driver.findElement(By.id("searchsubmit"));
		element.click();
	}
	
	//Check text on screen 
	public void seeSearchResultText(String textOnPage) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("landing-hero-content")));
		List<WebElement> textOnScreen = driver.findElements(By.className("landing-hero-content"));
		for (WebElement resultItem : textOnScreen){
	           String textToCheck = resultItem.getText();
	           Assert.assertTrue("" +textOnPage +"Not Found", (textToCheck.contains(textOnPage)));
	    }
	}
	
	//Check number of search result in text and actual search results match
	
	public void validateSearchCount() {
		WebElement element = driver.findElement(By.cssSelector(".row>h2"));
		String headerText = element.getText();
		String[] expectedSearchCount = headerText.split(" ");
		List <WebElement> searchResultItems = driver.findElements(By.className("search-post"));
		Integer resultItemsCount = searchResultItems.size();
        Assert.assertTrue("" +expectedSearchCount[2] +"Search result items not found", (expectedSearchCount[2].equals(resultItemsCount.toString())));
	}
}
