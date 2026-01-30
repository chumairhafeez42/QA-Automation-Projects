package com.service.stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import com.service.pageLocators.login;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import utils.Constants;

public class signInStepDefinition {

//    @When("^User enters invalid credentials$")
//    public void invalidCredentials(){
//        WebElement emailField = webDriver.driver.findElement(login.Email);
//        emailField.sendKeys(Constants.invalidEmail);
//        WebElement passwordField = webDriver.driver.findElement(login.password);
//        passwordField.sendKeys(Constants.invalidPassword);
//    }
//
//    @And("^User clicks on sign in button$")
//    public void signInBtnClick() throws InterruptedException {
//        WebElement signInBtn = webDriver.driver.findElement(login.loginBtn);
//        signInBtn.click();
//        Thread.sleep(5000);
//    }
//
//    @Then("^User is not logged in and unsuccessful toast message is displayed$")
//    public void notLoggedIn(){
//    WebElement errorToast = webDriver.driver.findElement(login.invalidLoginMsg);
//    String errorMsg = errorToast.getText();
//        Assert.assertEquals(errorMsg,Constants.invalidLoginMsg);
//    }
}
