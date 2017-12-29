var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var PortSchema = new Schema({
    title : String,
    description : String,
    created_at : {
        type : Date,
        default : Date.now()
    }
});



PortSchema.plugin( autoIncrement.plugin , {model : 'portfolio', field : 'id', startAt : 1});
module.exports = mongoose.model('portfolio', PortSchema);