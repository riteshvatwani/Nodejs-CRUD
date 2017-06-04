'use strict';

var Patient = require('../model/patient').Patient;

/** create function to create patient. */
exports.create = function (req, res) {
	Patient.create(req.body, function(err, result) {
        if (!err) {
            return res.json({msg: "New Patient Created", data: result});
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getPatient function to get patient by id. */
exports.get = function (req, res) {
    Patient.getAll({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getPatient function to get patient by id. */
exports.getAll = function (req, res) {
    Patient.getAll({}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** updatePatient function to get patient by id. */
exports.update = function (req, res) {
    Patient.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.json({msg: "Patient updated Successfully", data: result});
        } else {
            return res.send(err); // 500 error
        }
    });
}

/** removePatient function to get patient by id. */
exports.delete = function (req, res) {
    Patient.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json({msg: "Patient deleted Successfully", data: result});
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
}
