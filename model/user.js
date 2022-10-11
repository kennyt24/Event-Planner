const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
   googleId : {
       type : String,
        
   } , 
   displayName : {      
    type : String,
    required: false,
} ,
firstName : {
    type : String,
    required: true
} ,
lastName : {
    type : String,
    
},
image : {
    type : String,
    
    
},
role: {
    type: String,
    enumerable: ['user', 'admin'],
    defaultValue: 'user',
    allowNull: true,
  },
  email : {
    type: String,
    unique: true,
  },
  password : {
    type : String,
    required: false,
  },
createdAt:{
    type: Date,
    default : Date.now
}    
})

module.exports = mongoose.model("User",UserSchema );