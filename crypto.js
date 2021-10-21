const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const secretKey = "s7vs5d7vSAC";

const encrypt = (text) => {
    const cipher = crypto.createCipher(algorithm, secretKey);
    let crypted = cipher.update(text, "utf8", "hex");
    crypted += cipher.final("hex");
    return crypted;
}

const decrypt = (text) => {
    const decipher = crypto.createDecipher(algorithm, secretKey);
    let dec = decipher.update(text, "hex", "utf8");
    dec += decipher.final("utf8");
    return dec;
}

const hw = encrypt("hello world");
console.log("hw", hw);
const pw = decrypt(hw);
console.log("pw", pw);