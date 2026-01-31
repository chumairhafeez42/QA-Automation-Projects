package com.service.stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;
import com.service.pageLocators.resetPassword;
import org.testng.Assert;
import utils.Constants;

public class resetPasswordStepDefinition {

    @When("^User enters valid email$")
    public void enterValidEmail() throws InterruptedException {
        WebElement resetPasswordLink = webDriver.driver.findElement(resetPassword.forgotPassword);
        resetPasswordLink.click();
        Thread.sleep(3000);
        WebElement emailField = webDriver.driver.findElement(resetPassword.email);
        emailField.sendKeys(Constants.validEmail);

    }
    @And("^User clicks on send link button$")
    public void clickSendBtn() throws InterruptedException {
    WebElement sendLinkBtn = webDriver.driver.findElement(resetPassword.submitBtn);
    sendLinkBtn.click();
        Thread.sleep(3000);
    }

    @Then("^Reset password link is sent to user email with successful toast message$")
    public void linkSent(){
    WebElement successfulToast = webDriver.driver.findElement(resetPassword.toastMsg);
    successfulToast.isDisplayed();
    String toastMsg = successfulToast.getText();
        Assert.assertEquals(toastMsg,Constants.successfulResetPasswordMsg);
    }

    @When("^User enters invalid email$")
    public void enterInvalidEmail() throws InterruptedException {
        WebElement resetPasswordLink = webDriver.driver.findElement(resetPassword.forgotPassword);
        resetPasswordLink.click();
        Thread.sleep(3000);
        WebElement emailField = webDriver.driver.findElement(resetPassword.email);
        emailField.sendKeys(Constants.invalidEmailId);
    }

    @Then("^Reset password link is not sent to user email and unsuccessful toast message is displayed$")
    public void linkNotSent(){
        WebElement unsuccessfulToast = webDriver.driver.findElement(resetPassword.invalidToastMsg);
        unsuccessfulToast.isDisplayed();
        String toastMsg = unsuccessfulToast.getText();
        Assert.assertEquals(toastMsg,Constants.unsuccessfulResetPasswordMsg);
    }



}
