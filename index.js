const express = require('express')
const app = express();
const cors = require("cors")
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000;

let users = [
    { id: 1, name: "arif", email: "arifullah@gmail.com" },
    { id: 2, name: "acib", email: "acib@gmail.com" }
]


app.get('/', (req, res) => {
    res.send("the server is running")
})
app.get("/users", (req, res) => {
    res.send(users);
})


app.post('/users', (req, res) => {
    console.log(req.body)

    const user = req.body;
    users.push(user);
    res.send(user)
    console.log(user)
})

app.listen(port, () => {
    console.log("server is running the port", port);
})
module.exports = app;