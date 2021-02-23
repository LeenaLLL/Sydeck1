package com.sydeck.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class BorrowingBooksPage extends BasePage{
    @FindBy(xpath = "//td[6]")
    public List<WebElement> isReturned;

    @FindBy(xpath = "//td[1]/a")
    public List<WebElement> returnBookButtons;

    @FindBy(xpath = "//td[3]")
    public List<WebElement> bookNames;

    @FindBy(xpath = "//td[4]")
    public List<WebElement> authorNames;





}
