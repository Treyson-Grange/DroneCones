# Database Design

## Users

UserType:

| ID     | UserType   |
| ------ | ---------- |
| 0      | Customer   |
| 1      | DroneOwner |
| 2      | Manager    |

Users:
*   UserID (primary)
*   UserType (0,1,2)
*   First Name
*   Last Name
*   Email
*   Saved Address
*   Banned
*   Phone number?

| UserID | UserType | FirstName | LastName | Email                   | Address | Banned |
| -----  | -------  | -----     | -----    | -----                   | ----    | ------ |
| 0      | 0        | James     | Buchanan | jamesbuchanan@gmail.com | 0       | False  |
| 1      | 2        | Erik      | Falor    | erikfalor@hotmail.com   | NULL    | False  |
| 2      | 1        | Amanda    | Brown    | abcdefg@hotmail.com     | 1       | False  |



Addresses:
*   AddressID
*   Country
*   City
*   State
*   Zip Code
*   Street Address
*   Apartment Number
*   Name?

| AddressID | Country | City       | State | ZipCode | StreetAddress | AptNum |
| --------- | ------- | ----       | ----- | ------- | ------------- | ------ |
| 0         | U.S.    | Logan      | UT    | 84321   | 123 E 456 N   | 4      |
| 1         | U.S.    | Smithfield | UT    | 84335   | 999 S 200 E   | NULL   |


## Transactions

Transactions:
*   TransactionID (primary)
*   UserID
*   Price
*   ItemCount
*   Time of order
*   Date of order
*   Time delivered?
*   Delivered boolean?
*   More detailed Price columns?

| TransactionID | UserID | Price | ItemCount | OrderTime | OrderDate |
| ------------- | ------ | ----- | --------- | --------- | --------- |
| 0             | 0      | 9.14  | 2         | 23:59.59  | 9-29-2023 |
| 1             | 0      | 4.56  | 1         | 10:30.00  | 9-30-2023 |


Sold Items:
*   ID (primary)
*   TransactionID
*   Cone Type
*   Ice cream flavor
*   Topping
*   Scoop count
*   Price?

| ID | TransactionID | DroneDelivery | Cone | Flavor | Topping | Scoops |
| -- | ------------- | ------------- | ---- | ------ | ------- | ------ |
| 0  | 0             | 0             | 0    | 1      | 1       | 2      |
| 1  | 0             | 0             | 1    | 1      | NULL    | 1      |
| 2  | 1             | 1             | 0    | 0      | 0       | 2      |

DroneDelivery:
*   ID (primary)
*   TransactionID
*   DroneID

| Id | TransactionID | DroneID |
| -- | ------------- | ------- |
| 0  | 0             | 1       |
| 1  | 1             | 0       |

## Stock

Stock (Cones, Flavors, Toppings):
*   ID (primary)
*   Name
*   Amount
*   Available

Cones:
| ID | Name   | Amount | Available |
| -- | ----   | ------ | --------- | 
| 0  | Sugar  | 25     | True      |
| 1  | Waffle | 13     | True      |

Flavors:
| ID | Name       | Amount | Available |
| -- | ---------- | ------ | --------- | 
| 0  | Vanilla    | 98     | True      |
| 1  | Chocolate  | 56     | True      |
| 2  | Strawberry | 0      | False     |

Toppings:
| ID | Name       | Amount | Available |
| -- | ----       | ------ | --------- | 
| 0  | Hot Fudge  | 33     | True      |
| 1  | Caramel    | 12     | True      |


## Drones

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
*   Drone model?
*   Drone radius?

| DroneID | Owner | Name         | DroneSize | Available |
| ------- | ----- | -----------  | --------- | --------- |
| 0       | 2     | MySmallDrone | 0         | True      |
| 1       | 2     | MyLargeDrone | 2         | True      |


## Support forms

?????
Do:
    Users be logged in to submit form, just connect UserID
or
    Not logged in, store name and email entered in fields

Support forms:
*   formID (primary)
*   Name
*   Email
*   UserID 
*   formField

| FormID | UserID | FormField                 |
| ------ | ------ | ------------------------- |
| 0      | 0      | The ice cream was late :( |

or
| FormID | FirstName | LastName | Email             | FormField                 |
| ------ | --------- | -------- | ----------------- | ------------------------- |
| 0      | Lane      | Weaver   | lweaver@gmail.com | The ice cream was late :( |




# Intermediary functions

## Users
addUser()

getUser()

updateUser()

toggleUserBan()

getUsers(UserType: Int = None)

addAddress()

getAddress()

updateAddress()

## Transactions
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

## Stock
getCones()
*   returns all cones in database as a list, possibly as cone objects?

getCone(ID: Int)
*   return cone with given ID

addNewCone(Name: Str, Amount: Int, Available: Bool = True)
*   add a new row into cone database with given information

updateConeAmount(ID: Int, Amount: Int)
*   update the amount column of cone with given ID to new amount

toggleConeAvailability(ID: Int)
*   update the Available column of cone with given ID to opposite boolean value

--Maybe--
removeCone(ID: Int)
*   Remove cone with specified Id from database

The above functions will also exist for the Flavors and Toppings database tables.


## Drones

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


## Support Forms
addForm(UserID: Int, FormField: Str)
*   adds a new support form to database

getForms()
*   returns all forms in database as a list
*   --Possibly--
    *   optional argument for number of forms returned (starting from most recent?)
    *   optional argument for start / end dates, only returns forms between those dates

