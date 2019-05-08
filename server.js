require('dotenv').config();
const express = require('express');
const server = express();
const routes = require("./routes/routes.js");
const port = process.env.PORT || 5000;

server.use(express.json());
server.use("/", routes);

server.get('/', (req, res) => {
    res.status(200).send({Success: "Sanity check is working..."});
})

server.listen(port, ()=> {
    console.log(`\n=== Server is listening on port ${port}! ===\n`);
});