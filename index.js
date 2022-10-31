const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000;



const uri = "mongodb+srv://userdb:S8nXMDUwnLg4b94y@cluster0.wg8wdsp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        const database = client.db("simpleNode"); // this is database name simpleNode
        const userCollection = database.collection("users"); // this is collection name like table

        //get all ducument
        app.get('/users', async (req, res) => {
            // database e {}  eirokom object ja ache ta dao
            const query = {};
            //find method sob object kuje
            //findOne ekta object kuje 
            const cursor = await userCollection.find(query);
            // cursor variable database e ja object ache sob pelo
            // ei users variable e sob object array to convert holo
            const users = await cursor.toArray();
            res.send(users)

        })









        // create a document to insert

        app.post('/users', async (req, res) => {
            console.log(req.body)

            const user = req.body;

            console.log(user)
            const result = await userCollection.insertOne(user);
            console.log(`A document was inserted with the _id: ${result.insertedId}`);
            res.send(result)
        })


    } finally {
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("the server is running")
})
// app.get("/users", (req, res) => {
//     res.send(users);
// })
// app.get("/users", (req, res) => {
//     if (req.query.name) {

//         const search = req.query.name;
//         const filtered = users.filter(usr => usr.name.toLocaleLowerCase().indexOf(users))
//         res.send(filtered);
//     }
//     else {
//         res.send(users)
//     }

// })



// app.post('/users', (req, res) => {
//     console.log(req.body)

//     const user = req.body;
//     users.push(user);
//     res.send(user)
//     console.log(user)
// })

app.listen(port, () => {
    console.log("server is running the port", port);
})
module.exports = app;

// username : userdb
// password : S8nXMDUwnLg4b94y






