package saucedemo.pages;

import lombok.Data;
import org.openqa.selenium.By;

@Data
public class LoginPage {

    public By username= By.id("user-name");
    public By password=By.id("password");
    public By loginButton=By.id("login-button");
    public By errorMessage=By.cssSelector("h3[data-test='error']");
    public By productText=By.xpath("//span[text()='Products']");


}
