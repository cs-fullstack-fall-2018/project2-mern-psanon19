const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);  // workaround for deprecated warning
const moment = require('moment');

const Schema = mongoose.Schema;
// const Date = moment.Schema;

const todoSchema = new Schema({
    Username: String,
    Title: String,
    JournalEntry: String,
    Date: {
        type: Date,
        default: Date.now
    }
});

const Todos = mongoose.model('Todos', todoSchema);

// Export as Todos
module.exports = Todos;