
String.prototype.replaceAll =
function (str1, str2, ignore) {
  return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"),
    (ignore ? "gi" : "g")), (typeof (str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
}

//funcion para encriptar un string 
//regresa el String encriptado

const encrypt = (text) => {
  const myString = text + ' ';
  let myStringASCII = [];

  function format(num, length) {
    let r = "" + num;
    while (r.length < length) {
      r = "0" + r;
    }
    return r;
  }

  for (let index = 0; index < myString.length; index++) {
    let element = myString[index].charCodeAt(0);
    let leng = String(element);
    let result = leng.length;
    element = format(Number((element) * (491 * 3)), 7);
    myStringASCII = myStringASCII.concat(element);
  }

  let mySt = '';
  myStringASCII.forEach(e => {
    mySt += e;
  })
  return mySt
}


//funcion para realizar el proceso inverso, regresa el string desencriptado

const decrypt = (text) => {
  text = inverRemplaceAll(text);
  const partir = text.split("");
  let arrayStrin = [];
  let element = '';
  for (let index = 0; index < partir.length; index++) {
    if (index % 7 === 0) {
      arrayStrin = arrayStrin.concat(element / (491 * 3));
      element = '';
    } else {
      element = element + partir[index];
    }
  }
  let Decryp = '';
  arrayStrin.forEach(e => {
    const res = String.fromCharCode(Number(e));
    Decryp += res;
  });
  return Decryp
}


function remplaceAll(text) {
  let replaces = String(text).replaceAll('0', ('!'));
  replaces = String(replaces).replaceAll('3', ('$'));
  replaces = String(replaces).replaceAll('1', ('#'));
  return replaces;
}

function inverRemplaceAll(text) {
  text = String(text).replaceAll('$', ('3'));
  text = String(text).replaceAll('!', ('0'));
  text = String(text).replaceAll('#', ('1'));
  return text
}



const algoritEncrypt = (text) =>{
  return remplaceAll(encrypt(text));
}
const algoritDescrypt = (text) => {
  return decrypt(text).split("\u0000")[1];
}
module.exports = {
  algoritEncrypt,
  algoritDescrypt
}

