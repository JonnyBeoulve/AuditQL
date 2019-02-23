const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define model for audit.
const auditSchema = new Schema({
    genre: String,
    auditorId: String
});

module.exports = mongoose.model('Audit', auditSchema);