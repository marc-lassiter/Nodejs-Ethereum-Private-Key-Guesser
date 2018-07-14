# Nodejs-Ethereum-Private-Key-Guesser
A simple nodejs private key guesser for the Ethereum network for experimental purposes.

Current flow:
- Generates a random 64 character hex -> geth account importRawKey with that random hex acting as the private key -> returns eth address -> checks the balance of the address via a localhost ethereum node -> if a ETH balance was found it writes the information to a log file

Things that may be nice to add:
- A counter, so you know how many addresses you've checked
- Checking token balances too.. can use something like https://github.com/bokkypoobah/TokenTrader/tree/master/scripts or https://github.com/hunterlong/tokenbalance
- Imporve performence

Feel free to mess around with the code / contribute changes.
