const settings = require("./settings.js");
const db = require("./db.js");
const test_entries = require("./test_entries.js");

const express = require("express");
const app = express();
const port = 3000;
const {MongoClient} = require('mongodb');

// var expressMongoDb = require("express-mongo-db");
// app.use(expressMongoDb(settings.get_mongo_path()));

// async function main(){
//     const client = new MongoClient(settings.get_mongo_path());
//
//     try {
//         await client.connect();
//         // await setupStorage(client, example_entry1);
//         // await setupStorage(client, example_entry2);
//         await db.addEntry(client, test_entries.getTestEntries()[1]);
//         await db.listDatabases(client);
//         await db.retrieveBlockEntries(client);
//
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }
// main().catch(console.error);

app.get("/", async (req, res) => {

    const client = new MongoClient(settings.get_mongo_path());
    try {
        const out = await db.listDatabases(client);
        console.log(out);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

    // console.log)
    // db.listDatabases(db.getClient());
    // console.log(req.db("block_test").collection("time_entries"));
    // db.listDatabasesDb(req.db);

    // res.sendFile(__dirname + "/index.html");
});
//
// app.post("/addname", (req, res) => {
//     var myData = new User(req.body);
//     myData.save()
//         .then(item => {
//             res.send("item saved to database");
//         })
//         .catch(err => {
//             res.status(400).send("unable to save to database");
//         });
// });

app.listen(port, () => {
    console.log("Server listening to port " + port);
});

