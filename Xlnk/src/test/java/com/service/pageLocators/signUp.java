package com.service.pageLocators;

import org.openqa.selenium.By;

public interface signUp {

    By signUpBtn = By.xpath("//u[contains(text(),'Sign up')]");
    By signUpFirstName = By.xpath("//input[@formcontrolname=\"first_name\"]");
    By signUpLastName = By.xpath("//input[@formcontrolname=\"last_name\"]");
    By signUpEmail = By.xpath("//input[@formcontrolname=\"email\"]");
    By signUpPassword = By.xpath("//input[@formcontrolname=\"password\"]");
    By signUpRetypePassword = By.xpath("//input[@formcontrolname=\"password_confirm\"]");
    By successMsg = By.xpath("//span[contains(text(),'Account created successfully')]");
    By signUpSubmitBtn = By.xpath("//span[contains(text(),'Sign up')]");
    By signUpErrorMsg = By.xpath("//span[contains(text(),'The email address')]");
    
}

