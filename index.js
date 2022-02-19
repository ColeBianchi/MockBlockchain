const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 8080;
const Blockchain = require("./src/blockchain");

//Global variables for chain
global.difficulty = 5;
global.blockchain = new Blockchain();
global.transactions = [];

app.use(morgan("dev"));

//Load all endpoints
require("./routes")(app);

//Start listening for requests on port
app.listen(port, () =>
{
	console.log(`Server is listening at http://localhost:${port}/`);
});