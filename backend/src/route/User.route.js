const User = require('../model/User.model');
const {isAuth}=require('../middleware/authentication')

const express = require('express');
const  jwt = require('jsonwebtoken');

const app = express.Router();



app.get("/", async (req, res) => {

    try {
      let allUsers = await User.find();
       return res.send({ message: "signups", data: allUsers });
    } catch (e) {
      console.log(e);
      return res.status(404).send({ error: 'Something went wrong in getting all user' });
    }
  });



app.post('/signup', async (req, res) => {
    try {
        const { name,email,phone, password ,role} = req.body;
        const getuser = await User.findOne({ email });
        if (getuser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await User.create({ name,email, phone,password ,role});
        console.log('user: ', user);

        return res.status(201).send({ message : 'User Registered Successfully' });
        } catch (error) {
        return res.status(404).send({ error: 'Something went wrong' });
    }
});


app.post('/login',async (req, res) => {
    const { email, password } = req.body;
    console.log('req.body: ', req.body);
    try {
        const user = await User.findOne({ email });
        console.log('user: ', user);
        if (!user) {
            return res.status(400).send({ message: 'User does not exist' });
        }
        if (user.password !== password) {
            return res.status(400).send({ message: 'Password is incorrect' });
        }

        const token = jwt.sign({ _id: user._id,name:user.name,role:user.role }, 'SECRET1234', { expiresIn: '7 days' });
        res.cookie("usercookie",token,{
          expires:new Date(Date.now()+9000000),
          httpOnly:true
        }); 
        return res.status(200).send({ message: 'Login successful' , token, user : user.name, role:user.role, userData:user});
    } catch (error) {
        return res.status(404).send({ message : 'Something went wrong' });
    }
});


app.get("/validuser",isAuth,async(req,res)=>{
  try {
      const ValidUserOne = await User.findOne({_id:req.userId});
      res.status(201).json({status:201,ValidUserOne});
  } catch (error) {
      res.status(401).json({status:401,error});
  }
});

// logout User 
app.get("/logoutuser",isAuth,async(req,res)=>{
  try {
    req.rootUser.tokens =  req.rootUser.tokens.filter((curelem)=>{
        return curelem.token !== req.token
    });

    res.clearCookie("usercookie",{path:"/"});

    req.rootUser.save();

    res.status(201).json({status:201})

} catch (error) {
    res.status(401).json({status:401,error})
    console.log(error)
}
});


//   get Single User
app.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      let singleUser = await User.findById(id);
      return res.send({ message: "Single User ", data: singleUser });
    } catch (e) {
        return res.status(404).send({ error: 'Something went wrong in getting single user' });
    }
  });


  // delete the user
app.delete("/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.send({ message: "Single User Deleted", data: user });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

module.exports = app;