// ./routes/newTransaction.js
// * Creates a new mock transaction and adds it to the system

const Transaction = require("../src/transaction");

function newTransaction(app)
{
	app.get("/newtransaction", (req, res) =>
	{
		//Create new mock transaction
		let tx = new Transaction();

		//Add transaction to list
		global.transactions.push(tx);

		//Send formatted version of transaction back to user
		res.status(200)
		   .send(tx.prettify());
	});
}

module.exports = newTransaction;