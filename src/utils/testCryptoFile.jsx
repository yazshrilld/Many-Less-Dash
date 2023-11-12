const CryptoJS = require("crypto-js");
require("dotenv").config();
const ivr = process.env.IV 
const keyr = process.env.KEY 
console.log({ivr,keyr})
const ivt = ascii_to_hexa(ivr);
const keyt = ascii_to_hexa(keyr);
const key = CryptoJS.enc.Hex.parse(keyt);
const iv = CryptoJS.enc.Hex.parse(ivt);

const encryptionHelper = {};

function ascii_to_hexa() {
  let arr1 = [];
  for (let n = 0, l = str.length; n < l; n++) {
    let hex = Number(str.charCodeAt(n)).toString(16);
    arr1.push(hex);
  }
  return arr1.join("");
}

export const SymEncryptedData = async ( ) => {
  const encryptedRequest = await CryptoJS.AES.encrypt(
    JSON.stringify(data),
    key,
    { iv: iv }
  ).ciphertext.toString(CryptoJS.enc.Hex);

  return encryptedRequest;
};

export const SymDecryptedDataToString = async (data) => {
  const dencryptedData = await CryptoJS.AES.decrypt(data, key, {
    iv: iv,
    format: CryptoJS.format.Hex,
  }).toString(CryptoJS.enc.Utf8);

  return dencryptedData;
};

export const SymDecryptedDataToJson = async (data) => {
  const dencryptedData = await CryptoJS.AES.decrypt(data, key, {
    iv: iv,
    format: CryptoJS.format.Hex,
  }).toString(CryptoJS.enc.Utf8);

  return JSON.parse(dencryptedData);
};