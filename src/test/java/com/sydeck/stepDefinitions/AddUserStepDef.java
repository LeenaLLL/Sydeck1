package com.sydeck.stepDefinitions;

import com.sydeck.pages.AddNewUserPage;
import com.sydeck.pages.DashboardPage;
import com.sydeck.pages.LoginPage;
import com.sydeck.pages.UsersPage;
import com.sydeck.utilities.BrowserUtils;
import com.sydeck.utilities.ConfigurationReader;
import com.sydeck.utilities.Driver;
import io.cucumber.java.bs.A;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.awt.*;
import java.awt.datatransfer.DataFlavor;
import java.awt.datatransfer.UnsupportedFlavorException;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.List;

public class AddUserStepDef {
    @Given("the user logged in as {string}")
    public void the_user_logged_in_as(String userType) {
        Driver.get().get(ConfigurationReader.get("url"));
        //based on input enter that user information
        String username =null;
        String password =null;

        if(userType.equals("student")){
            username = ConfigurationReader.get("student_username");
            password = ConfigurationReader.get("student_password");
        }else if(userType.equals("librarian")){
            username = ConfigurationReader.get("librarian_username");
            password = ConfigurationReader.get("librarian_password");
        }
        //send username and password and login
        BrowserUtils.waitFor(2);
        new LoginPage().login(username,password);
    }


    @When("the user clicks the {string} button on the dashboard page")
    public void the_user_clicks_the_button_on_the_dashboard_page(String string) {
        BrowserUtils.waitFor(2);
         new DashboardPage().navigateToModule(string);

    }


    @Then("the user should be able to logged into {string}")
    public void the_user_should_be_able_to_logged_into(String string) {
        BrowserUtils.waitFor(2);
        Assert.assertTrue( new AddNewUserPage().addUserModal.isDisplayed());
    }

    @Then("system should not display the Users link button")
    public void system_should_not_display_the_Users_link_button() {
        Assert.assertFalse(BrowserUtils.getElementsText(new AddNewUserPage().navItem).contains("Users"));

    }

    @Then("System should display the following parameters")
    public void system_should_display_the_following_parameters(List<String> parameters) {
        BrowserUtils.waitFor(2);
      Assert.assertEquals(parameters,BrowserUtils.getElementsText(new AddNewUserPage().parameters));
    }

    @Then("User Group should have user types as Librarian and Students")
    public void user_Group_should_have_user_types_as_Librarian_and_Students() {
        List<String> expectedUserTypes= Arrays.asList("Librarian", "Students");
        Select slt= new Select(new AddNewUserPage().userGroup);
        List<String> actualUserTypes = BrowserUtils.getElementsText(slt.getOptions());
        Assert.assertEquals(expectedUserTypes,actualUserTypes);

    }

    @When("the user click the Status dropdown")
    public void the_user_click_the_Status_dropdown() {
        BrowserUtils.waitFor(2);
       new AddNewUserPage().userStatus.click();

    }

    @Then("the user should see user status")
    public void the_user_should_see_user_status(List<String> userTypes) {
        Select slt= new Select(new AddNewUserPage().userStatus);
        Assert.assertEquals(userTypes ,BrowserUtils.getElementsText( slt.getOptions()));

    }




    @Then("message {string} should be displayed.")
    public void message_should_be_displayed(String errorMsg) {
        Assert.assertTrue( Driver.get().findElement(By.xpath("//*[.='"+errorMsg+"']")).isDisplayed());
    }

    @When("{string} is selected in calender")
    public void is_selected_in_calender(String string) {
        new AddNewUserPage().startDate.click();
    Driver.get().findElement(By.xpath("//*[@class='datepicker-days']//tr[4]/td[6]")).click();
    }

    @Then("{string} should get displayed in the date field.")
    public void should_get_displayed_in_the_date_field(String date) throws IOException, UnsupportedFlavorException {
        new AddNewUserPage().startDate.click();
        BrowserUtils.waitFor(2);
        new AddNewUserPage().startDate.sendKeys(Keys.CONTROL + "a");
        new AddNewUserPage().startDate.sendKeys(Keys.CONTROL + "c");
        String myText = (String) Toolkit.getDefaultToolkit().getSystemClipboard().getData(DataFlavor.stringFlavor); // extracting the text that was copied to the clipboard
        BrowserUtils.waitFor(2);
        Assert.assertEquals(date,myText);
    }

    @When("the user clicks on the date field")
    public void the_user_clicks_on_the_date_field() {
        new AddNewUserPage().startDate.click();
    }

    @Then("current month’s calendar should be displayed by default.")
    public void current_month_s_calendar_should_be_displayed_by_default() {
        String[] monthName = {"January", "February",
                "March", "April", "May", "June", "July",
                "August", "September", "October", "November",
                "December"};

        Calendar cal = Calendar.getInstance();
        String month = monthName[cal.get(Calendar.MONTH)];
        Assert.assertTrue(new AddNewUserPage().calendarMonth.getText().contains(month));
    }

    @Then("the current date should be displayed on the date field.")
    public void the_current_date_should_be_displayed_on_the_date_field() throws IOException, UnsupportedFlavorException {
        new AddNewUserPage().startDate.click();
        new AddNewUserPage().startDate.sendKeys(Keys.CONTROL + "a");
        new AddNewUserPage().startDate.sendKeys(Keys.CONTROL + "c");
        String myText = (String) Toolkit.getDefaultToolkit().getSystemClipboard().getData(DataFlavor.stringFlavor); // extracting the text that was copied to the clipboard

        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        //get current date time with Date()
        Date date = new Date();

        // Now format the date
        String date1= dateFormat.format(date);

        Assert.assertEquals(date1,myText);

    }

    @When("the user clicks the date field")
    public void the_user_clicks_the_date_field() {
        new AddNewUserPage().startDate.click();
    }

    @When("clicks next icon over the calendar")
    public void clicks_next_icon_over_the_calendar() {
        new AddNewUserPage().calendarNext.click();
        BrowserUtils.waitFor(3);
    }

    @Then("clicks previous icon over the calendar")
    public void clicks_previous_icon_over_the_calendar() {
       new AddNewUserPage().calendarPrv.click();
        BrowserUtils.waitFor(3);
    }


    @Then("user should move to next month’s calendar")
    public void user_should_move_to_next_month_s_calendar() {
        String[] monthName = {"January", "February",
                "March", "April", "May", "June", "July",
                "August", "September", "October", "November",
                "December"};

        Calendar cal = Calendar.getInstance();
        String month = monthName[cal.get(Calendar.MONTH)+1];
        Assert.assertTrue(new AddNewUserPage().calendarMonth.getText().contains(month));
    }



    @Then("user should move to previous month’s calendar")
    public void user_should_move_to_previous_month_s_calendar() {
        String[] monthName = {"January", "February",
                "March", "April", "May", "June", "July",
                "August", "September", "October", "November",
                "December"};

        Calendar cal = Calendar.getInstance();
        String month = monthName[cal.get(Calendar.MONTH)];
        Assert.assertTrue(new AddNewUserPage().calendarMonth.getText().contains(month));

    }

    @When("the user enters new information")
    public void the_user_enters_new_information(Map<String,String> userInfo) {
    AddNewUserPage addNewUserPage=new AddNewUserPage();
    //When the user enters new information
        //		      | fullname   | suveyda            |
        //		      | password   |123456              |
        //		      | Email      |  suveyda@gmail.com |
        //		      | User Group | Librarian          |
        //		      | Status     | Inactive           |
        //		      | Start Date | 02-03-2016         |
        //		      | End Date   | 24-08-2018         |
        //		      | Adress     | mahalle            |
        Select status=new Select(addNewUserPage.userStatus);
        Select userGroup=new Select(addNewUserPage.userGroup);
        addNewUserPage.fullname.sendKeys(userInfo.get("fullname"));
        addNewUserPage.password.sendKeys(userInfo.get("password"));
        addNewUserPage.Email.sendKeys(userInfo.get("Email"));
       // addNewUserPage.startDate.sendKeys(userInfo.get("Start Date"));
       // addNewUserPage.endDate.sendKeys(userInfo.get("End Date"));
        addNewUserPage.Adress.sendKeys(userInfo.get("Adress"));
        status.selectByVisibleText(userInfo.get("Status"));
        userGroup.selectByVisibleText(userInfo.get("User Group"));
        BrowserUtils.waitFor(2);

    }

    @When("the user clicks the Add User button")
    public void the_user_clicks_the_Add_User_button() {
      new UsersPage().addUser.click();
    }

    @When("clicks Save changes")
    public void clicks_Save_changes() {
        new AddNewUserPage().save.click();
        BrowserUtils.waitFor(5);
    }

    @When("clicks Close")
    public void clicks_Close() {
        BrowserUtils.waitFor(5);
        new AddNewUserPage().close.click();

    }



    @When("the user enters invalid {string}")
    public void the_user_enters_invalid_e_mail(String email) {
        new AddNewUserPage().Email.sendKeys(email,Keys.TAB);
    }

    @When("the user enters {string} as a start date and {string} as an end date")
    public void the_user_enters_as_a_start_date_and_as_an_end_date(String string, String string2) {

      new AddNewUserPage().startDate.clear();
      new AddNewUserPage().startDate.sendKeys(string);
        new AddNewUserPage().startDate.clear();
        new AddNewUserPage().endDate.sendKeys(string2);
    }

    @Then("system should give an error message.")
    public void system_should_give_an_error_message() {

        Assert.assertFalse(new AddNewUserPage().save.isEnabled());
    }

    @When("the user enters already exist email {string}")
    public void the_user_enters_already_exist_email(String email) {
      new AddNewUserPage().Email.sendKeys(email,Keys.TAB);
    }

    @Then("the user should be able to save changes")
    public void the_user_should_be_able_to_save_changes() {
      new AddNewUserPage().save.click();
    }

    @Then("the user should not be added.")
    public void the_user_should_not_be_added(Map<String,String> userInfo ){
        new UsersPage().search.sendKeys(userInfo.get("Email"), Keys.ENTER);
        Assert.assertFalse(new UsersPage().searchedEmail.getText().contains(userInfo.get("Email")));
    }
    @When("the user enters invalid {string} as fullname")
    public void the_user_enters_invalid_as_fullname(String string) {
       new AddNewUserPage().fullname.sendKeys(string,Keys.TAB);
    }

    @When("the user leave the {string} empty")
    public void the_user_leave_the_empty(String string) {
      //  Driver.get().findElement(By.xpath("//input[@name='email']")).sendKeys(Keys.TAB);
        new AddNewUserPage().save.click();
    }


}
