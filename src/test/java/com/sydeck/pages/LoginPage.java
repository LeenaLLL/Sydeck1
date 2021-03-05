package com.sydeck.pages;

import com.sydeck.utilities.BrowserUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage{

    @FindBy(css = "#inputEmail")
    public WebElement emailInput;

    @FindBy(css = "#inputPassword")
    public WebElement password;

    @FindBy(xpath = "//button")
    public WebElement signInButton;

    public void login(String userEmail, String passwordStr) {
        emailInput.sendKeys(userEmail);
        BrowserUtils.waitFor(2);
        password.sendKeys(passwordStr);
        signInButton.click();
        // verification that we logged
    }
}
