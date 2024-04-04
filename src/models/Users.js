const {mongoose,Schema,model}=require('mongoose')
const userSchema=Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
       type:String,
       required:true
    }
})

const Users=model("UserModel",userSchema)
module.exports=Users