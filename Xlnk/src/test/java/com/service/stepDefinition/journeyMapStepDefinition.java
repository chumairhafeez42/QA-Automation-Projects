package com.service.stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebElement;
import com.service.pageLocators.journeyMap;
import org.openqa.selenium.JavascriptExecutor;
import org.testng.Assert;
import utils.Constants;

import static org.testng.Assert.assertTrue;

public class journeyMapStepDefinition {
    JavascriptExecutor js = (JavascriptExecutor) webDriver.driver;

    @And("^User visits journey map tab$")
    public void visitJourneyMapTab() throws InterruptedException {
        WebElement journeyMapTab = webDriver.driver.findElement(journeyMap.journeyLink);
        journeyMapTab.click();
        Thread.sleep(3000);

    }

    @And("^User enters location in the search bar$")
    public void enterLocation(){
        WebElement searchBar = webDriver.driver.findElement(journeyMap.locationField);
        searchBar.sendKeys(Constants.journeyLocation);

    }
    @And("^User clicks on submit button$")
    public void clickSubmitBtn() throws InterruptedException {
        WebElement submitButton = webDriver.driver.findElement(journeyMap.submitBtn);
        submitButton.click();
        Thread.sleep(5000);
    }

    @Then("^Search results are shown according to the location entered$")
    public void searchResults(){
        WebElement urlHeader = webDriver.driver.findElement(journeyMap.urlColumn);
        js.executeScript("arguments[0].scrollIntoView();", urlHeader);

        WebElement visitedUrl = webDriver.driver.findElement(journeyMap.urlVisited);
        String tableUrl = visitedUrl.getText();
        Assert.assertEquals(tableUrl,Constants.shortUrl);

        WebElement tableLocation = webDriver.driver.findElement(journeyMap.visitedLocation);
        String userLocation = tableLocation.getText();
        WebElement searchBar = webDriver.driver.findElement(journeyMap.locationField);
        String enteredLocation = searchBar.getAttribute("value");
        assertTrue(userLocation.contains(enteredLocation));
    }

    @And("^User enters invalid url in the search bar$")
    public void enterInvalidUrl(){
        WebElement searchBar = webDriver.driver.findElement(journeyMap.locationField);
        searchBar.sendKeys(Constants.invalidUrl);
    }

   @Then("^No data message with icon is displayed$")
    public void noDataDisplayed() throws InterruptedException {
       WebElement urlHeader = webDriver.driver.findElement(journeyMap.urlColumn);
       js.executeScript("arguments[0].scrollIntoView();", urlHeader);
        Thread.sleep(3000);
    WebElement noDataIcon = webDriver.driver.findElement(journeyMap.noDataImg);
    noDataIcon.isDisplayed();
    WebElement noDataText = webDriver.driver.findElement(journeyMap.noDataMsg);
    String noDataMessage = noDataText.getText();
    Assert.assertEquals(noDataMessage,Constants.noDataMsg);
   }

    @And("^User observes journey map table$")
    public void journeyMapTable(){

        WebElement urlHeader = webDriver.driver.findElement(journeyMap.urlColumn);
        js.executeScript("arguments[0].scrollIntoView();", urlHeader);

     WebElement dateHeader = webDriver.driver.findElement(journeyMap.dateColumn);
     dateHeader.isDisplayed();

     urlHeader.isDisplayed();

     WebElement ipHeader = webDriver.driver.findElement(journeyMap.ipColumn);
     ipHeader.isDisplayed();

     WebElement ipAliasHeader = webDriver.driver.findElement(journeyMap.ipAliasColumn);
     ipAliasHeader.isDisplayed();

     WebElement locationHeader = webDriver.driver.findElement(journeyMap.locationColumn);
     locationHeader.isDisplayed();

     WebElement browserHeader = webDriver.driver.findElement(journeyMap.browserColumn);
     browserHeader.isDisplayed();

     WebElement versionHeader = webDriver.driver.findElement(journeyMap.versionColumn);
     versionHeader.isDisplayed();

     WebElement platformHeader = webDriver.driver.findElement(journeyMap.platformColumn);
     platformHeader.isDisplayed();
    }
    
    @Then("^Journey map table details are displayed to the user$")
    public void journeyMapDetails() throws InterruptedException {
    Thread.sleep(3000);
     WebElement visitedUrlColumn = webDriver.driver.findElement(journeyMap.urlVisited);
     String visitedUrl = visitedUrlColumn.getText();
     Assert.assertEquals(visitedUrl,Constants.shortUrl);


     WebElement userLocationColumn = webDriver.driver.findElement(journeyMap.visitedLocation);
     String userLocation = userLocationColumn.getText();
        assertTrue(userLocation.contains(Constants.journeyLocation));
    }
   
}


