const { mongoose, Schema, model } = require("mongoose")

const AuthSchema = new Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    phone:{type: String, required: true},
    password:{type: String, required: true},
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
    
})


const User = model("Auth",AuthSchema)
module.exports=User