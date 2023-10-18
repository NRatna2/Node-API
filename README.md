# Node-API
COMP229 Assignment -2
Author: Nahida


COMP229 – Web Application Development

Assignment 2
Online Market Application – Node.js, Express REST APIs & MongoDB
Due Week #6 (……………………….) @ midnight
Value 10%
Dress Store – Node.js, Express REST APIs & MongoDB	Maximum Mark: 100

Overview: Create the Node.js Express exports REST APIs that interacts with MongoDB Database using Mongoose ODM for an Online Market application (Note: The Front-end of the application is not included in this Assignment).

Instructions :
The Online Market Application:
1.	Using MongoDB database, create:(25 Marks):
a.	A database by name Marketplace – You can use the existing database created in-class already if specified by your instructor. 
b.	Create the following collections with their respective property. (5 Marks: Functionality).
I.	product
name: string
description: string
price: number
quantity: number
category: string

II.	categories
name: string

the categories of products to be included are Men, Women, teens. – OR categories specified by your instructor

c.	Obtain your connection string ( url or uri)
d.	Provide the screen snapshot of your MongoDB database showing the above steps from 1a – c.

2.	Using Visual studio code as the IDE: (25 Marks)
a.	 create a node.js App for the Marketplace by setting up the Express web server. Ensure to install all the necessary modules: express, mongoose, cors e.t.c.
b.	Run the app and provide a screen snapshot of it running in the browser as follows:

 





3.	After creating the Express web server next: (30 Marks)
a.	Add the configuration for the MongoDB database.
b.	Create the product model with Mongoose.
c.	Write the controller.
d.	Define the routes for handling all CRUD operations.


Below is an overview of the REST APIs that will be exported:


 
 


4.	a) Test the REST APIs using Postman, Thunder client or any tool you are familiar with. e.t.c.
b) Provide the screen snapshot of the test. (20 Marks)


SUBMITTING YOUR WORK
Your submission should include:
1.	A zip archive of your Marketplace Project files
2.	A link to GitHub
3.	A word doc. Showing the snapshots
This assignment is weighted 10% of your total mark for this course. Late submissions:20% deducted for each day late.
