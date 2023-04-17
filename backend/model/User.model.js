const { mongoose, Schema, model } = require("mongoose")
const  jwt = require('jsonwebtoken');

const AuthSchema = new Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    phone:{type: String, required: true},
    password:{type: String, required: true},
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    profile:{
        type:String,
        required:true,
    }
    
})


// token generate
// AuthSchema.methods.generateAuthtoken = async function () {
//     try {
//         let token23 = jwt.sign({ _id: this._id }, 'SECRET1234', {
//             expiresIn: "1d"
//         });
//         console.log("token23",token23)
//         this.tokens = this.tokens.concat({ token: token23 });
//         await this.save();
//         return token23;
//     } catch (error) {
//         res.status(422).json(error)
//     }
// }



const User = model("Auth",AuthSchema)
module.exports=User