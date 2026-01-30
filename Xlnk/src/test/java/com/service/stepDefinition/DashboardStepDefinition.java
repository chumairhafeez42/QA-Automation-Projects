package com.service.stepDefinition;

import com.service.pageLocators.Dashboard;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import utils.Constants;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Random;

public class DashboardStepDefinition {



    JavascriptExecutor js = (JavascriptExecutor) webDriver.driver;
    Actions action = new Actions(webDriver.driver);

    @When("^User scrolls down the google map$")
    public void scrollMap(){
        WebElement browserGraph = webDriver.driver.findElement(Dashboard.browserHeader);
        js.executeScript("arguments[0].scrollIntoView();", browserGraph);
    }
    @Then("^Browser graph is shown for the visited shorten links$")
    public void browserGraph(){
        WebElement browserGraph = webDriver.driver.findElement(Dashboard.browserHeader);
        browserGraph.isDisplayed();
    }

    @Then("^Platform graph is shown for the visited shorten links$")
    public void platformGraph(){
        WebElement platformGraph = webDriver.driver.findElement(Dashboard.platformHeader);
        platformGraph.isDisplayed();
    }

    @When("^User observes shorten links table$")
    public void tableDetails() throws InterruptedException {
        WebElement shortenUrlLink = webDriver.driver.findElement(Dashboard.shortenUrl);
        shortenUrlLink.click();
        Thread.sleep(3000);
        WebElement urlField = webDriver.driver.findElement(Dashboard.linkField);
        urlField.sendKeys(Constants.shortUrl);
        WebElement shortenUrlBtn = webDriver.driver.findElement(Dashboard.getShortenUrlBtn);
        shortenUrlBtn.click();
        Thread.sleep(5000);
        WebElement copyUrl = webDriver.driver.findElement(Dashboard.copyLink);
        copyUrl.click();
        Thread.sleep(3000);
        WebElement shortenlink = webDriver.driver.findElement(Dashboard.urlLink);
        String linkCopied = shortenlink.getText();
        String navigateUrl =  "https://" + linkCopied;
//        System.out.println(navigateUrl);
        ((JavascriptExecutor)webDriver.driver).executeScript("window.open()");
        Thread.sleep(3000);
        ArrayList<String> tabs = new ArrayList<String> (webDriver.driver.getWindowHandles());
        webDriver.driver.switchTo().window(tabs.get(1));
        webDriver.driver.get(navigateUrl);
        Thread.sleep(3000);
        webDriver.driver.switchTo().window(tabs.get(0));
        WebElement dashboardLnk = webDriver.driver.findElement(Dashboard.dashboardLink);
        dashboardLnk.click();
        Thread.sleep(5000);
        js.executeScript("arguments[0].scrollIntoView();", webDriver.driver.findElement(Dashboard.searchBar));
    }

    @Then("^Correct details are shown for the shorten links table$")
    public void verifyDetails(){
        WebElement dateColumn = webDriver.driver.findElement(Dashboard.tableDate);
        Assert.assertNotNull(dateColumn);
        WebElement url = webDriver.driver.findElement(Dashboard.tableUrl);
        String navigatedUrl = url.getText();
        Assert.assertEquals(navigatedUrl,Constants.shortUrl);
        WebElement ipAddress = webDriver.driver.findElement(Dashboard.tableIP);
        Assert.assertNotNull(ipAddress);
        WebElement ipAlias = webDriver.driver.findElement(Dashboard.tableAlias);
        Assert.assertNotNull(ipAlias);
        WebElement tableLocation = webDriver.driver.findElement(Dashboard.tableLoc);
        Assert.assertNotNull(tableLocation);
        WebElement tableBrowserName = webDriver.driver.findElement(Dashboard.tableBrowser);
        Assert.assertNotNull(tableBrowserName);
        WebElement tableBrowserVersion = webDriver.driver.findElement(Dashboard.tableVersion);
        Assert.assertNotNull(tableBrowserVersion);
        WebElement tableUserPlatform = webDriver.driver.findElement(Dashboard.tablePlatform);
        Assert.assertNotNull(tableUserPlatform);
        WebElement tableReferLink = webDriver.driver.findElement(Dashboard.tableRefer);
        Assert.assertNotNull(tableReferLink);
    }


    @And("^User enters browser name in search bar$")
    public void enterBrowserName() throws InterruptedException {
    WebElement searchField = webDriver.driver.findElement(Dashboard.searchBar);
    searchField.sendKeys("Chrome");
    WebElement btnSearch = webDriver.driver.findElement(Dashboard.searchBtn);
    btnSearch.click();
    Thread.sleep(5000);
    }

    @Then("^Correct search results are shown to user$")
    public void searchResults(){
        WebElement tableBrowserName = webDriver.driver.findElement(Dashboard.tableBrowser);
        String BrowserName = tableBrowserName.getText();
        WebElement searchField = webDriver.driver.findElement(Dashboard.searchBar);
        String searchedBrowser = searchField.getAttribute("value");
        Assert.assertEquals(BrowserName,searchedBrowser);
    }

    @And("^User enters invalid url name in search bar$")
    public void invalidURL() throws InterruptedException {
    WebElement searchBar = webDriver.driver.findElement(Dashboard.searchBar);
    searchBar.sendKeys(Constants.invalidUrl);
    WebElement searchButton = webDriver.driver.findElement(Dashboard.searchBtn);
        searchButton.click();
        Thread.sleep(3000);
    }

    @Then("^No data message is displayed to user with icon$")
    public void noDataMsg(){
    WebElement noDataIcon = webDriver.driver.findElement(Dashboard.noDataImg);
    noDataIcon.isDisplayed();
    WebElement noSearchResult = webDriver.driver.findElement(Dashboard.noDataMsg);
    String noSearchMsg = noSearchResult.getText();
    Assert.assertEquals(noSearchMsg,Constants.noDataMessage);
    }



    @And("^User clicks on copy button$")
    public void clickCopyBtn(){
        WebElement copyBtn = webDriver.driver.findElement(Dashboard.copyIcon);
        copyBtn.click();

    }
    @Then("^Successful toast message is displayed$")
    public void copyToastMsg(){
        WebElement toastMessage = webDriver.driver.findElement(Dashboard.copyToastMsg);
        toastMessage.isDisplayed();
    }

    @And("^User clicks on column name$")
    public void clickColumnName() throws InterruptedException {
//        List columnName = (ArrayList) webDriver.driver.findElements(Dashboard.tableColumns);

        List<WebElement> columnName = webDriver.driver.findElements(Dashboard.tableColumns);
        int totalColumns = columnName.size();


        Random rand = new Random();
        int randomNumber = rand.nextInt((totalColumns - 0) + 1);

        columnName.get(randomNumber).click();
        Thread.sleep(3000);

    }
    @Then("^Column is sorted successfully$")
    public void columnSort(){
        WebElement columnSorting = webDriver.driver.findElement(Dashboard.tableSort);
        columnSorting.isDisplayed();
    }

}
