'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _restaurant = require('../model/restaurant');

var _restaurant2 = _interopRequireDefault(_restaurant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();
  //CRUD- Create Read Update Delete
  // '/v1/restaurant/add' - Create
  api.post('/add', function (req, res) {
    var newRest = new _restaurant2.default();
    newRest.name = req.body.name;

    newRest.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Restaurant saved Suscessfully' });
    });
  });

  // '/v1/restaurant' -Read
  api.get('/', function (req, res) {
    _restaurant2.default.find({}, function (err, restaurants) {
      if (err) {
        res.send(err);
      }
      res.json(restaurants);
    });
  });

  // '/v1/restaurant/:id - Read 1'
  api.get('/:id', function (req, res) {
    _restaurant2.default.findById(req.params.id, function (err, restaurant) {
      if (err) {
        res.send(err);
      }
      res.json(restaurant);
    });
  });
  return api;
};
//# sourceMappingURL=restaurant.js.map