/*
* Thanks To
* Adhiraj Singh/Adiwajshing (Baileys Provider)
* Muhammad Ramdani/Danzz Coding (Creator/Developer)
* All Partners

* 2023 © Copyright - Danzz Coding. All Rights Reserved.
* www.danzzcoding.my.id
*/

async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
return binCode.join("")
}

async function eBinary(str = ''){    
let res = ''
res = str.split('').map(char => {       
return char.charCodeAt(0).toString(2);  
 }).join(' ')
return res
}

module.exports = { dBinary, eBinary }