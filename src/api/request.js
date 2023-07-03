const express = require('express');
const request = require('request');
const router = express.Router();

// router.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

router.get('/*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  var url = req.url.replace("/", "");
  request(
    { url: `https://aiotube.deta.dev/video/${url}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: "There has been an error." });
      }
      return res.json(JSON.parse(body));
    }
  )
});

module.exports = router;
