// ./routes/index.js
// * Dynamically loads route files included in this folder

const fs = require("fs");

function dynamicallyLoadRoutes(app)
{
	//Read all files in current dir and apply function to each
	fs.readdirSync(__dirname).forEach((file) =>
	{
		//Only find actual routes that end in .js
		if (file === "index.js" || file.substr(file.lastIndexOf(".") + 1) !== "js")
			return;

		let name = file.substr(0, file.indexOf("."));

		//Run route code
		require("./" + name)(app);
	})
}

module.exports = dynamicallyLoadRoutes;