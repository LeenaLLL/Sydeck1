Feature: 

	#User Story : 
	#
	#As a librarian I should be able to add new users
	#
	#Acceptance Criteria:
	#
	#1-Librarian can add new user
	#2-Add user should have following parameters : Full Name, Password, Email, User Group, Status, Start Date, End Date, Address
	#3-User Group should have 2 user types as Librarian and Students
	#4-Status should have ACTIVE and INACTIVE
	@SYD-286 @SYD-287
	Scenario: US05_TC01_Add new user
		
		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		And the user clicks the "Add User" button
		Then the user should be able to logged into "add user page"
			

	#User Story : 
	#
	#As a librarian I should be able to add new users
	#
	#Acceptance Criteria:
	#
	#1-Librarian can add new user
	#2-Add user should have following parameters : Full Name, Password, Email, User Group, Status, Start Date, End Date, Address
	#3-User Group should have 2 user types as Librarian and Students
	#4-Status should have ACTIVE and INACTIVE
	@SYD-288 @SYD-287
	Scenario: US06_TC04_Student can not add a new user
		
		Given the user logged in as "student"
		Then system should not display the "user button"	

	#User Story : 
	#
	#As a librarian I should be able to add new users
	#
	# 
	#
	#Acceptance Criterias:
	#
	#1-Librarian can add new user
	#2-Add user should have following parameters : Full Name, Password, Email, User Group, Status, Start Date, End Date, Address
	#3-User Group should have 2 user types as Librarian and Students
	#4-Status should have ACTIVE and INACTIVE
	@SYD-289 @SYD-287
	Scenario: US06_TC02_New users parameters

		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		Then System should display the following parameters 
		|Full Name| 
		|Password| 
		|Email| 
		|User Group| 
		|Status| 
		|Start Date| 
		|End Date| 
		|Address|	

	#User Story :
	#
	#As a librarian I should be able to add new users
	#
	#Acceptance Criteria:
	#
	#1-Librarian can add new user
	#2-Add user should have following parameters : Full Name, Password, Email, User Group, Status, Start Date, End Date, Address
	#3-User Group should have 2 user types as Librarian and Students
	#4-Status should have ACTIVE and INACTIVE
	@SYD-290 @SYD-287
	Scenario: US05_TC05_User Types
		Scenario: User Types
		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		And the user clicks the "Add User" button
		Then User Group should have user types as Librarian and Students
			

	#User Story :
	#
	#As a librarian I should be able to add new users
	#
	#Acceptance Criteria:
	#
	#1-Librarian can add new user
	#2-Add user should have following parameters : Full Name, Password, Email, User Group, Status, Start Date, End Date, Address
	#3-User Group should have 2 user types as Librarian and Students
	#4-Status should have ACTIVE and INACTIVE
	#Navigate to the url
	@SYD-291 @SYD-287
	Scenario: US06_TC06_User Status
		
		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		And the user clicks the "Add User" button
		When the user click the Status dropdown
		Then the user should see user types
		|ACTIVE  |
		|INACTIVE |	

	#User Story :
	#
	#As a librarian I should be able to add new users
	#
	#Acceptance Criteria:
	#
	#1-Librarian can add new user
	#2-Add user should have following parameters : Full Name, Password, Email, User Group, Status, Start Date, End Date, Address
	#3-User Group should have 2 user types as Librarian and Students
	#4-Status should have ACTIVE and INACTIVE
	@SYD-293 @SYD-287
	Scenario: US05_TC10_Mandatory Fields

		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		And the user clicks the "Add User" button
		When the user leave the mandatory field empty
		|full name|
		|password|
		|email|
		And  clicks  "Save changes"
		Then message "This field is required." should be displayed.
			

	
	@SYD-294 @SYD-287
	Scenario: US06_TC11_Selecting date in calendar
		
		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		And the user clicks the "Add User" button
		When " 2021-02-25" is selected in calender 
		Then selected date should get displayed in the date field.	

	#User Story : 
	#
	#As a librarian I should be able to add new users
	#
	# 
	#
	#Acceptance Criterias:
	#
	#1-Librarian can add new user
	#2-Add user should have following parameters : Full Name, Password, Email, User Group, Status, Start Date, End Date, Address
	#3-User Group should have 2 user types as Librarian and Students
	#4-Status should have ACTIVE and INACTIVE
	@SYD-295 @SYD-287
	Scenario: US06_TC08_Current month's calendar
		
		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		And the user clicks the "Add User" button
		When the user clicks on the date field
		Then current month’s calendar should be displayed by default.	

	#User Story :
	#
	#As a librarian I should be able to add new users
	#
	#Acceptance Criteria:
	#
	#1-Librarian can add new user
	#2-Add user should have following parameters : Full Name, Password, Email, User Group, Status, Start Date, End Date, Address
	#3-User Group should have 2 user types as Librarian and Students
	#4-Status should have ACTIVE and INACTIVE
	@SYD-296 @SYD-287
	Scenario: US06_TC09_Default start date
		
		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		And the user clicks the "Add User" button
		Then the current date should be displayed on the date field.	

	#User Story :
	#
	#As a librarian I should be able to add new users
	#
	#Acceptance Criteria:
	#
	#1-Librarian can add new user
	#2-Add user should have following parameters : Full Name, Password, Email, User Group, Status, Start Date, End Date, Address
	#3-User Group should have 2 user types as Librarian and Students
	#4-Status should have ACTIVE and INACTIVE
	@SYD-297 @SYD-287
	Scenario: US05_TC10_Move to previous and next month’s calendar
		
		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		And the user clicks the "Add User" button
		When the user clicks the date field
		And clicks "next" icon over the calendar
		Then user should move to next month’s calendar
		And clicks "previous" icon over the calendar
		Then user should move to previous month’s calendar	

	
	@SYD-298 @SYD-287
	Scenario: US06_TC03_Librarian can add a new user
		    
		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		And the user clicks the "Add User" button
		When the user enters new information
		      | fullname   | suveyda            |
		      | password   |123456              |
		      | Email      |  suveyda@gmail.com |
		      | User Group | Librarian          |
		      | Status     | Inactive           |
		      | Start Date | 02-03-2016         |
		      | End Date   | 24-08-2018         |
		      | Adress     | mahalle            |
		    And click "Save changes" 
		    Then the user should be added.	

	#User Story :
	#
	#As a librarian I should be able to add new users
	#
	#Acceptance Criteria:
	#
	#1-Librarian can add new user
	#2-Add user should have following parameters : Full Name, Password, Email, User Group, Status, Start Date, End Date, Address
	#3-User Group should have 2 user types as Librarian and Students
	#4-Status should have ACTIVE and INACTIVE
	@SYD-299 @SYD-287
	Scenario Outline: US06_TC07_Email validation
		
		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		And the user clicks the "Add User" button
		When the user enters invalid <"e-mail"> 
		Then message "Please enter a valid email address." should be displayed.
		Examples:
		|e-mail|
		|testAtgmail.com|
		|test@gmailcom|
		|test@gmail|
		|@gmail|	

	#User Story :
	#
	#As a librarian I should be able to add new users
	#
	#Acceptance Criteria:
	#
	#1-Librarian can add new user
	#2-Add user should have following parameters : Full Name, Password, Email, User Group, Status, Start Date, End Date, Address
	#3-User Group should have 2 user types as Librarian and Students
	#4-Status should have ACTIVE and INACTIVE
	@SYD-300 @SYD-287
	Scenario: US05_TC12_Comparing the end date with the start date
		
		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		And the user clicks the "Add User" button
		When the user enters " 2021-02-24" as a start date and " 2021-01-24" as an end date
		Then system should give an error message.	

	#User Story :
	#
	#As a librarian I should be able to add new users
	#
	#Acceptance Criteria:
	#
	#1-Librarian can add new user
	#2-Add user should have following parameters : Full Name, Password, Email, User Group, Status, Start Date, End Date, Address
	#3-User Group should have 2 user types as Librarian and Students
	#4-Status should have ACTIVE and INACTIVE
	@SYD-301 @SYD-287
	Scenario: US05_TC13_Already exist email
		
		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		And the user clicks the "Add User" button
		When the user enters already exist email "librarian106@library"
		Then message "The email address already exists on the system." should be displayed.	

	#User Story : 
	#
	#As a librarian I should be able to add new users
	#
	# 
	#
	#Acceptance Criterias:
	#
	#1-Librarian can add new user
	#2-Add user should have following parameters : Full Name, Password, Email, User Group, Status, Start Date, End Date, Address
	#3-User Group should have 2 user types as Librarian and Students
	#4-Status should have ACTIVE and INACTIVE
	@SYD-302 @SYD-287
	Scenario: US05_TC14_Cancel the data
		 Scenario: Librarian can add new user
		    
		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		And the user clicks the "Add User" button
		When the user enters new information
		      | fullname   | suveyda            |
		      | password   |123456              |
		      | Email      |  suveyda@gmail.com |
		      | User Group | Librarian          |
		      | Status     | Inactive           |
		      | Start Date | 02-03-2016         |
		      | End Date   | 24-08-2018         |
		      | Adress     | mahalle            |
		    And click "Close" 
		    Then the user should not be added.	

	
	@SYD-303 @SYD-287
	Scenario Outline: US05_TC15_Fullname Validation
		
		Given the user logged in as "librarian"
		When the user clicks the " Users" button
		And the user clicks the "Add User" button
		When the user enters invalid <"full name"> 
		Then message "Please enter a valid full name." should be displayed.
		Examples:
		|full name|
		|1234|
		|%|
		|ayse12|