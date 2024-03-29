package CucumberFramework.steps;
import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;

import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LogInSteps {
	WebDriver driver;
	@Before
	public void setup() {
		System.setProperty("webdriver.edge.driver", "././src/test/resources/msedgedriver.exe");
		this.driver=new EdgeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(60));
	}

	@Given("User navigates to StackOverflow website")
	public void user_navigates_to_stack_overflow_website() {
	    this.driver.get("https://stackoverflow.com/");
	}

	@When("User clicks on the login button on homescreen")
	public void user_clicks_on_the_login_button_on_homescreen() {
		this.driver.findElement(By.xpath(".//a[contains(text(),\"Log in\")]")).click();
	}

	@Given("User enters a valid username")
	public void user_enters_a_valid_username() {
	    this.driver.findElement(By.xpath(".//*[@id=\"email\"]")).sendKeys("msouvik514@gmail.com");
	}

	@Given("User enters a valid password")
	public void user_enters_a_valid_password() {
	    this.driver.findElement(By.xpath(".//*[@id=\"password\"]")).sendKeys("try#SOUVIK@24");
	}

	@Given("User clicks on the login button")
	public void user_clicks_on_the_login_button() {
		this.driver.findElement(By.xpath("//*[@id=\"submit-button\"]")).click();
	}

	@Then("User should be taken to the successful login page")
	public void user_should_be_taken_to_the_successful_login_page() {
	    System.out.println("User should be taken to the successful login page");
	}
	@Given("User navigates to StackOverflow website2")
	public void user_navigates_to_stack_overflow_website2() {
		System.out.println("User navigates to StackOverflow website2");
	}

	@When("User clicks on the login button on homescreen2")
	public void user_clicks_on_the_login_button_on_homescreen2() {
		System.out.println("User clicks on the login button on homescreen2");

	}

	@When("User enters a valid username2")
	public void user_enters_a_valid_username2() {
	   System.out.println("User enters a valid username2");
	}

	@When("User enters a valid password2")
	public void user_enters_a_valid_password2() {
	    System.out.println("User enters a valid password2");
	}

	@When("User clicks on the login button2")
	public void user_clicks_on_the_login_button2() {
	   System.out.println("User clicks on the login button2");
	}

	@Then("User should be taken to the successful login page2")
	public void user_should_be_taken_to_the_successful_login_page2() {
	   System.out.println("User should be taken to the successful login page2");
	}
}
