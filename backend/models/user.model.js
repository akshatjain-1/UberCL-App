const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname : {
        firstname : {
            type: String,
            required : true,
            minLength : [3, 'First name must be atleast 3 characters'],
        },
        lastname : {
            type : String,
            minLength : [3, 'Last name must be atleast 3 characters']
        }
    },

    email : {
        type: String,
        required : true,
        unique : true,
        minLength : [5, 'Email must be atleast 5 characters'],
    },

    password : {
        type: String,
        required : true,
        select : false,
    },

    socketId :{
        type : String,
    },


})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET)
    return token ; 
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;