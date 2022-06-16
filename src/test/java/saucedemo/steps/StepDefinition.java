package saucedemo.steps;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import saucedemo.base.DriverManager;
import io.cucumber.java.en.Given;
import saucedemo.base.TestBase;
import saucedemo.pages.PageManager;
import saucedemo.utility.CommonFunctions;

public class StepDefinition {

    public DriverManager dr;
    public PageManager pm;
    public CommonFunctions cf;
    public TestBase b;

    public StepDefinition(DriverManager dr, PageManager pm, CommonFunctions cf, TestBase b) {
        this.dr = dr;
        this.pm = pm;
        this.cf = cf;
        this.b = b;
    }

    @Given("user navigate to saucedemo application")
    public void userNavigateTo() {
        dr.getDriver().get(b.prop.getProperty("app.url"));
    }

    @Then("user should see login form")
    public void userShouldSeeLoginForm() {
        Assert.assertTrue(cf.isElementPresent(pm.getLoginPage().username));
        Assert.assertTrue(cf.isElementPresent(pm.getLoginPage().password));
        Assert.assertTrue(cf.isElementPresent(pm.getLoginPage().loginButton));
    }

    @When("user enter username as {string} and password as {string}")
    public void userEnterUsernameAsAndPasswordAs(String username, String password) {
        cf.enterText(pm.getLoginPage().username, username);
        cf.enterText(pm.getLoginPage().password, password);
    }

    @Then("User should able to enter username & password")
    public void userShouldAbleToEnterUsernamePassword() {
        Assert.assertNotNull(cf.getValueAttribute(pm.getLoginPage().username));
        Assert.assertNotNull(cf.getValueAttribute(pm.getLoginPage().password));
    }

    @When("User click on login button")
    public void userClickOnLoginButton() {
        cf.clickOnElement(pm.getLoginPage().loginButton);
    }

    @Then("User should see product home screen")
    public void userShouldSeeProductHomeScreen() {
        Assert.assertTrue(cf.isElementPresent(pm.getLoginPage().productText));
    }

    @Then("User should able to enter {string}")
    public void userShouldAbleToEnter(String field) throws Exception {
        switch (field) {
            case "username" -> {
                Assert.assertNotNull(cf.getValueAttribute(pm.getLoginPage().username));
            }
            case "password" -> {
                Assert.assertNotNull(cf.getValueAttribute(pm.getLoginPage().password));
            }
            default -> throw new Exception("Value not implemented");
        }
    }

    @Then("User should see error message as {string}")
    public void userShouldSeeErrorMessageAs(String errorMessage) {
        Assert.assertEquals(errorMessage, cf.getElementText(pm.getLoginPage().errorMessage));
    }
}
