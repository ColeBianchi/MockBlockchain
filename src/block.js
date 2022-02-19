// ./src/block.js
// * Contains the class definition for a single block.

const crypto = require("crypto");

class Block
{
	constructor(prevHash = "", transactions = [])
	{
		//Set default values
		this.timestamp = Date.now();
		this.transactions = transactions;
		this.hash = this.getHash();
		this.prevHash = prevHash;
		this.nonce = 0;

		this.mine();
	}

	mine()
	{
		//String begining of hash needs to match, difficulty number of 0s
		let checkString = Array(global.difficulty + 1).join("0");
		let tries = 0;
		
		//try to calc hash until it starts with 0.....000
		while (!this.hash.startsWith(checkString))
		{
			//Increase nonce for different hash
			this.nonce++;

			this.hash = this.getHash();

			tries++;
		}

		console.log(`Block mined with ${tries} attempts. Hash: ${this.hash}`);
	}

	getHash()
	{
		let txStr = "";

		//Get all transactions and store them
		for (let i = 0; i < this.transactions.length; i++)
		{
			txStr += JSON.stringify(this.transactions[i]);
		}

		//Calculate hash of all transactions
		return SHA256(this.prevHash + this.timestamp + txStr + this.nonce);
	}

	prettify()
	{

		// Add basic block parameters

		let blockStr = `<div><b>Block</b> #${this.hash}</div>`;

		blockStr += `<div><b>Timestamp:</b> ${this.timestamp}</div>`;

		blockStr += `<div><b>Previous Hash:</b> ${this.prevHash}</div>`;

		blockStr += "<div><b>Transactions:</b></div><div>";

		// Iterate through all transactions

		for (let i = 0; i < this.transactions.length; i++) 
		{

			blockStr += "    " + this.transactions[i].prettify();

		}

		blockStr += "</div>";

		return blockStr;

	}
}

function SHA256(message)
{
	//Run sha256 hashing algorithm on message
	return crypto.createHash("sha256")
				 .update(message)
				 .digest("hex");
}

module.exports = Block;