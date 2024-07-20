const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('¡Hola, mundo! hola chinas como les va????😎👌');
  });

  module.exports = router;