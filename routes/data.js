var express = require('express');
var router = express.Router();

function fakeData() {
  let response = [];

  for (let i = 0; i < 100; ++i) {
    response.push({
      id: i,
      name: `name_${i}`,
      description: `descp_${i}`,
      price: `price_${i}`
    });
  }

  return response;
}

router.get('/data', function(req, res, next) {
  res.json(fakeData());
});

module.exports = router;
