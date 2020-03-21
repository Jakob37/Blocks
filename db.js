const {MongoClient} = require('mongodb');
const settings = require("./settings.js");

// const client = new MongoClient(settings.get_mongo_path());

exports.getClient = function() {
    return new MongoClient(settings.get_mongo_path());
};

exports.addEntry = async function(client, newEntry) {
    const result = await client.db("block_test")
        .collection("time_entries")
        .insertOne(newEntry);
    console.log(`New entry created: ${result.insertedId}`);
};

exports.listDatabases = async function(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

exports.listDatabasesDb = async function(db) {
    const databasesList = db.admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

exports.retrieveBlockEntries = async function(client) {
    const results = await client
        .db("block_test")
        .collection("time_entries")
        .find().toArray();
    if (results.length > 0) {
        results.forEach((result, i) => {
            console.log(i, result);
        });
    }
    else {
        console.log(`No results found!`);
    }
};
