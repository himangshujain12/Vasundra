 const Users=require('../models/Users')
 let data
 module.exports=async function login (req,res){
    console.log('req in services',req.body);
    const {username,password}=req.body
     data=await Users.findOne({username:username})
if(data){
    return{
        status:200,
        message:'login Successfull'
    }
} else{
    return{
        status:false,
        message:"Signup Required"
    }
}
}

