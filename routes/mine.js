// ./routes/mine.js
// * The server mines a new block and adds it to its personal chain

function mine(app)
{
	app.get("/mine", (req, res) =>
	{
		//Add block to chain
		global.blockchain.addBlock();

		//Clear transaction list
		global.transactions = [];

		let msg = `Block added: ${global.blockchain.getLastBlock().prettify()}`;
		
		res.status(200)
		   .send(msg);
	})
}

module.exports = mine;