'use strict';

var Doctor = require('../model/doctor').Doctor;

/** create function to create Company. */
exports.create = function (req, res) {
    Doctor.create(req.body, function(err, result) {
        if (!err) {
            return res.json({msg: "New Doctor created", data: result});
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getCompany function to get Company by id. */
exports.get = function (req, res) {
    Doctor.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getCompany function to get Company by id. */
exports.getAll = function (req, res) {
    Doctor.getAll({}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** updateCompany function to get Company by id. */
exports.update = function (req, res) {
    Doctor.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.json({msg: "Doctor updated Successfully", data: result});
        } else {
            return res.send(err); // 500 error
        }
    });
}

/** removeCompany function to get Company by id. */
exports.delete = function (req, res) {
    Doctor.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json({msg: "Doctor deleted Successfully", data: result});
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
}