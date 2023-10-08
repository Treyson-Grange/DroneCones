# Drone Cones Low Level Design

## UI Design

* A new user creating an account. 
   * Go to the landing page
   * Sign up on page
   * Inputs needed to sign up with:
      * Toggle button to decide whether the account is for a customer or drone owner
      * Username
      * Email Address 
      * Password
      * Submit button
* A customer Placing an order 
   * Go to the landing page
      * Enter in Username and password in text fields to login
      * Sign-in button
   * Have a menu bar that has the following pages to toggle between:
      * Account information
      * Make an order (i.e., the default home page for)
      * Support page
      * Shopping Cart (i.e., the page to show items one is wanting to order)
   * Go to the make an order page
      * Make an order page
         * A list of past orders with a onclick ability to make it their order if they desire
         * On the page there will be three ice cream flavor options put as buttons to click to choose an order
         * On the page there will be number of scoop options put as buttons to click to choose an order
         * A list of toppings with an onclick capability to put with order
         * Add to cart button to save order of one ice-cream cone which will submit the order to the shopping cart page and refresh the page
   * Shopping Cart page
      * Displays the list of cones about to be ordered by you
      * Next to each cone there will be an option to specify how many of that order to make (i.e., A plus or minus button will do this)
      * There will also be a remove item from cart button next to each cone order
      * There will be a text box for the address to deliver it to
      * Next to the text box for the address have a button that when clicked saves address for future orders to the costumers account. There will be a default address preprogrammed in if the user has already saved there address to the account that can be overwritten by just simply backspacing and writing a new address.
      * A few text boxes for payment information
         * Name on card
         * Date of expiration on Card
         * Card Number
         * Security Code
      * Next to payment information there will be a button that when clicked saves information for future orders to the costumers account. There will be a default payment information preprogrammed in if the user has already saved there payment information to the account that can be overwritten by just simply backspacing and writing new payment information for each of the text boxes. (Maybe implement on 2.0 but a little unnecessary to save information for default input later)
      * Display prices
         * How much for each item in order
         * Tax
         * How much for the total order
      * A place order button that places the order
      * A list of most recent order status
         * Placed
         * Ready
         * In transit (have a default timer timer to change it from transit to devlivered after 8 min)
         * Delivered
   * Account Information Page
      * We see this as redundant so we might delete this page for the customer since the address and payment information can be changed and viewed in the shopping cart page?? Do we need to save credit card info and addresses? Ask Erik? (maybe we’ll just implement it for fun)
   * Support page
      * A text field to write out what you want support with
      * Submit help button which when clicked with say form submitted on a new page it will take you to (i.e., the admin will respond to questions to the email they put when signing up)
* Drone owner:
   * Go to the landing page and input Username and Password into the text fields to access account
      * Click the login button on the landing page which will take them to the main page of the software
   * The main page that has a menu bar with the following links:
      * Account information 
      * Drone information (i.e., default main page for drone owners)
      * Support page (if the app is not working how they want)
   * Drone information Page
      * Add new drone button
         * Once button a form a will open for new drone information. This form contains:
            * Name: identifier for the drone owner in a text field
            * Size: (small - 1 cone, medium - 4 cones, big - 8 cones) with a drop down menu of the three sizes of drones
            * Drone radius: how far the drone can fly which will be a text field to be filled out
            * Upload drone button
      * List of all the drones
         * Each drone will be have a drop down menu with a enable or disable or delete option to choose from (i.e., there will be a default of enabled for all new drones added to the page)
         * Save button to save changes of enable or disable or delete option for all drones modified 
   * Account information page
      * Total revenue in app
      * Transfer to bank button which has defaults to the last bank information specified. It also has a drop down menu to toggle to a different bank previously specified. If there has never been a bank specified or the user wants to add a bank to transfer to there will be a button to route to bank information form (i.e., which when filled out will take you back to the page and put the bank information in as default)
         * Bank information form:
            * Routing number text field
            * Account number text field
            * Submit button to save changed
   * Support page
      * Same as the one for the customers



* Manager Viewpoint
   * Go to landing page 
      * Landing page 
         * Username Textbox
         * Password Textbox
         * Login button which takes you to the home page when clicked
      * Home page
         * Has a menu bar with links to the different pages
         * Menu bar
            * Inventory page (i.e., Home page default)
            * Support form page 
            * Account page
         * Inventory page
            * Next to each type of ice-cream cone, flavor, and topping, there will be an order button with a drop-down menu of number of items wanting to be orders you can specify. When clicked this charge your bank account and order it (i.e., it will use the bank account specified in the account page)
            * Cone types
            * Ice-cream flavors
            * Toppings
            * Orders status
               * List of orders placed with their accompanying status.
               * Status of orders will be one of the following
                  * Placed
                  * Fulfilled
               * Next to each list of orders, we need to have a button that says delete to delete it from the history of orders
               * Next to each list of orders that have only been placed, we need to have a button that says cancel to cancel the order
            * Drones for operation
               * Maybe we need a way to let the manager know when there is not enough drones for 8 minutes between customer orders? Maybe since it’s a class project, we just need to let the drone owner know when there is no drones. () 
         * Account page
            * Manger bank information text form 
               * Bank information text form will be default to the last bank specified which can be undone by just backspacing.
               * Bank information text form fields:
                  * Routing number
                  * Account number
            * Revenue from app in graph forms
               * Graph form includes:
                  * Revenue per last year
                  * Revenue total since it began
         * Support form page
            * See all the customers questions or feedback with email and username on it (i.e., which is pulled from the database by default without the user pulling that information). Each customer question or feedback will have a resolved button that you can click to resolve it the comment will be displayed as resolved.


## Classes Design

### Pages needed with components needed for each page
#### All Users
* Not logged in Landing page
  * login component that takes you to login page when clicked
  * signup component that takes you to signup page when clicked
* Login page
  * Login component
    * takes in username and password
    * asks if user is a user/manager/drone-provider
* Signup page
  * Signup component
    * asks user for name, username, email, password and saves
    * asks if user is a user/manager/drone-provider
    * once signed up, brings back to login page, so they can sign in

#### Users
* Logged in Landing Page
  * menu bar component
    * account settings button
    * order button
    * view menu button
    * sign out button
    * shopping cart button
* View menu page
  * cones component
    * view all different cones
    * cones represented as objects
  * ice cream component
    * view all different ice cream flavors
    * ice cream flavors represented as objects
  * toppings component
    * view all different toppings
    * toppings represented as objects
* Order menu
  * cones component
    * add a cone to order
    * price of cone
    * do not show specific cone if none of that one is available
  * ice cream component
    * add ice cream flavor to order
    * price of different amounts of scoops for ice cream flavor
    * do not show flavor if none of that flavor is available
  * toppings component
    * add topping to order
    * price of topping
    * do not show specific topping if not available
  * add order component
    * adds current order to shopping cart and starts back at beginning of order menu to create next order
  * shopping cart component
    * takes to shopping cart page to view how many items in shopping cart
* order placed, time estimate page
  * time reduction component
    * notifies user when order is placed, order is on its way, order is there
* Shopping cart page
  * cart component
    * displays cart
  * user card info component
    * user enters card info

#### Managers
* Support page
	* Ticket component
		* See all support tickets
		* Archive ticket button
* Stock page
	* Current stock component
		* All flavors and how many scoops they have.
	* Update stock component
		* All ice cream flavors with text boxes defaulting to 0. 
		* Submit button, calls to the database ADDing all the new scoops
* Landing page

#### Drone Providers
* Drone managment page
	* Add new drone component
		* on click, open form and ask for size drone radius and a submit button. 
	* List of all drone component
		* Drone class
		* *** do something like has drop down with enable and delete, save button at b ***
		* Save button to save drone changes.
* Account information page
	* Revenue Component
	* Bank transfer component
		* Form with bank info.
		* Button to transfer.
		

![prototype](prototype.jpg)


### Classes
* ice cream class
  * information:
    * flavor: string
    * pricePerScoop: number
    * number of scoops: number
    * amount: number
    * available: boolean
  * Used in components:
    * view menu component
    * order component
    * shopping cart component
* topping class
  * information:
    * topping: string
    * price: number
    * amount: number
    * available: boolean
  * Used in components:
    * view menu component
    * order component
    * shopping cart component
* cone class
  * information:
    * cone: string
    * price: number
    * amount: number
    * available: boolean
  * Used in components:
    * view menu component
    * order component
    * shopping cart component
* ice cream cone class:
  * information:
    * cone: cone
    * ice cream: ice cream
    * topping?: topping *optional
    * ice cream cone price: number
  * Used in components:
    * order component
    * shopping cart component
* shopping cart class:
  * information:
    * ice cream cones: ice cream cone[]
    * all ice cream cones price: number
  * Used in components:
    * shopping cart component
* order class:
  * information:
    * shopping cart: shopping cart
    * address: address/string
    * card information: card info/string
    * user info: user info
    * timer: time
  * Used in component:
    * order place/timer component
    * card info component
* drone class:
  * information:
    * size: number
    * owner: string
    * available (owner allows to be used or not): boolean
    * in use (order is being fulfilled or not): boolean
    * timer: time
  * Used in components:
    * drone management page/add new drone and list all drone components


### UML
![UML](umlOrdering.jpg)



## Database Design


### Users

UserType:

| ID     | UserType   |
| ------ | ---------- |
| 0      | Customer   |
| 1      | DroneOwner |
| 2      | Manager    |

Users:
*   UserID (primary)
*   UserType (0,1,2)
*   Username
*   First Name
*   Last Name
*   Email
*   Saved Address
*   Banned

| UserID | UserType | Username   | FirstName | LastName | Email                   | Address | Banned |
| ------ | -------- | ---------  | --------- | -------- | ----------------------- | ------- | ------ |
| 0      | 0        | jbuchanan  | James     | Buchanan | jamesbuchanan@gmail.com | 0       | False  |
| 1      | 2        | erik.falor | Erik      | Falor    | erikfalor@hotmail.com   | NULL    | False  |
| 2      | 1        | ambrown    | Amanda    | Brown    | abcdefg@hotmail.com     | 1       | False  |



Addresses:
*   AddressID
*   Country
*   City
*   State
*   Zip Code
*   Street Address
*   Apartment Number

| AddressID | Country | City       | State | ZipCode | StreetAddress | AptNum |
| --------- | ------- | ---------- | ----- | ------- | ------------- | ------ |
| 0         | U.S.    | Logan      | UT    | 84321   | 123 E 456 N   | 4      |
| 1         | U.S.    | Smithfield | UT    | 84335   | 999 S 200 E   | NULL   |


### Transactions

Transactions:
*   TransactionID (primary)
*   UserID
*   Price before tax
*   Tax
*   Final price
*   ItemCount
*   Time of order
*   Date of order
*   Completed

| TransactionID | UserID | InitialPrice | Tax  | FinalPrice | ItemCount | OrderTime | OrderDate | Completed |
| ------------- | ------ | ------------ | ---- | ---------- | --------- | --------- | --------- | --------- | 
| 0             | 0      | 9.14         | 1.13 | 10.27      | 2         | 23:59.59  | 9-29-2023 | True      |
| 1             | 0      | 4.56         | 0.33 | 4.89       | 1         | 10:30.00  | 9-30-2023 | True      |


OrderItem:
*   ID (primary)
*   TransactionID
*   Cone Type
*   Ice cream flavor
*   Topping
*   Scoop count
*   Price

| ID | TransactionID | DroneDelivery | Cone | Flavor | Topping | Scoops | Price |
| -- | ------------- | ------------- | ---- | ------ | ------- | ------ | ----- |
| 0  | 0             | 0             | 0    | 1      | 1       | 2      | 5.25  |
| 1  | 0             | 0             | 1    | 1      | NULL    | 1      | 3.89  |
| 2  | 1             | 1             | 0    | 0      | 0       | 2      | 4.56  |

DroneDelivery:
*   ID (primary)
*   TransactionID
*   DroneID

| Id | TransactionID | DroneID |
| -- | ------------- | ------- |
| 0  | 0             | 1       |
| 1  | 1             | 0       |

### Stock

Stock (Cones, Flavors, Toppings):
*   ID (primary)
*   Name
*   Amount
*   Available
*   Price / Price per Scoop

Cones:
| ID | Name   | Amount | Available | Price |
| -- | ----   | ------ | --------- | ----- |
| 0  | Sugar  | 25     | True      | 100   |
| 1  | Waffle | 13     | True      | 100   |

Flavors:
| ID | Name       | Amount | Available | PricePerScoop |
| -- | ---------- | ------ | --------- | ------------- |
| 0  | Vanilla    | 98     | True      | 400           |
| 1  | Chocolate  | 56     | True      | 400           |
| 2  | Strawberry | 0      | False     | 400           |

Toppings:
| ID | Name       | Amount | Available | Price |
| -- | ----       | ------ | --------- | ----- |
| 0  | Hot Fudge  | 33     | True      | 100   |
| 1  | Caramel    | 12     | True      | 100   |


### Drones

DroneSize:
*   Id
*   Count

| ID | Count |
| -- | ----- | 
| 0  | 1     | 
| 1  | 4     | 
| 2  | 8     |

Drones:
*   DroneID (primary)
*   Owners UserID
*   Name
*   Size (small, medium, large)
*   Available
*   In Use

| DroneID | Owner | Name         | DroneSize | Available | InUse |
| ------- | ----- | -----------  | --------- | --------- | ----- |
| 0       | 2     | MySmallDrone | 0         | True      | False |
| 1       | 2     | MyLargeDrone | 2         | True      | True  |


### Support forms

Support forms:
*   formID (primary)
*   UserID 
*   formField
*   Resolved

| FormID | UserID | FormField                 | Resolved |
| ------ | ------ | ------------------------- | -------- |
| 0      | 0      | The ice cream was late :( | True     |




## Intermediary functions
Here are the function signatures for various functions that will interact with the database system, in order to abstract our use of Supabase as well as standardize our database queries.

### Users
addUser(UserType: Int, FirstName: Str, LastName: Str, Email: Str, Address: Int)
*   adds a new row to user database

getUser(UserID: Int)
*   returns the row with given UserID as a user object

updateUser(UserID: Int, UserType: Int = None, FirstName: Str = None, LastName: Str = None, Email: Str = None, Address: Int = None)
*   updates the row of user database with given UserID, changing the columns of any arguments that aren't None

toggleUserBan(UserID: Int)
*   toggles the banned column of the user with UserID

getUsers(UserType: Int = None)
*   returns a list of all user in database as user objects. If a UserType is specified, it only returns those types of users

addAddress(Country: Str, City: Str, State: Str, ZipCode: Str, StreetAddress: Str, Apartment: Str)
*   Adds a row into address database with given information

getAddress(AddressID: Int)
*   returns the row from address database with given AddressID

### Transactions
addTransaction(UserID: Int, Price: Int, Items: List<??>, dateTime: DateTime, DroneIDs: List<Int>)
*   creates a new row in Transactions database with given information
*   creates a new row in SoldItems database for each item in Items, connected to this transaction. Does this by calling addSoldItem()
*   creates a new row in DroneDeliveries database with each DroneID in DroneIDs, connected to this transaction. Does this by calling addDroneDelivery()

getTransactions()
*   returns all transactions in database
*   --Possibly--
    *   optional argument for number of transactions returned (starting from most recent?)
    *   optional argument for start / end dates, only returns transactions between those dates

getUserOrderHistory(UserID: Int)
*   returns all transactions tied to given UserID.

addSoldItem(TransactionID: Int, Cone: Int, Flavor: Int, Topping: Int, Scoops: Int)
*   adds a new row in Sold Items database with given information

getSoldItems(TransactionID)
*   returns all soldItems with given TransactionID from database

addDroneDelivery(TransactionID: Int, DroneID: Int)
*   adds a new row in DroneDelivery database with given information

getDroneDeliveries(TransactionID: Int = None, DroneID: Int = None)
*   returns drone deliveries from database
*   if TransactionId is specified, only return droneDeliveries with that TransactionID
*   if DroneID is specified, only return droneDeliveries with that DroneID

### Stock
getCones()
*   returns all cones in database as a list, possibly as cone objects?

getCone(ID: Int)
*   return cone with given ID

addNewCone(Name: Str, Amount: Int, price: number, Available: Bool = True)
*   add a new row into cone database with given information

addConeAmount(ID: Int, Amount: Int)
*   adds the amount given to the amount of the cone with given id

toggleConeAvailability(ID: Int)
*   update the Available column of cone with given ID to opposite boolean value

updateConePrice(ID: int, price: int)
*   update the price of cone with given id

removeCone(ID: Int)
*   Remove cone with specified Id from database

The above functions will also exist for the Flavors and Toppings database tables.


### Drones

getDrone(DroneID: Int)
*   return drone from database with given DroneID, possibly as drone object

addDrone(UserID: Int, Name: Str, Size: Int?, Available: Bool = True)
*   adds a new drone to database

removeDrone(DroneID: Int)
*   Removes drone with given DroneID from database

toggleDroneAvailability(DroneID: Int)
*   Set the Available column of drone with DroneID to the opposite boolean value

getDrones(UserID = None)
*   returns all drones as a list, maybe as drone objects?
*   If UserID is specified, only returns drones registered by that user

getDeliveryDrones(Count: Int)
*   returns a list of drone objects to fulfill a delivery of 'Count' number of cones
*   drones will be selected based on size to optimize the number of drones on a delivery


### Support Forms
addForm(UserID: Int, FormField: Str)
*   adds a new support form to database

getForms()
*   returns all forms in database as a list
*   --Possibly--
    *   optional argument for number of forms returned (starting from most recent?)
    *   optional argument for start / end dates, only returns forms between those dates

