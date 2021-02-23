@wip
Feature:

	#1-Student can borrow books in books page.
	#2-Book cannot be borrowed twice at the same time.
	#3-Student should have a history of borrowed books when navigate to borrowing books page.
	#4-Student can return books when navigate to borrowing books page.
	#5-Student can select related category to see all books in that category by using book categories dropdown.
	#6-Student can use show records dropdown for getting number of entries depends the dropdown options.
	#7-Student can find book by using search box with book's Name and Author.
  @SYD-258 @SYD-279
  Scenario: Show records available options
    Given Student user is on the Login Page
    Then Student user enters valid "student334@library" and "b2Km3pqI"
    When Student user clicks the login button
    Then Student user should be on the Books page
    And Student user should able to select from show records dropdown options

  @SYD-257 @SYD-279
  Scenario: Finding Book by using search box
    Given Student user is on the Login Page
    Then Student user enters valid "student334@library" and "b2Km3pqI"
    When Student user clicks the login button
    And Student user should able to search the book with "ater"

  @SYD-256 @SYD-279
  Scenario: Using book categories dropdown
    Given Student user is on the Login Page
    Then Student user enters valid "student334@library" and "b2Km3pqI"
    When Student user clicks the login button
    And Student user should able to select from categories dropdown

  @SYD-255 @SYD-279
  Scenario Outline: Student should able to return books
    Given Student user is on the Login Page
    Then Student user enters valid "student334@library" and "b2Km3pqI"
    When Student user clicks the login button
    When Student user clicks on Borrowing Books page
    Then Student user should able to return "<books>" that already borrowed before
    Examples:
      |books|
      |The Moon and Sixpence|
      |Harry Potter|

  @SYD-254 @SYD-279
  Scenario: Borrowing books page should have a history of books borrowed before
    Given Student user is on the Login Page
    Then Student user enters valid "student334@library" and "b2Km3pqI"
    When Student user clicks the login button
    When Student user clicks on Borrowing Books page
    Then Student user should able to see the history of the books borrowed

  @SYD-253 @SYD-279
  Scenario: Book should not be borrowed twice at the same time
    Given Student user is on the Login Page
    Then Student user enters valid "student334@library" and "b2Km3pqI"
    When Student user clicks the login button
    When Student user clicks on aa already borrowed book
    Then Student user should not able to borrow that book

  @SYD-251 @SYD-279
  Scenario Outline: Students should be able to borrow books, in books page
    Given Student user is on the Login Page
    Then Student user enters valid "<username>" and "<password>"
    When Student user clicks the login button
    When Student user clicks on an available Book
    Then Student user should borrow the Book

    Examples:
      | username           | password |
      | student334@library | b2Km3pqI |
      | student335@library | ox13EylG |
		
		