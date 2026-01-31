package com.service.stepDefinition;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import utils.Constants;
import com.service.pageLocators.login;


public class Hooks {


//    @Before()
//    public void beforeFunction() throws InterruptedException {
//        System.setProperty("webdriver.chrome.driver", Constants.driverPath);
//        webDriver.driver = new ChromeDriver();
//        webDriver.driver.get(Constants.url);
//        webDriver.driver.manage().window().maximize();
//        WebElement loginBtn = webDriver.driver.findElement(login.signInBtn);
//        loginBtn.click();
//    }


    @Before("@Sanity")

    public void beforeScenario() throws InterruptedException {

        System.setProperty("webdriver.chrome.driver", Constants.driverPath);
        webDriver.driver = new ChromeDriver();
        webDriver.driver.get(Constants.url);
        webDriver.driver.manage().window().maximize();
        WebElement loginBtn = webDriver.driver.findElement(login.signInBtn);
        loginBtn.click();
        WebElement emailField = webDriver.driver.findElement(login.Email);
        emailField.sendKeys(Constants.username);
        WebElement pwdField = webDriver.driver.findElement(login.password);
        pwdField.sendKeys(Constants.password);
        WebElement signinBtn = webDriver.driver.findElement(login.loginBtn);
        signinBtn.click();
        Thread.sleep(10000);
        WebElement dashboardLink = webDriver.driver.findElement(login.dashboard);
        String Label = dashboardLink.getText();
        Assert.assertEquals(Label, "Dashboard");
    }

    @After
    public void afterScenario(){

        webDriver.driver.quit();
    }
}

