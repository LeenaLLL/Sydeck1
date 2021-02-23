package com.sydeck.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage{

    @FindBy(css = "#inputEmail")
    public WebElement emailInput;

    @FindBy(css = "#inputPassword")
    public WebElement passwordInput;

    @FindBy(xpath = "//button")
    public WebElement signInButton;
}
