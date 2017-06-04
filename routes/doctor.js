var Doctor= require('../controller/doctor');
// API Server Endpoints
module.exports = function(router){
 router.get('/doctors', Doctor.getAll),
 router.post('/doctor', Doctor.create),
 router.get('/doctor/:id', Doctor.get),
 router.put('/doctor/:id', Doctor.update),
 router.delete('/doctor/:id', Doctor.delete)
}