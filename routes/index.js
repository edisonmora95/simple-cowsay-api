const cowsay = require('cowsay');
const express = require('express');

const router = express.Router();

router.get('/', function(_req, res) {
  res.set('Content-Type',  'text/text');
  res.send(
    cowsay.say({
      text: 'Hola mundo',
      e: '0_0',
      t: 'U',
    })
  );
});

module.exports = router;
