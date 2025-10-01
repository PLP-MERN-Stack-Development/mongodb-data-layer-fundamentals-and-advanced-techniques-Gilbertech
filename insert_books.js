// insert_books.js - Script to populate MongoDB with Kenyan-themed book data

const { MongoClient } = require('mongodb');

// Connection URI (replace with your MongoDB connection string if using Atlas)
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'plp_bookstore';
const collectionName = 'books';

// Kenyan-themed sample book data
const books = [
  {
    title: 'Sunset Over Nairobi',
    author: 'James Mwangi',
    genre: 'Fiction',
    published_year: 2019,
    price: 18.99,
    in_stock: true,
    pages: 320,
    publisher: 'Kenya Reads'
  },
  {
    title: 'Growing Strong',
    author: 'Mary Wanjiru',
    genre: 'Self-help',
    published_year: 2021,
    price: 15.50,
    in_stock: true,
    pages: 280,
    publisher: 'East African Books'
  },
  {
    title: 'The Rift Valley Story',
    author: 'Peter Njoroge',
    genre: 'History',
    published_year: 2015,
    price: 20.00,
    in_stock: true,
    pages: 400,
    publisher: 'Nairobi Press'
  },
  {
    title: 'Lake Victoria Secrets',
    author: 'Grace Atieno',
    genre: 'Mystery',
    published_year: 2018,
    price: 12.99,
    in_stock: false,
    pages: 350,
    publisher: 'Kisumu Publishing'
  },
  {
    title: 'Savannah Tales',
    author: 'David Otieno',
    genre: 'Fiction',
    published_year: 2017,
    price: 14.99,
    in_stock: true,
    pages: 300,
    publisher: 'Kenya Reads'
  },
  {
    title: 'Urban Hustle',
    author: 'Lilian Chebet',
    genre: 'Biography',
    published_year: 2020,
    price: 22.00,
    in_stock: true,
    pages: 420,
    publisher: 'East African Books'
  },
  {
    title: 'Mount Kenya Adventures',
    author: 'Daniel Kiptoo',
    genre: 'Travel',
    published_year: 2016,
    price: 16.50,
    in_stock: true,
    pages: 250,
    publisher: 'Nairobi Press'
  },
  {
    title: 'The Tea Garden',
    author: 'Faith Wambui',
    genre: 'Fiction',
    published_year: 2014,
    price: 13.50,
    in_stock: false,
    pages: 270,
    publisher: 'Kericho Books'
  },
  {
    title: 'Mombasa Chronicles',
    author: 'Michael Mutua',
    genre: 'History',
    published_year: 2012,
    price: 19.99,
    in_stock: true,
    pages: 380,
    publisher: 'Coastline Press'
  },
  {
    title: 'Kilimanjaro Dreams',
    author: 'Alice Njeri',
    genre: 'Self-help',
    published_year: 2021,
    price: 21.00,
    in_stock: true,
    pages: 310,
    publisher: 'East African Books'
  }
];

async function insertBooks() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const count = await collection.countDocuments();
    if (count > 0) {
      console.log(`Collection already contains ${count} documents. Dropping collection...`);
      await collection.drop();
      console.log('Collection dropped successfully');
    }

    const result = await collection.insertMany(books);
    console.log(`${result.insertedCount} books successfully inserted`);

    console.log('\nInserted books:');
    const insertedBooks = await collection.find({}).toArray();
    insertedBooks.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.published_year})`);
    });

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

insertBooks().catch(console.error);
