package saucedemo.runner;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {
				"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:",
				"html:target/cucumber-html-report",
				"json:target/cucumber.json",
				"pretty:target/cucumber-usage.json",
				"junit:target/cucumber-reports/Cucumber.xml"},
		features="src/test/resources/features",
		tags= "@LoginFeature",
		glue={"saucedemo.steps","saucedemo.base"}
		)
public class cucumberRunner {

}
