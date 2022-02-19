// ./routes/listTransactions.js
// * List all transactions that are not currently on blocks;

const Transaction = require("../src/transaction");

function listTransactions(app)
{
	app.get("/listtransactions", (req, res) =>
	{
		let txStr = "";

		//Go through transaction list and add formatted transaction to send to user.
		for (let i = 0; i < global.transactions.length; i++)
		{
			txStr += global.transactions[i].prettify();
		}

		res.status(200)
		   .send(txStr);
	});
}

module.exports = listTransactions;