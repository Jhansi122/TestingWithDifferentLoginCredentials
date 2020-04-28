package stepDefinitionCucumber;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition 

  
{
	WebDriver driver;
	
	@Given("^open Firefox browser$")
	public void open_Firefox_browser() throws Throwable {
	    System.setProperty("webdriver.gecko.driver", "C:\\Program Files\\Selenium\\Geckodriver\\geckodriver.exe\\");
	    driver = new FirefoxDriver();
	    driver.get("https://github.com/");
	    throw new PendingException();
	}
	
	@When("^user enters valid \"([^\"]*)\" and  valid \"([^\"]*)\"$")
	public void user_enters_valid_and_valid(String arg1, String arg2) throws Throwable {
	    WebElement login = driver.findElement(By.name("login"));
	    login.sendKeys("jhansi");
	    
	    throw new PendingException();
	}
   
	 
	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

}

