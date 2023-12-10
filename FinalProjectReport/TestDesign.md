# Test Design

For this testing phase, one of our goals was to ensure the correct functionality and robustness of our database integration through the use of a suite of unit tests. All the various ways our application interacts with our backend database will have multiple unit tests, assuring they function correctly when used right, and ensure they break only in the intended ways when given bad input. 

Due to the design of our application being frontend heavy, and the majority of the backend being solely the database interaction, we decided to focus most heavily on unit tests focused on this area.

We use the JavaScript testing framework Jest to implement functional unit tests for each database interaction that is being used in our application. For each test, we insert testing rows into the database tables, that we use for tests, then delete afterwards. We have five areas of the database below, each having various functions to enable easier interaction. We implement unit tests for each of these areas.
*   Inventory
*   Drones
*   Users
*   Transactions
*   Support forms

For each function, we have a test case where the function interacts with one of the fake testing rows in the database, and we ensure the output matches our expectation. When appropriate, we also test the function by passing bad input, or using incorrect database rows, to ensure the functions deal with that as expected.
