package com.service.stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import com.service.pageLocators.signUp;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import utils.Constants;

import java.util.Random;


public class signUpStepDefinition {

    @When("^User clicks on sign up button")
    public void signUpLink() throws InterruptedException {
        WebElement signUpLink = webDriver.driver.findElement(signUp.signUpBtn);
        signUpLink.click();
    }


    @And("^User enters invalid sign up form data$")
    public void signUpInvalid(){
        WebElement signUpFirstNameField = webDriver.driver.findElement(signUp.signUpFirstName);
        signUpFirstNameField.sendKeys(Constants.invalidFirstName);
        WebElement signUpLastNameField = webDriver.driver.findElement(signUp.signUpLastName);
        signUpLastNameField.sendKeys(Constants.invalidLastName);
        WebElement signUpEmailField = webDriver.driver.findElement(signUp.signUpEmail);
        signUpEmailField.sendKeys(Constants.invalidEmail);
        WebElement signUpPasswordField = webDriver.driver.findElement(signUp.signUpPassword);
        signUpPasswordField.sendKeys(Constants.signUpInvalidPassword);
        WebElement signUpRetypePasswordField = webDriver.driver.findElement(signUp.signUpRetypePassword);
        signUpRetypePasswordField.sendKeys(Constants.invalidRetypePassword);
        WebElement submitBtn = webDriver.driver.findElement(signUp.signUpSubmitBtn);
        submitBtn.click();
    }

    @Then("^New user account is not created successfully$")
    public void userNotCreated() throws InterruptedException {
        Thread.sleep(3000);
        WebElement errorToast = webDriver.driver.findElement(signUp.signUpErrorMsg);
        String errorMsg = errorToast.getText();
        Assert.assertEquals(errorMsg,Constants.signUpErrorMsg);
    }

    @And("^User enters valid sign up form data$")
    public void signUpValid(){
        String alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        StringBuilder sb = new StringBuilder();
        Random random = new Random();
        int length = 7;
        for(int i = 0; i < length; i++) {
            int index = random.nextInt(alphabets.length());
            char randomChar = alphabets.charAt(index);
            sb.append(randomChar);
        }
        String randomFirstName = sb.toString();
        System.out.println("Random String is: " + randomFirstName);
        WebElement signUpFirstNameField = webDriver.driver.findElement(signUp.signUpFirstName);
        signUpFirstNameField.sendKeys(randomFirstName);


        String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        StringBuilder nameGen = new StringBuilder();
        Random randomName = new Random();
        int nameLength = 7;
        for(int i = 0; i < nameLength; i++) {
            int index = randomName.nextInt(alphabet.length());
            char randomChar = alphabet.charAt(index);
            nameGen.append(randomChar);
        }
        String randomLastName = nameGen.toString();
        System.out.println("Random String is: " + randomLastName);
        WebElement signUpLastNameField = webDriver.driver.findElement(signUp.signUpLastName);
        signUpLastNameField.sendKeys(randomLastName);
        WebElement signUpEmailField = webDriver.driver.findElement(signUp.signUpEmail);
        signUpEmailField.sendKeys(randomFirstName+"@test.com");
        WebElement signUpPasswordField = webDriver.driver.findElement(signUp.signUpPassword);
        signUpPasswordField.sendKeys(Constants.signUpValidPassword);
        WebElement signUpRetypePasswordField = webDriver.driver.findElement(signUp.signUpRetypePassword);
        signUpRetypePasswordField.sendKeys(Constants.validRetypePassword);
        WebElement submitBtn = webDriver.driver.findElement(signUp.signUpSubmitBtn);
        submitBtn.click();

    }


    @Then("^New user account is created successfully$")
    public void userCreated() throws InterruptedException {
        Thread. sleep(3000);
        WebElement successToast = webDriver.driver.findElement(signUp.successMsg);
        String successMsg = successToast.getText();
        Assert.assertEquals(successMsg,Constants.signUpSuccessMsg);

    }

}

