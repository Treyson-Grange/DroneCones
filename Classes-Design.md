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
    * 

### Managers

### Drone Providers