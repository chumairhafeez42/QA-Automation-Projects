package com.service.stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;
import com.service.pageLocators.shortenUrl;
import org.testng.Assert;
import utils.Constants;

import static org.testng.Assert.assertTrue;

public class shortenUrlStepDefinition {

    @When("^User visits Shorten Url tab$")
    public void visitShortenUrlTab() throws InterruptedException {
        WebElement shortenUrlTab = webDriver.driver.findElement(shortenUrl.shortenUrlLink);
        shortenUrlTab.click();
        Thread.sleep(3000);
    }

    @And("^User enters any valid url$")
    public void enterValidUrl(){
    WebElement shortenUrlField = webDriver.driver.findElement(shortenUrl.urlField);
    shortenUrlField.sendKeys(Constants.shortUrl);
    }

    @And("^User clicks on shorten url button$")
    public void clickShortenUrlBtn() throws InterruptedException {
    WebElement shortenUrlBtn = webDriver.driver.findElement(shortenUrl.getShortenUrlBtn);
    shortenUrlBtn.click();
        Thread.sleep(3000);
    }

    @Then("^Short url is generated along with toast message$")
    public void shortUrlGenerated(){
    WebElement shortenUrlToast = webDriver.driver.findElement(shortenUrl.urlToast);
    shortenUrlToast.isDisplayed();
    String shortenUrlToastMsg = shortenUrlToast.getText();
        Assert.assertEquals(shortenUrlToastMsg,Constants.shortenUrlMessage);
    }

    @And("^User enters multiple urls$")
    public void multipleUrls(){
        WebElement shortenUrlField = webDriver.driver.findElement(shortenUrl.urlField);
        shortenUrlField.sendKeys(Constants.multipleUrls);
    }

    @And("^User clicks on copy button for any short url$")
    public void clickCopyBtn() throws InterruptedException {
    WebElement linkCopyBtn = webDriver.driver.findElement(shortenUrl.copyBtn);
    linkCopyBtn.click();
    Thread.sleep(3000);
    }

    @Then("^Link is copied and successful toast message is displayed$")
    public void linkCopied(){
    WebElement toastMsg = webDriver.driver.findElement(shortenUrl.copyToast);
    toastMsg.isDisplayed();
    String copyToastMsg = toastMsg.getText();
    assertTrue(copyToastMsg.contains(Constants.shortUrlCopyMsg));
    }
}
