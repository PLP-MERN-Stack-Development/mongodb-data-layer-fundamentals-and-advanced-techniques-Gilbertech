# PLP Bookstore - MongoDB Week 1 Assignment

This repository contains the Week 1 MongoDB assignment for the PLP Bookstore project.

## Repository

The assignment repository is available at:  
[https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-Gilbertech](https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-Gilbertech)

## Files

- `insert_books.js` – Node.js script to populate the `plp_bookstore` database with sample Kenyan-themed books.
- `queries.js` – MongoDB queries for CRUD operations, advanced filtering, aggregation, and indexing.


## Prerequisites

- MongoDB Community Edition or MongoDB Atlas cluster.
- MongoDB Shell (`mongosh`) or MongoDB Compass.
- Node.js installed (for running `insert_books.js`).

## Running the Scripts

### 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-Gilbertech.git
cd mongodb-data-layer-fundamentals-and-advanced-techniques-Gilbertech
2. Insert Sample Books
Run the Node.js script:

bash
Copy code
node insert_books.js
This will:

Connect to your MongoDB server.

Drop the books collection if it already exists.

Insert 10 sample Kenyan-themed books.

3. Run MongoDB Queries
Option 1: Run all queries at once
bash
Copy code
mongosh < queries.js
Option 2: Run queries interactively
Open MongoDB Shell:

bash
Copy code
mongosh
Select the database:

js
Copy code
use plp_bookstore
Copy and paste queries from queries.js to run them individually.

Notes
queries.js includes:

Finding books by genre, author, or publication year.

Updating and deleting books.

Filtering, projection, sorting, and pagination.

Aggregation pipelines for average price by genre, author with the most books, and books grouped by decade.

Index creation for performance optimization.
