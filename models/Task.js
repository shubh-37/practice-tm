const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide a name"]
    },
    completed: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('Task', taskSchema);