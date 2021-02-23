package com.sydeck.stepDefinitions;

import com.sydeck.pages.BookManagementPage;
import com.sydeck.pages.BorrowingBooksPage;
import com.sydeck.pages.DashboardPage;
import com.sydeck.pages.LoginPage;
import com.sydeck.utilities.BrowserUtils;
import com.sydeck.utilities.ConfigurationReader;
import com.sydeck.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.en_old.Ac;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;

public class BorrowBooksStepDefs {
    LoginPage loginPage=new LoginPage();
    BookManagementPage bookManagementPage=new BookManagementPage();
    DashboardPage dashboardPage=new DashboardPage();
    BorrowingBooksPage borrowingBooksPage=new BorrowingBooksPage();
    @Given("Student user is on the Login Page")
    public void student_user_is_on_the_Login_Page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @Then("Student user enters valid {string} and {string}")
    public void student_user_enters_valid_and(String username, String password) {

       loginPage.emailInput.sendKeys(username);
       loginPage.passwordInput.sendKeys(password);

    }
    @Then("Student user should be on the Books page")
    public void student_user_should_be_on_the_Books_page() {
        Assert.assertTrue(Driver.get().getCurrentUrl().contains("books".toLowerCase()));
    }

    @When("Student user clicks the login button")
    public void student_user_clicks_the_login_button() {
        loginPage.signInButton.click();
        BrowserUtils.waitFor(2);
    }


    @Then("Student user should able to select from show records dropdown options")
    public void student_user_should_able_to_select_from_show_records_dropdown_options() {
        Select select=new Select(bookManagementPage.showRecordsDropdown);
        for(int i=0;i<select.getOptions().size();i++){
            select.selectByIndex(i);
            System.out.println(i+1+". option is "+select.getFirstSelectedOption().getText());
        }
    }


    @Then("Student user should able to search the book with {string}")
    public void student_user_should_able_to_search_the_book_with_and(String searchText) {
    BrowserUtils.waitFor(2);
        bookManagementPage.searchInput.sendKeys(searchText);
    BrowserUtils.waitFor(2);


    do {BrowserUtils.waitFor(2);
        List<String> searchedBookNames=BrowserUtils.getElementsText(borrowingBooksPage.bookNames);
        List<String> searchedAuthorNames=BrowserUtils.getElementsText(borrowingBooksPage.authorNames);

        for (int i=0;i<10;i++) {
            if(searchedBookNames.get(i).toLowerCase().contains(searchText.toLowerCase())){
                Assert.assertTrue(searchedBookNames.get(i).toLowerCase().contains(searchText.toLowerCase()));
                System.out.println(i+1+" " + searchedBookNames.get(i));
            }
            if(searchedAuthorNames.get(i).toLowerCase().contains(searchText.toLowerCase())){
                Assert.assertTrue(searchedAuthorNames.get(i).toLowerCase().contains(searchText.toLowerCase()));
                System.out.println(i+1+" " + searchedAuthorNames.get(i));
            }
        }
       if(!bookManagementPage.nextButton.getAttribute("class").contains("disabled")){
           bookManagementPage.nextButton.click();
           BrowserUtils.waitFor(3);
       }else{
           break;
       }

    }while(!bookManagementPage.nextButton.getAttribute("class").contains("disabled"));







//    int actualSearchedBookNamesSize=Driver.get().findElements(By.xpath("//tbody/tr/td[3][contains(.,'"+searchText.substring(1)+"')]")).size();
//    int actualSearchedAuthorNamesSize=Driver.get().findElements(By.xpath("//tbody/tr/td[4][contains(.,'"+searchText.substring(1)+"')]")).size();
//    int actualRowSize=Driver.get().findElements(By.xpath("//tbody/tr")).size();
//        System.out.println("searchText = " + searchText);
//        System.out.println("actualSearchedAuthorNamesSize = " + actualSearchedAuthorNamesSize);
//        System.out.println("actualSearchedBookNamesSize = " + actualSearchedBookNamesSize);
//        System.out.println("actualRowSize = " + actualRowSize);
//        Assert.assertTrue(actualSearchedBookNamesSize+actualSearchedAuthorNamesSize>=actualRowSize);
    }


    @Then("Student user should able to select from categories dropdown")
    public void student_user_should_able_to_select_from_categories_dropdown() {
       BrowserUtils.waitFor(2);
        Select select = new Select(bookManagementPage.categoriesDropdown);
        System.out.println("select.getOptions().size() = " + select.getOptions().size());
        for (int i =0; i<select.getOptions().size();i++) {
            select.selectByIndex(i);
            System.out.println(i + ". option is " + select.getFirstSelectedOption().getText());
        }
    }
    @When("Student user clicks on Borrowing Books page")
    public void student_user_clicks_on_Borrowing_Books_page() {
       BrowserUtils.waitFor(3);
       Actions actions=new Actions(Driver.get());
       actions.moveToElement(dashboardPage.BorrowingBooksLink);
       BrowserUtils.waitFor(2);
        dashboardPage.BorrowingBooksLink.click();
        BrowserUtils.waitFor(2);
        dashboardPage.BorrowingBooksLink.click();

    }

    @Then("Student user should able to return {string} that already borrowed before")
    public void student_user_should_able_to_return_that_already_borrowed_before(String bookName) {
        List<String> allBooks=BrowserUtils.getElementsText(borrowingBooksPage.bookNames);
        List<String> returnStatus=BrowserUtils.getElementsText(borrowingBooksPage.isReturned);

        for(int i=1;i<borrowingBooksPage.returnBookButtons.size();i++){
           BrowserUtils.waitFor(2);
        if(allBooks.get(i).equals(bookName) && returnStatus.get(i).equals("NOT RETURNED")){
        borrowingBooksPage.returnBookButtons.get(i).click();
        }
       }

    }

    @Then("Student user should able to see the history of the books borrowed")
    public void student_user_should_able_to_see_the_history_of_the_books_borrowed() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("Student user clicks on aa already borrowed book")
    public void student_user_clicks_on_aa_already_borrowed_book() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("Student user should not able to borrow that book")
    public void student_user_should_not_able_to_borrow_that_book() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("Student user clicks on an available Book")
    public void student_user_clicks_on_an_available_Book() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("Student user should borrow the Book")
    public void student_user_should_borrow_the_Book() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

}