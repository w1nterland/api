const express = require('express');

const req = require('./request');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'v1 api is working',
    status: 'true'
  });
});

router.use('/request', req);

module.exports = router;
