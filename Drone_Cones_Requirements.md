# Requirements Documentation


## User Requirements:
There will be 4 different types of users:
*   Customers
*   Drone Owners
*   Managers
*   Admin

### Requirements for All Users
All users should be able to do the following things:
*   Create a new account
    *   When creating an account, there should be a way to determine what type of account to make. Customers / Drone owners will have to choose which role, while the role of manager will probably be assigned by an admin
*   Log into / log out of an existing account
*   Access some profile / user settings pages that will include
    *   Showing the users information, and give users the ability to change their information


### Customer Requirements
A customer for Drone Cones will be anyone using the app to place ice cream delivery orders.

Customers should be able to do the following things:

*   Make an ice cream order
    *   Choose an ice cream flavor
    *   Maybe choose other things like toppings
    *   Give an address for delivery
        *   Customer can either enter an address or, (maybe) have the address geolocated
    *   Enter payment info
*   View an in progress order
    *   List status and maybe notify status?
        *   Placed
        *   Ready
        *   Out for dilivery
        *   Delivered
    *   Show an up-to-date count down clock for delivery
*   Fill out customer support form to give feedback to managers
    *   Customer support form will have fields for the customers
        *   Name
        *   Email address / other contact information
        *   Open field for feedback / complaint
*   Be able to view their past orders/transactions
    *   Maybe let customers reorder a past order

### Drone Owners
Drone owners are users that lease their drones for Drone Cone deliveries, and receive a cut of the profits for those deliveries.

Drone owners should be able to do the following things:

*   View a list of their drones
*   Add a new drone to their account
    *   When creating a drone, they will give the following information
        *   Name: identifier for the drone owner
        *   Size: (small - 1 cone, medium - 4 cones, big - 8 cones)
        *   Drone radius: how far the drone can fly
*   Remove an existing drone from their account
*   Enable/disable drones for delivery
*   Access a report of their earnings
*   Access a more detailed report of each delivery their drones completed
*   Fill out a support form specifically for drone owners
*   Maybe be able to view feedback for deliveries that involved their drones?

### Managers
Managers would be those in charge of the company who will handle administrative tasks such as controlling product stock and finances.

Managers should be able to do the following things:

*   View feedback/support forms from customers and drone owners
*   View a report of all stock including
    *   Ice cream
    *   Cones
    *   Toppings
*   Have a way to change stock (in lieu of actually buying stock)
*   Be able to add new producst, including ice cream flavors, cones and toppings.
*   Be able to mark products as unavailable
*   Possibly be able to adjust pricing for products
*   Maybe receive notification when a certain items stock is below a certain level
*   View a report of all transactions
*   View a report of all drones / drone owners
*   Ban / unban users

### Admin
There will likely be only one admin account, which will either be a Drone Cones executive or higher-up developer. They will have all the same abilities as manager accounts, along with the ability to create new manager accounts.


## Nonfunctional Requirements:

*   The site needs to be able to handle many people on it at the same time.
*   Keep track of number of each cone, toppings, and other stock (that automatically updates on page refresh)
*   Have data consistency (i.e., make sure that the customer doesn't accidentally order 1000 drone cones, that the employer doesn't get paid 4 times the amount they were supposed to, or that the number of available toppings is always accurate from user to user)
*   Have good operational latency (i.e., when an order is placed, it shouldn't take 30 seconds or more for the app to say it has made the order)
*   Keep track of available drones for cone pickup

### App Security:
*   Have logins and user authentication (email and password)
*   Save login information for sending email about marketing stuff for customers company

## Business requirements:
*   Must be able to stock/keep track of toppings, ice cream, cones
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


# High-Level Design #

## Security ##
- 
## Hardware Platform ##
* Web
## User Interface ##
- 
## Internal Interfaces ##
- 
## External Interfaces ##
- 
