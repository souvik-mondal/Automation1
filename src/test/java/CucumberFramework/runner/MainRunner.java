package CucumberFramework.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"src/test/java/CucumberFramework/featureFiles"},
		glue={"CucumberFramework.steps"},
		monochrome=true,
		tags= "",
		plugin = {"pretty", "html:test-output.html", "json:target/cucumber.json",
				"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"}

		)
public class MainRunner {

	
}
