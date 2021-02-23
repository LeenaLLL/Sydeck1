package com.sydeck.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DashboardPage extends BasePage{
    @FindBy(xpath = "(//*[@class='nav-link'])[2]")
    public WebElement BorrowingBooksLink;
}
