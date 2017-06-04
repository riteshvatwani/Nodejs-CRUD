'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * @module doctor
 * @description contain the details of doctor information, conditions and actions.
 */

var DoctorSchema = new Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String },
});


DoctorSchema.statics = {

     /**
      findOneDoctor. return the one Doctor object.
      @param id: get id to find one Doctor by id.
      @param callback: callback of this form.
    */
    get: function(query, callback) {
        this.findOne(query, callback);
    },
    /**
      findDoctor. return the Doctor objects.
      @param callback: callback of this form.
    */
    getAll: function(query, callback) {
        this.find(query, callback);
    },

    /**
      updateDoctor. return the create Doctor object result.
      @param updateData: updateData is use to update Doctor w.r.t id.
      @param callback: callback of this form.
    */
    updateById: function(id, updateData, callback) {
        this.update(id, {$set: updateData}, callback);
    },
    removeById: function(removeData, callback) {
         this.remove(removeData, callback);
    },
    create: function(data, callback) {
        var doctor = new this(data);
        doctor.save(callback);
    }
}

var doctor = mongoose.model('doctor', DoctorSchema);

/** export schema */
module.exports = {
    Doctor: doctor
};