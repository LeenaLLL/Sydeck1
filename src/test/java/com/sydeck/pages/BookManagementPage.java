package com.sydeck.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class BookManagementPage extends BasePage{
    @FindBy(xpath = "//h3")
    public WebElement BookManagementTitle;

    @FindBy(xpath = "(//select)[2]")
    public WebElement showRecordsDropdown;

    @FindBy(xpath = "//*[@type='search']")
    public WebElement searchInput;

    @FindBy(id = "book_categories" )
    public WebElement categoriesDropdown;

    @FindBy(xpath = "//td[3]")
    public List<WebElement> bookNames;

    @FindBy(xpath = "//td[4]")
    public List<WebElement> authors;

    @FindBy(xpath = "//li[@class='page-item next']")
    public WebElement nextButton;

    @FindBy(css = ".page-item.next.disabled")
    public WebElement disabledNextButton;

    @FindBy(xpath = "//*[@class='fa fa-angle-right']/../..")
    public WebElement nextBtn;

}
