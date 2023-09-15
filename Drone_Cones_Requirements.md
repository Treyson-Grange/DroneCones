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


### App Security:
*   Have logins and user authentication (email and password)
*   Save login information for sending email about marking stuff for customers company
*   Protect customer data including payment information
*   Have good operational latency (i.e., when an order is placed, it shouldn't take 30 seconds or more for the app to say it has made the order)


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

![Use-Case-Diagram](Use-Case-Diagram.png)