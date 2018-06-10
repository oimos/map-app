const express = require('express');
const router = express.Router();
const request = require('request');
const key = require('../../config/keys').gurunavi;

// @route   GET api/gurunavi/area
// @desc    Gurunavi area route
// @access  Public
router.get(
  '/:name',
  (req, res, next) => {
    request({
      uri: 'http://api.gnavi.co.jp/RestSearchAPI/20150630/?format=json',
      qs: {
        keyid: key,
        name: req.params.name
      }
    }).pipe(res)
  }
);

module.exports = router;