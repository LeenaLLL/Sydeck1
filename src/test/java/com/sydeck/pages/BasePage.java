package com.sydeck.pages;

import com.sydeck.utilities.BrowserUtils;
import com.sydeck.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public abstract class BasePage {

    public BasePage(){
        PageFactory.initElements(Driver.get(),this);
    }
    @FindBy(partialLinkText = "Users")
    public WebElement users;
    @FindBy(css=".nav-item")
    public List<WebElement> navItem;

    public void navigateToModule(String str){
        Driver.get().findElement(By.partialLinkText(str)).click();
    }


}
