package com.service.stepDefinition;

import com.service.pageLocators.Dashboard;
import com.service.pageLocators.myShortlinks;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import utils.Constants;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import static java.lang.Integer.parseInt;
import static org.testng.Assert.assertTrue;

public class myShortlinksStepDefinition {
    JavascriptExecutor js = (JavascriptExecutor) webDriver.driver;

    @When("^User visits any short url$")
    public void visitShortURL() throws InterruptedException {

    WebElement shortenUrlLink = webDriver.driver.findElement(myShortlinks.shortenUrl);
    shortenUrlLink.click();
    Thread.sleep(3000);
    WebElement urlField = webDriver.driver.findElement(myShortlinks.linkField);
    urlField.sendKeys(Constants.shortUrl);
    WebElement shortenUrlBtn = webDriver.driver.findElement(myShortlinks.getShortenUrlBtn);
    shortenUrlBtn.click();
    Thread.sleep(5000);
    WebElement copyUrl = webDriver.driver.findElement(myShortlinks.copyLink);
    copyUrl.click();
    Thread.sleep(3000);
    WebElement shortenlink = webDriver.driver.findElement(myShortlinks.urlLink);
    String linkCopied = shortenlink.getText();
    String navigateUrl =  "https://" + linkCopied;
    ((JavascriptExecutor)webDriver.driver).executeScript("window.open()");
    Thread.sleep(3000);
    ArrayList<String> tabs = new ArrayList<String> (webDriver.driver.getWindowHandles());
    webDriver.driver.switchTo().window(tabs.get(1));
    webDriver.driver.get(navigateUrl);
    Thread.sleep(3000);
    webDriver.driver.switchTo().window(tabs.get(0));
    WebElement dashboardTab = webDriver.driver.findElement(myShortlinks.dashboardLink);
    dashboardTab.click();
    Thread.sleep(5000);
//    WebElement ipAlias = webDriver.driver.findElement(myShortlinks.tableAlias);
//    js.executeScript("arguments[0].scrollIntoView();", webDriver.driver.findElement(myShortlinks.aliasColumn));
//    ipAlias.click();
//    Thread.sleep(3000);
//    WebElement urlAlias = webDriver.driver.findElement(myShortlinks.aliasField);
//    urlAlias.sendKeys(Constants.urlAlias);
//    WebElement aliasUpdateBtn = webDriver.driver.findElement(myShortlinks.updateBtn);
//    aliasUpdateBtn.click();
//    Thread.sleep(5000);
    }

    @And("^User visits My Shortlinks tab$")
    public void visitShortlinks() throws InterruptedException {
    WebElement myShortlinksTab = webDriver.driver.findElement(myShortlinks.shortLinksTab);
    myShortlinksTab.click();
    Thread.sleep(3000);
}
    @And("^User observes shorten urls table$")
    public void shortlinksTable(){
    WebElement shortLinksTableUrl = webDriver.driver.findElement(myShortlinks.urlColumn);
    shortLinksTableUrl.isDisplayed();
    WebElement shortLinksTableAlias = webDriver.driver.findElement(myShortlinks.aliasColumn);
    shortLinksTableAlias.isDisplayed();
    WebElement shortLinksTableShortUrl = webDriver.driver.findElement(myShortlinks.shortColumn);
    shortLinksTableShortUrl.isDisplayed();
    WebElement shortLinksTableName = webDriver.driver.findElement(myShortlinks.NameColumn);
    shortLinksTableName.isDisplayed();
    WebElement shortLinksTableVists = webDriver.driver.findElement(myShortlinks.vistsColumn);
    shortLinksTableVists.isDisplayed();
    WebElement shortLinksTableActions = webDriver.driver.findElement(myShortlinks.actionColumn);
    shortLinksTableActions.isDisplayed();

    }

    @Then("^Short url details are displayed to the user$")
    public void shortUrlDetails(){
        WebElement visitedUrlColumn = webDriver.driver.findElement(myShortlinks.urlVisited);
        String visitedUrl = visitedUrlColumn.getText();
        Assert.assertEquals(visitedUrl,Constants.shortUrl);

        WebElement visitedShortUrlColumn = webDriver.driver.findElement(myShortlinks.shortUrl);
        String visitedShortUrl = visitedShortUrlColumn.getText();
        assertTrue(visitedShortUrl.contains("https://xlnk.it/"));

        WebElement urlVisitsColumn = webDriver.driver.findElement(myShortlinks.totalVisits);
        String urlVisits = urlVisitsColumn.getText();
        int totalUrlVisits = parseInt(urlVisits);
       Assert.assertEquals(totalUrlVisits,1);

        WebElement urlCopyIcon = webDriver.driver.findElement(myShortlinks.copyIcon);
        WebElement urlDeleteIcon = webDriver.driver.findElement(myShortlinks.deleteIcon);
        urlCopyIcon.isDisplayed();
        urlDeleteIcon.isDisplayed();

        WebElement totalLinks = webDriver.driver.findElement(myShortlinks.pagination);
        totalLinks.isDisplayed();
    }
    @And("^User enters visited url$")
    public void enterURL() throws InterruptedException {
        WebElement searchField = webDriver.driver.findElement(myShortlinks.searchBar);
        searchField.sendKeys(Constants.shortUrl);

        WebElement searchButton = webDriver.driver.findElement(myShortlinks.searchBtn);
        searchButton.click();
        Thread.sleep(3000);
    }

    @And("^User enters invalid url$")
    public void invalidURL() throws InterruptedException {
        WebElement searchField = webDriver.driver.findElement(myShortlinks.searchBar);
        searchField.sendKeys(Constants.invalidUrl);

        WebElement searchButton = webDriver.driver.findElement(myShortlinks.searchBtn);
        searchButton.click();
        Thread.sleep(3000);


    }

    @Then("^No data message is displayed with icon$")
    public void noDataMsg(){

        WebElement noDataIcon = webDriver.driver.findElement(myShortlinks.noDataImg);
        noDataIcon.isDisplayed();

        WebElement noDataText = webDriver.driver.findElement(myShortlinks.noDataLabel);
        String noDataMessage = noDataText.getText();
        Assert.assertEquals(noDataMessage,Constants.noDataMsg);
    }

    @And("^User clicks on copy icon$")
    public void clickCopyIcon(){
        WebElement copyBtn = webDriver.driver.findElement(myShortlinks.copyIcon);
        copyBtn.click();
    }

    @Then("^Short link is copied and successful toast message is displayed$")
    public void copyToast (){
    WebElement linkCopyToast = webDriver.driver.findElement(myShortlinks.copyToast);
    linkCopyToast.isDisplayed();
    String copyToastMsg = linkCopyToast.getText();
        assertTrue(copyToastMsg.contains("Copied!"));
    }

    @And("^User clicks on delete icon$")
    public void clickDeleteIcon() throws InterruptedException {
    WebElement linkDeleteIcon = webDriver.driver.findElement(myShortlinks.deleteIcon);
    linkDeleteIcon.click();
    Thread.sleep(3000);
    WebElement confirmBtn = webDriver.driver.findElement(myShortlinks.popUpOkBtn);
    confirmBtn.click();
    Thread.sleep(3000);
    }

    @Then("^Short link is deleted and successful toast message is displayed$")
    public void deleteToast(){
        WebElement linkDeleteToast = webDriver.driver.findElement(myShortlinks.deleteToast);
        linkDeleteToast.isDisplayed();
        String deleteToastMsg = linkDeleteToast.getText();
        Assert.assertEquals(deleteToastMsg,Constants.deleteMsg);
    }


    @And("^User clicks on any column name$")
    public void sortAnyColumn() throws InterruptedException {

            List<WebElement> columnName = webDriver.driver.findElements(myShortlinks.tableColumns);
            int totalColumns = columnName.size();
            Random rand = new Random();
            int randomNumber = rand.nextInt((totalColumns - 0));

            columnName.get(randomNumber).click();
            Thread.sleep(3000);
    }

    @Then("^The column is sorted successfully$")
    public void columnSorted() {
        WebElement columnSorting = webDriver.driver.findElement(myShortlinks.tableSort);
        columnSorting.isDisplayed();
    }


}