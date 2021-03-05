package com.sydeck.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class AddNewUserPage extends BasePage {
    @FindBy(id = "add_user_modal")
    public WebElement addUserModal;

    @FindBy(css = "#add_user_form .form-group .control-label")
    public List<WebElement> parameters;

    @FindBy(id = "user_group_id")
    public WebElement userGroup;
    @FindBy(id = "status")
    public WebElement userStatus;

    @FindBy(name = "start_date")
    public WebElement startDate;

    @FindBy(name = "end_date")
    public WebElement endDate;
    @FindBy(xpath ="//input[@name='email']")
    public WebElement Email;

    @FindBy(xpath = "//input[@type='password']")
    public WebElement password;

    @FindBy(id="address")
    public WebElement Adress;
    @FindBy(xpath = "//*[@name='full_name']")
    public WebElement fullname;

    @FindBy(xpath = "//table[@class=' table-condensed']//th[2]")
    public WebElement calendarMonth;
    @FindBy(xpath = "//table[@class=' table-condensed']//th[1]")
    public WebElement calendarPrv;
    @FindBy(xpath = "//table[@class=' table-condensed']//th[3]")
    public WebElement calendarNext;
    @FindBy(xpath = "//button[.='Save changes']")
    public WebElement save;
    @FindBy(xpath = "//button[.='Close']")
    public WebElement close;

}
