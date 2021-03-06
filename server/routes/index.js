const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.get('/', (req, res) => {
  res.status(200).send('Homepage renders');
});

router.post('/json', (req, res) => {
  controllers.createJSON(req.body, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Routes: createJSON POST success');
      res.status(201).send(data);
    }
  });
});

module.exports = router;
