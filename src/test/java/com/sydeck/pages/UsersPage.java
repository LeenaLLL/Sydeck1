package com.sydeck.pages;

import org.jsoup.helper.W3CDom;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class UsersPage extends BasePage {

    @FindBy(partialLinkText = "Add User")
    public WebElement addUser;
    //input[@type='search']
    @FindBy(xpath= "//input[@type='search']")
    public WebElement search;
    @FindBy(xpath = "//table[@id='tbl_users']//td[4]")
    public WebElement searchedEmail;

}
