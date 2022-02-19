// ./src/blockchain.js
// * Contains the class definition for a blockchain.

const Block = require("./block");

class Blockchain
{
	constructor()
	{
		this.chain = [new Block(Array(65).join("0"))];
	}

	//Gets previous block in chain
	getLastBlock()
	{
		return this.chain[this.chain.length - 1];
	}

	//Gets length in blocks of chain
	getChainLength()
	{
		return this.chain.length;
	}

	//Add block to chain
	addBlock()
	{
		//Mine new block using previous block hash
		let newBlock = new Block(this.getLastBlock().hash, global.transactions);

		//add block to chain and make it immutable
		this.chain.push(Object.freeze(newBlock));
	}

	//Validate blocks in chain
	isChainValid(blockchain = this)
	{
		//check each block in chain to verify hashes
		for (let i = 1; i < blockchain.chain.length; i++)
		{
			const currentBlock = blockchain.chain[i];
			const prevBlock = blockchain.chain[i-1];

			//Ensure hashes match
			if (currentBlock.hash !== currentBlock.getHash() || prevBlock.hash !== currentBlock.prevHash)
			{
				return false;
			}

			let checkString = Array(global.difficulty + 1).join("0");

			//Ensure hashes meet difficulty
			if (!currentBlock.hash.startsWith(checkString))
			{
				return false;
			}
		}

		return true;
	}

	//Consensus mechanism, picks longer valid chain
	replaceChain(newChain)
	{
		if (newChain.length <= this.chain.length) return;

		if (!this.isChainValid(newChain)) return;

		this.chain = newChain;
	}

    prettify() 
	{

		let chainStr = "";

		for (let i = 0; i < this.chain.length; i++) 
		{

			chainStr += this.chain[i].prettify();

			chainStr += "<br><hr>";

		}

		return chainStr;

	}
}

module.exports = Blockchain;