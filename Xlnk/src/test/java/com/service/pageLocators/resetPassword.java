package com.service.pageLocators;

import org.openqa.selenium.By;

public interface resetPassword {

    By forgotPassword = By.linkText("Forgot Password");
    By email = By.xpath("//*[@type=\"email\"]");
    By submitBtn = By.className("ant-btn-block");
    By toastMsg = By.xpath("//span[contains(text(),'Password reset link sent successfully.')]");
    By invalidToastMsg = By.xpath("//span[contains(text(),'User not found')]");
}
