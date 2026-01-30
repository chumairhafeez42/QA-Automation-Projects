package com.service.pageLocators;

import org.openqa.selenium.By;

public interface login {

    By signInBtn = By.linkText("Sign In");
    By Email = By.xpath("//input[@type=\"email\"]");
    By password = By.xpath("//input[@type=\"password\"]");
    By loginBtn = By.xpath("//span[contains(text(),'Sign in')]");
    By dashboard = By.xpath("//a[contains(text(),'Dashboard')]");
    By invalidLoginMsg = By.xpath("//span[contains(text(),'Invalid email or password!')]");
}

