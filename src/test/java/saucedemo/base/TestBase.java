package saucedemo.base;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class TestBase {

    public DriverManager driverManager;
    public Properties prop;

    public TestBase(DriverManager driverManager) {
        this.driverManager = driverManager;
    }

    @Before(order = 1)
    public void setUp() throws Exception {
        prop = new Properties();
        prop.load(new FileInputStream(new File(System.getProperty("user.dir").concat("\\src\\test\\resources\\Config\\configuration.properties"))));
        driverManager.initDriver(prop.getProperty("browser.name"));
    }

    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            byte[] screenshot = ((TakesScreenshot) driverManager.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        }
        driverManager.getDriver().close();
    }

}
