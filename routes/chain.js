// ./routes/chain.js
// * The server prints out entire blockchain

function chain(app)
{
	app.get("/chain", (req,res) =>
	{
		//Send formatted blockchain to user
		let chainStr = global.blockchain.prettify();

		res.status(200)
		   .send(chainStr);
	});
}

module.exports = chain;