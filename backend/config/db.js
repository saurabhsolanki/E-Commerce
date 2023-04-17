const mongoose=require("mongoose")
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://yourshop:yourshop@cluster0.2qoclxj.mongodb.net/yourshop",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res)=>{
    console.log("db connected")
}).catch((e)=>{
    console.log(e)
})