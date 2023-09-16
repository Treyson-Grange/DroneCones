## User Requirements:
There will be 3 different types of users
*   Customers
*   Drone Owners
*   Managers

### Customer Requirements
Customers should be able to do the following things:

*   Create a new account
*   Log into / log out of an existing account
*   Make an ice cream order
    *   Choose an ice cream flavor
    *   Maybe choose other things like toppings
    *   Enter an address for delivery
    *   Enter payment info
*   Show user some measurement of how close ice cream ice (timer?)
*   Receive notification when the ice cream arrives
*   Fill out customer support form to give feedback to managers
*   Be able to view their past orders/transactions

### Drone Owners
Drone owners should be able to do the following things:

*   View a list of their drones
*   Add a new drone to their account
*   Remove an existing drone from their account
*   Enable/disable drones for delivery
*   Access a report of their earnings
*   Access a more detailed report of each delivery their drones completed
*   Fill out a support form specifically for drone owners

### Managers
Managers should be able to do the following things:

*   View feedback/support forms from customers and drone owners
*   View a report of all stock
*   Have a way to change stock (in lieu of actually buying stock)
*   Maybe receive notification when a certain items stock is below a certain level
*   View a report of all transactions
*   View a report of all drones / drone owners
*   Ban / unban users


## Nonfunctional Requirements:

*   The site needs to be able to handle many people on it at the same time
*   Keep track of number of each cone, toppings, and other stock (that automatically updates on page refresh)
*   Have data consistency (i.e., make sure that the customer doesn't accidentally order 1000 drone cones, that the employer doesn't get paid 4 times the amount they were supposed to, or that the number of available toppings is always accurate from user to user)
*   Have good operational latency (i.e., when an order is placed, it shouldn't take 30 seconds or more for the app to say it has made the order)
*   Keep track of available drones for cone pickup

### App Security:
*   Have logins and user authentication (email and password)
*   Save login information for sending email about marking stuff for customers company

## Business requirements:
*   Must be able to stock/keey track of toppings, ice cream, cones
*   Keep track of number of drones in customers area, assign customer closest available dron within a certain distance.
*   Drones should be able to be added to the site by users with drones/have a drone leaser sign in page
*   Users, drone leasers, management should all have different sign in options with different interfaces to manage orders/deliveries/drones/stock/etc.
*   Users should be able to see if something is in stock or out of stock, if something is out of stock we could possibly take it off the page as an option.
*   User should be able to track the order via a map or a timer.
*   If there are no drones available, then the drones can have a backlog of orders to fulfill and added time will show up on user end.
*   The app/site should keep track of orders/who ordered what, where they live, timer for each order.
*   Must have a payment button, management/drone leasers should get notification of payment received. 
*   Must have notifications for when order is almost there/when it is there/when it is being prepared/drone on their way.

## Functional Requirements
### General
* Login screen
    * Ability to login or create an account
        * When creating, there should be the option of what account to make

### Customer
* Place orders
    * name 
    * address
    * order
* View orders
    * List status and maybe notify status?
        * Placed
        * Ready
        * Out for dilivery
        * Delivered
    * count down clock just on the page
* Pay for orders
* Enter address or get location pinged
* customer contact support form
    * report incedent


### Drone Pilot 
* Be able to clock in clock out (set availability)
* Set a drone radius
* Should be able to see orders place, as in the ones that are ready for pick up and their size
* Set drone size
    * Small - can take one cone
    * Medium - can take four cones
    * Large - can take eight cones
* register drone, and the ability to take them off of lease for recreatinal use
* Mark cone(s) as picked up
* mark cone(s) as delivered


## Manager ##
* Ability to add products, including icecream flavers, cones, and possibly toppings
    * Be able to keep track or those things and be able to mark them as unavailable
* Ability to see orders placed and to mark them as ready for pickup


## Admin ##
* can also delegate things to the manager, and do things that a manager would be able to do.
* be able to see all incedent reports

![Use-Case-Diagram](Use-Case-Diagram.png)
