const {mongoose,Schema,model}=require('mongoose')
const userSchema=Schema({
    id:{
        type:Number,
        required:true
    },
    brand_id:{
        type:Number,
        required:true
    },
    category_id:{
       type:Number,
       required:true
    },
    bodytype_id:{
       type:Number,
       required:true
    },
    bind_id:{
        type:Number,
        required:true
     },
     model_name:{
        type:String,
        required:true
     },
     vehicle_information_images:{
        type:Array,
        required:true
     },
     VehiclePriceVariant:{
        type:Array,
        required:true
     },


})

const Vehicle=model("VehicleModel",userSchema)
module.exports=Vehicle