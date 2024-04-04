const mongoose=require('mongoose')
console.log(process.env.DB_URL)
mongoose.connect(`${process.env.DB_URL}`).then(()=>{
    console.log("DB connected Successfully");
}).catch((err)=>{
console.log("error in connecting DB",err);
console.log("error");
})