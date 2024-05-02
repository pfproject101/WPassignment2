const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name:{
    type: String,
    required: true
  } ,
  games:{
    type: Number,
    required: true
  } , 
  score:{
    type: Number,
    required: true
  } ,
  image:{
    type: String,
    required: true
  }   
})

const team = mongoose.model('team', teamSchema);
module.exports = team;
