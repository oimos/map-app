const express = require('express');
const router = express.Router();
const request = require('request');
const key = require('../../config/keys').gurunavi;

// @route   GET api/gurunavi/area
// @desc    Gurunavi area route
// @access  Public
router.get(
  // '/:name',
  '/:latitude/:longitude',
  (req, res, next) => {
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    request({
      // uri: 'http://api.gnavi.co.jp/RestSearchAPI/20150630',
      //https://api.gnavi.co.jp/PhotoSearchAPI/20150630/?keyid=1b0e68436ee9722315dbe246f2885e9b&format=json&latitude=35.7055589&longitude=139.64941109999998
      uri: 'https://api.gnavi.co.jp/PhotoSearchAPI/20150630/',
      qs: {
        keyid: key,
        format: 'json',
        latitude: req.params.latitude,
        longitude: req.params.longitude,
        hit_per_page: 50
        // areacode_m: 'AREAM2977'
      }
    }).pipe(res)
    // name: req.params.name,
  }
);

module.exports = router;