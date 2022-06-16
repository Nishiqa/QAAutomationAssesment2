package saucedemo.utility;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import saucedemo.base.DriverManager;

public class CommonFunctions {

    public DriverManager dr;

    public CommonFunctions(DriverManager dr){
        this.dr=dr;
    }

    public Boolean isElementPresent(WebElement element) {
           try{
               element.isDisplayed();
               return true;
           }catch (Exception e){
               return false;
           }
    }

    public Boolean isElementPresent(By element) {
        try{
            dr.getDriver().findElement(element).isDisplayed();
            return true;
        }catch (Exception e){
            return false;
        }
    }

    public void clickOnElement(By element){
        dr.getDriver().findElement(element).click();
    }

    public void enterText(By element,String text){
        dr.getDriver().findElement(element).sendKeys(text);
    }

    public String getElementText(By element){
        return dr.getDriver().findElement(element).getText();
    }

    public String getValueAttribute(By element){
        return dr.getDriver().findElement(element).getAttribute("value");
    }
}
