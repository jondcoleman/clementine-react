'use strict';

var Users = require('../models/users.js');

function ClickHandler () {
    var query = { 'github.id': req.user.github.id };

    this.getClicks = function (req, res) {
        Users
            .findOne(query, { '_id': false })
            .exec(function (err, result) {
                if (err) { throw err; }

                res.json(result.nbrClicks);
            });
    };

    this.addClick = function (req, res) {
        Users
            .findOneAndUpdate(query, { $inc: { 'nbrClicks.clicks': 1 } })
            .exec(function (err, result) {
                    if (err) { throw err; }

                    res.json(result.nbrClicks);
                }
            );
    };

    this.resetClicks = function (req, res) {
        Users
            .findOneAndUpdate(query, { 'nbrClicks.clicks': 0 })
            .exec(function (err, result) {
                    if (err) { throw err; }

                    res.json(result.nbrClicks);
                }
            );
    };

};

module.exports = ClickHandler;