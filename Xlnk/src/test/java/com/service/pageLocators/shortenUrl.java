package com.service.pageLocators;

import org.openqa.selenium.By;

public interface shortenUrl {

    By shortenUrlLink = By.xpath("//a[contains(text(),'Shorten URL')]");
    By urlField = By.xpath("//*[@formcontrolname=\"url\"]");
    By getShortenUrlBtn = By.xpath("//span[contains(text(),'Shorten URL')]");
    By urlToast = By.xpath("//span[contains(text(),'URL(s) added successfully..')]");
    By copyBtn = By.className("anticon-copy");
    By copyToast = By.xpath("//strong[contains(text(),'Copied!')]");
}
