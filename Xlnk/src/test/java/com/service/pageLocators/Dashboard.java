package com.service.pageLocators;

import org.openqa.selenium.By;

public interface Dashboard {

    By map = By.xpath("//*[@class=\"mapboxgl-canvas\"]");
    By pinPopup = By.className("mapboxgl-popup-content");
    By browserHeader = By.xpath("//h2[contains(text(),'Browser')]");
    By platformHeader = By.xpath("//h2[contains(text(),'Platform')]");
    By shortenUrl = By.xpath("//a[contains(text(),'Shorten URL')]");
    By linkField = By.xpath("//*[@formcontrolname=\"url\"]");
    By getShortenUrlBtn = By.xpath("//span[contains(text(),'Shorten URL')]");
    By tableUrl = By.xpath("(//*[@class=\"ant-table-cell\"])[3]");
    By tableDate = By.xpath("(//*[@class=\"ant-table-cell\"])[2]");
    By tableIP = By.xpath("(//*[@class=\"ant-table-cell\"])[4]");
    By tableAlias = By.xpath("(//*[@class=\"ant-table-cell\"])[5]");
    By tableLoc = By.xpath("(//*[@class=\"ant-table-cell\"])[6]");
    By tableBrowser = By.xpath("(//*[@class=\"ant-table-cell\"])[7]");
    By tableVersion = By.xpath("(//*[@class=\"ant-table-cell\"])[8]");
    By tablePlatform = By.xpath("(//*[@class=\"ant-table-cell\"])[9]");
    By tableRefer = By.xpath("(//*[@class=\"ant-table-cell\"])[10]");
    By copyLink = By.className("anticon-copy");
    By urlLink = By.xpath("(//*[@class=\"text-primary\"]) [1]");
    By dashboardLink = By.xpath("//a[contains(text(),'Dashboard')]");
    By searchBar = By.xpath("//*[@formcontrolname=\"link\"]");
    By searchBtn = By.xpath("//span[contains(text(),'Search')]");
    By copyIcon = By.className("anticon-copy");
    By copyToastMsg = By.className("ant-message");
    By tableColumns = By.className("ant-table-column-sorters");
    By tableSort = By.className("ant-table-column-sort");
    By noDataImg = By.className("ant-empty-image");
    By noDataMsg = By.className("ant-empty-description");
}
