# Classes Design

## Pages needed with components needed for each page
### All Users
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

### Users
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

### Managers
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

### Drone Providers
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
		


## Classes
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
