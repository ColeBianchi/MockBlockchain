// ./routes/brew.js
// * Example server response

const res = require("express/lib/response")

function brew(app)
{
	app.get("/brew", (req, res) =>
	{
		//Send server response code 418
		res.status(418)
		   .send("I'm a teapot, so I cannot brew coffee!");
	});
}

module.exports = brew;