// queries.js
use plp_bookstore;

// Basic queries
db.books.find({ genre: "Fiction" });
db.books.find({ published_year: { $gt: 2015 } });
db.books.find({ author: "James Mwangi" });

db.books.updateOne(
  { title: "Savannah Tales" },
  { $set: { price: 17.50 } }
);

db.books.deleteOne({ title: "The Tea Garden" });

// Advanced queries
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });
db.books.find().sort({ price: 1 });
db.books.find().sort({ price: -1 });
db.books.find().skip(5).limit(5);

// Aggregation pipelines
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

db.books.aggregate([
  {
    $group: {
      _id: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] },
      count: { $sum: 1 }
    }
  }
]);

// Indexing
db.books.createIndex({ title: 1 });
db.books.createIndex({ author: 1, published_year: -1 });
db.books.find({ title: "Savannah Tales" }).explain("executionStats");
