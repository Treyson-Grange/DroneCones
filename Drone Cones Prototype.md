Prototype:

1. A new user creating an account. 
   1. Go to the landing page
   1. Sign up on page
   1. Inputs needed to sign up with:
      1. Toggle button to decide whether the account is for a customer or drone owner
      1. Username
      1. Email Address 
      1. Password
      1. Submit button
1. A customer Placing an order 
   1. Go to the landing page
      1. Enter in Username and password in text fields to login
      1. Sign-in button
   1. Have a menu bar that has the following pages to toggle between:
      1. Account information
      1. Make an order (i.e., the default home page for 
      1. Support page
      1. Shopping Cart (i.e., the page to show items one is wanting to order)
   1. Go to the make an order page
      1. Make an order page
         1. A list of past orders with a onclick ability to make it their order if they desire
         1. On the page there will be three ice cream flavor options put as buttons to click to choose an order
         1. On the page there will be number of scoop options put as buttons to click to choose an order
         1. A list of toppings with an onclick capability to put with order
         1. Add to cart button to save order of one ice-cream cone which will submit the order to the shopping cart page and refresh the page
   1. Shopping Cart page
      1. Displays the list of cones about to be ordered by you
      1. Next to each cone there will be an option to specify how many of that order to make (i.e., A plus or minus button will do this)
      1. There will also be a remove item from cart button next to each cone order
      1. There will be a text box for the address to deliver it to
      1. Next to the text box for the address have a button that when clicked saves address for future orders to the costumers account. There will be a default address preprogrammed in if the user has already saved there address to the account that can be overwritten by just simply backspacing and writing a new address.
      1. A few text boxes for payment information
         1. Name on card
         1. Date of expiration on Card
         1. Card Number
         1. Security Code
      1. Next to payment information there will be a button that when clicked saves information for future orders to the costumers account. There will be a default payment information preprogrammed in if the user has already saved there payment information to the account that can be overwritten by just simply backspacing and writing new payment information for each of the text boxes. (Maybe implement on 2.0 but a little unnecessary to save information for default input later)
      1. Display prices
         1. How much for each item in order
         1. Tax
         1. How much for the total order
      1. A place order button that places the order
      1. A list of most recent order status
         1. Placed
         1. Ready
         1. In transit (have a default timer timer to change it from transit to devlivered after 8 min)
         1. Delivered
   1. Account Information Page
      1. We see this as redundant so we might delete this page for the customer since the address and payment information can be changed and viewed in the shopping cart page?? Do we need to save credit card info and addresses? Ask Erik? (maybe we’ll just implement it for fun)
   1. Support page
      1. A text field to write out what you want support with
      1. Submit help button which when clicked with say form submitted on a new page it will take you to (i.e., the admin will respond to questions to the email they put when signing up)
1. Drone owner:
   1. Go to the landing page and input Username and Password into the text fields to access account
      1. Click the login button on the landing page which will take them to the main page of the software
   1. The main page that has a menu bar with the following links:
      1. Account information 
      1. Drone information (i.e., default main page for drone owners)
      1. Support page (if the app is not working how they want)
   1. Drone information Page
      1. Add new drone button
         1. Once button a form a will open for new drone information. This form contains:
            1. Name: identifier for the drone owner in a text field
            1. Size: (small - 1 cone, medium - 4 cones, big - 8 cones) with a drop down menu of the three sizes of drones
            1. Drone radius: how far the drone can fly which will be a text field to be filled out
            1. Upload drone button
      1. List of all the drones
         1. Each drone will be have a drop down menu with a enable or disable or delete option to choose from (i.e., there will be a default of enabled for all new drones added to the page)
         1. Save button to save changes of enable or disable or delete option for all drones modified 
   1. Account information page
      1. Total revenue in app
      1. Transfer to bank button which has defaults to the last bank information specified. It also has a drop down menu to toggle to a different bank previously specified. If there has never been a bank specified or the user wants to add a bank to transfer to there will be a button to route to bank information form (i.e., which when filled out will take you back to the page and put the bank information in as default)
         1. Bank information form:
            1. Routing number text field
            1. Account number text field
            1. Submit button to save changed
   1. Support page
      1. Same as the one for the customers



1. Manager Viewpoint
   1. Go to landing page 
      1. Landing page 
         1. Username Textbox
         1. Password Textbox
         1. Login button which takes you to the home page when clicked
      1. Home page
         1. Has a menu bar with links to the different pages
         1. Menu bar
            1. Inventory page (i.e., Home page default)
            1. Support form page 
            1. Account page
         1. Inventory page
            1. Next to each type of ice-cream cone, flavor, and topping, there will be an order button with a drop-down menu of number of items wanting to be orders you can specify. When clicked this charge your bank account and order it (i.e., it will use the bank account specified in the account page)
            1. Cone types
            1. Ice-cream flavors
            1. Toppings
            1. Orders status
               1. List of orders placed with their accompanying status.
               1. Status of orders will be one of the following
                  1. Placed
                  1. Fulfilled
               1. Next to each list of orders, we need to have a button that says delete to delete it from the history of orders
               1. Next to each list of orders that have only been placed, we need to have a button that says cancel to cancel the order
            1. Drones for operation
               1. Maybe we need a way to let the manager know when there is not enough drones for 8 minutes between customer orders? Maybe since it’s a class project, we just need to let the drone owner know when there is no drones. () 
         1. Account page
            1. Manger bank information text form 
               1. Bank information text form will be default to the last bank specified which can be undone by just backspacing.
               1. Bank information text form fields:
                  1. Routing number
                  1. Account number
            1. Revenue from app in graph forms
               1. Graph form includes:
                  1. Revenue per last year
                  1. Revenue total since it began
         1. Support form page
            1. See all the customers questions or feedback with email and username on it (i.e., which is pulled from the database by default without the user pulling that information). Each customer question or feedback will have a resolved button that you can click to resolve it the comment will be displayed as resolved.
