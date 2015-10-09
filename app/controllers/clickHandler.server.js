'use strict';

var Clicks = require('../models/clicks.js');

function clickHandler() {


	this.getClicks = function (req, res) {
    Clicks
        .findOne({}, { '_id': false })
        .exec(function (err, result) {
                if (err) { throw err; }

                if (result) {
                    res.json(result);
                } else {
                    var newDoc = new Click({ 'clicks': 0 });
                    newDoc.save(function (err, doc) {
                        if (err) { throw err; }

                        res.json(doc);
                    });

                }
            });
	};

	this.addClick = function (req, res) {
	    Clicks
	        .findOneAndUpdate({}, { $inc: { 'clicks': 1 } })
	        .exec(function (err, result) {
	                if (err) { throw err; }
	
	                res.json(result);
	            }
	        );
	};

	this.resetClicks = function (req, res) {
	    Clicks
	        .findOneAndUpdate({}, { 'clicks': 0 })
	        .exec(function (err, result) {
	                if (err) { throw err; }
	
	                res.json(result);
	            }
	        );
	};
};

module.exports = clickHandler;