package saucedemo.base;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DriverManager {

    public WebDriver driver;

    public void initDriver(String browserName) throws Exception {
        switch (browserName.toUpperCase()){
            case "CHROME"->{
                WebDriverManager.chromedriver().setup();
                this.driver=new ChromeDriver();
            }
            case "FIREFOX"->{
                WebDriverManager.firefoxdriver().setup();
                this.driver=new FirefoxDriver();
            }
            default -> throw new Exception("Value not implemented");
        }
        driver.manage().window().maximize();
    }

    public WebDriver getDriver(){
        return driver;
    }
}
