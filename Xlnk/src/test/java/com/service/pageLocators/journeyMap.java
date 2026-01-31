package com.service.pageLocators;

import org.openqa.selenium.By;

public interface journeyMap {
    By journeyLink = By.xpath("//a[contains(text(),'Journey Map')]");
    By locationField = By.xpath("//*[@formcontrolname=\"link\"]");
    By submitBtn = By.xpath("//span[contains(text(),'Submit')]");
    By urlColumn = By.xpath("//span[contains(text(),'URL')]");
    By urlVisited = By.xpath("//tbody/tr[2]/td[2]");
    By visitedLocation = By.xpath("//tbody/tr[2]/td[5]");
    By noDataImg = By.className("ant-empty-image");
    By noDataMsg = By.className("ant-empty-description");
    By dateColumn = By.xpath("//span[contains(text(),'Date')]");
    By ipColumn = By.xpath("//span[contains(text(),'IP')]");
    By ipAliasColumn = By.xpath("//span[contains(text(),'IP Alias')]");
    By locationColumn = By.xpath("//span[contains(text(),'Location')]");
    By browserColumn = By.xpath("//span[contains(text(),'Browser')]");
    By versionColumn = By.xpath("//span[contains(text(),'Version')]");
    By platformColumn = By.xpath("//span[contains(text(),'Platform')]");

}
