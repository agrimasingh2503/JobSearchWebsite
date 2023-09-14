const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobsSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    requirements: {
        type: String,
        required: true,
    },
    validation: {
        type: Boolean,
        required: true,
    },
    application_questions: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    }
});

const Jobs = mongoose.model('Jobs', jobsSchema);
module.exports = Jobs;