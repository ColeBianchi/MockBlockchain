// ./routes/validate.js
// * Server validates blockchain

function validate(app)
{
	app.get("/validate", (req,res) =>
	{
		//Verify blockchain integrity
		let isValid = global.blockchain.isChainValid();

		let resStr = "";

		//Set correct response string based on integrity state
		if (isValid)
		{
			resStr = "Blockchain is valid";
		}
		else
		{
			resStr = "Blockchain is invalid";
		}

		res.status(200)
		   .send(resStr);
	})
}

module.exports = validate;