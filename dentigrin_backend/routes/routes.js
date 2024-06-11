const express = require('express');
const router = express.Router();

// Definir una ruta de prueba
router.get('/test', (req, res) => {
  res.send('¡Esta es una ruta de prueba!');
});

module.exports = router;
