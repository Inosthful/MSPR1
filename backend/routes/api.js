const express = require('express');
const router = express.Router();

// Exemple de route GET
router.get('/', (req, res) => {
  res.json({ message: 'Ceci est un exemple de réponse JSON pour la route GET /exemple' });
});

// Exemple de route POST
router.post('/', (req, res) => {
  // Vous pouvez accéder aux données POST avec req.body
  const requestData = req.body;

  res.json({ message: 'Ceci est un exemple de réponse JSOfN pour la route POST /exemple', data: requestData });
});

// Ajoutez d'autres routes au besoin...

module.exports = router;