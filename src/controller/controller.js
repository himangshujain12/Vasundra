const login=require('../services/LoginServices')
const signup=require('../services/SignUpServices')

exports.login=async function (req,res){
    const response=await login(req,res)
    console.log("response ------",response);
    res.send(response)
}
exports.signup=async function (req,res){
    const response= await signup(req,res)
    console.log("response ------",response);
    res.send(response)
}

