var Patient= require('../controller/patient');

// API Server Endpoints
module.exports = function(router){
	router.get('/patients', Patient.getAll),
	router.post('/patient', Patient.create),
	router.get('/patient/:id', Patient.get),
	router.put('/patient/:id', Patient.update),
	router.delete('/patient/:id', Patient.delete)
}
