const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model for auditor.
const auditorSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Auditor', auditorSchema);