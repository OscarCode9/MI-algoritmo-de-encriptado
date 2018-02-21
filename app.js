const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const formidable = require('express-formidable');
const myCrypto = require('./encrypt');

const config = require('./config');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(formidable({
  encoding: 'utf-8',
  multiples: true // esta almacena archivos
}))



app.post('/encrypto', async (req, res, next) => {
  const text = req.fields.text;
  const textEncrypt = myCrypto.algoritEncrypt(text);
  res.status(200).send({
    text:textEncrypt
  })
});

app.post('/decrypto', async (req, res, next)=> {
  const text = req.fields.text;
  console.log(text);
  const textDecrypt = myCrypto.algoritDescrypt(text);
  res.status(200).send({
    text: textDecrypt
  })
});



module.exports = app;