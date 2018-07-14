var Web3 = require('web3');
var web3 = new Web3();
const fs = require('fs');
// web3.setProvider(new web3.providers.HttpProvider("https://mainnet.infura.io"));
web3.setProvider(new web3.providers.HttpProvider("http://127.0.0.1:8545"));

//console.log(web3);

function guess(){
    var randomHex = randHex(64);

    // console.log(randomHex);

    web3.eth.personal.importRawKey(randomHex, "")
    .then((response) => {
    	// console.log(response);
      web3.eth.getBalance(response, function (error, result) {
        if(error){ console.log("Error: " + error); }

        if(result > 0){
          fs.appendFileSync(__dirname+'/goodlog.log', "Hex: " + randomHex + " & Address: " + response + " & balance: " + result + '\n');
          // console.log("Hex: " + randomHex + " & Address: " + response + " & balance: " + result);
        }
        // console.log();
        guess();
      });
    }).catch((error) => {
    	console.log(error);
    });
}

function randHex(len) {
  var maxlen = 8,
      min = Math.pow(16,Math.min(len,maxlen)-1)
      max = Math.pow(16,Math.min(len,maxlen)) - 1,
      n   = Math.floor( Math.random() * (max-min+1) ) + min,
      r   = n.toString(16);
  while ( r.length < len ) {
     r = r + randHex( len - maxlen );
  }
  return r;
};

guess();
