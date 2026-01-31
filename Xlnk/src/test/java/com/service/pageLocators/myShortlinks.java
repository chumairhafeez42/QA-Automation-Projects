package com.service.pageLocators;

import org.openqa.selenium.By;

public interface myShortlinks {

    By shortenUrl = By.xpath("//a[contains(text(),'Shorten URL')]");
    By linkField = By.xpath("//*[@formcontrolname=\"url\"]");
    By getShortenUrlBtn = By.xpath("//span[contains(text(),'Shorten URL')]");
    By copyLink = By.className("anticon-copy");
    By urlLink = By.xpath("(//*[@class=\"text-primary\"]) [1]");
    By dashboardLink = By.xpath("//a[contains(text(),'Dashboard')]");
    By tableAlias = By.xpath("(//*[@class=\"ant-table-cell\"])[5]");
    By aliasField = By.xpath("//*[@name=\"alias\"]");
    By updateBtn = By.xpath("//span[contains(text(),'Update')]");
    By shortLinksTab = By.xpath("//a[contains(text(),'My Shortlinks')]");
    By urlColumn = By.xpath("//thead/tr[1]/th[1]");
    By aliasColumn = By.xpath("//thead/tr[1]/th[2]");
    By shortColumn = By.xpath("//thead/tr[1]/th[3]");
    By NameColumn = By.xpath("//thead/tr[1]/th[4]");
    By vistsColumn = By.xpath("//thead/tr[1]/th[5]");
    By actionColumn = By.xpath("//thead/tr[1]/th[6]");
    By urlVisited = By.xpath("(//*[@class=\"ant-table-cell\"]) [2]");
    By urlAlias = By.xpath("(//*[@class=\"ant-table-cell\"]) [3]");
    By shortUrl = By.xpath("(//*[@class=\"ant-table-cell\"]) [4]");
    By totalVisits = By.xpath("(//*[@class=\"ant-table-cell\"]) [6]");
    By deleteIcon = By.className("anticon-delete");
    By copyIcon = By.className("anticon-copy");
    By pagination = By.className("ant-pagination-options-size-changer");
    By searchBar = By.xpath("//*[@formcontrolname=\"link\"]");
    By searchBtn = By.xpath("//span[contains(text(),'Search')]");
    By noDataImg = By.className("ant-empty-image");
    By noDataLabel = By.xpath("//p[contains(text(),'No Data')]");
    By copyToast = By.className("ant-message");
    By popUpOkBtn = By.xpath("//span[contains(text(),'OK')]");
    By deleteToast = By.xpath("//span[contains(text(),'Deleted successfully.')]");
    By tableColumns = By.className("ant-table-column-sorters");
    By tableSort = By.className("ant-table-column-sort");






}
