// ./src/transaction.js
// * Class definition for fake blockchain transaction

class Transaction
{
	constructor(fromAddr = "", toAddr = "", amount = 0)
	{
		//Set random addresses and amount
		this.fromAddr = generateRandomIPv4();
		this.toAddr = generateRandomIPv4();
		this.amount = generateRandomMoney();
	}

	prettify()
	{
		return `<div>Host <i>${this.fromAddr}</i> sent <i>${this.toAddr}</i> \$${this.amount}.</div>`;
	}
}

function generateRandomIPv4()
{
	let ipv4 = "";

	//Create random 0-255 value for each of 4 network parts
	ipv4 += Math.floor(Math.random() * 255) + 1;
	ipv4 += ".";
	ipv4 += Math.floor(Math.random() * 255) + 1;
	ipv4 += ".";
	ipv4 += Math.floor(Math.random() * 255) + 1;
	ipv4 += ".";
	ipv4 += Math.floor(Math.random() * 255) + 1;
	
	return ipv4;
}

//Generates mock amount of money
function generateRandomMoney()
{
	//Picks random number between 0 and 1000000
	return Math.floor(Math.random() * 1000000);
}

module.exports = Transaction;