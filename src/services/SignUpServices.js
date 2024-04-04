const Users=require('../models/Users')
module.exports=function signup (req,res){
   console.log('req in services',req.body);
   const {username,password,email}=req.body
   const data=Users.create({username:username,password:password,email:email}).then(()=>{
       console.log("data saved successfully");
   }).catch((err)=>{
       console.log("err occured while saving data",err);
   })
   
   return{
       status:200,
       message:'Signup Successfull'
   }
}

