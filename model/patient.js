'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
/**
 * @module patient
 * @description contain the details of patient information, conditions and actions.
 */

var PatientSchema = new Schema({
  tenantId: { type: String, required: true},
  userid: { type: String, required: true },
  customerId: { type: String },
  portalId: { type: String },
  status: { type: String },
  sysState: { type: String },
  dateCreated: { type: Date },
  dateUpdated: { type: Date },
  whoCreated: { type: String },
  whoUpdated: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  fullname: { type: String },
  phoneMobile: { type: String },
  referral: { type: String },
  email: { type: String }
},
{
    timestamps: { createdAt: 'dateCreated', updatedAt: 'dateUpdated' }
});


PatientSchema.statics = {

     /**
      findOnepatient. return the one patient object.
      @param id: get id to find one patient by id.
      @param callback: callback of this form.
    */
    get: function(query, callback) {
        //this.findOne(query, callback);
        this.find(query, callback);
    },
    /**
      findpatient. return the patient objects.
      @param callback: callback of this form.
    */
    getAll: function(query, callback) {
        this.find(query, callback);
    },
    
    /**
      updatepatient. return the create patient object result.
      @param updateData: updateData is use to update patient w.r.t id.
      @param callback: callback of this form.
    */
    updateById: function(id, updateData, callback) {
        this.update(id, {$set: updateData}, callback);
    },
    removeById: function(id, callback) {
        this.remove(id, callback);
    },
    create: function(data, callback) {
    	var patient = new this(data);
        patient.save(callback);
    }
}

var patient = mongoose.model('patient', PatientSchema);

/** export schema */
module.exports = {
    Patient: patient
};