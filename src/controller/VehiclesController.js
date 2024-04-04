const express=require('express')
const router=express.Router()
const VehicleServices=require('../services/VehicleServices')
const vehilces=require('../models/VehicleModel')



exports.getvehicles=async function (req,res){
    const Vehicle=await vehilces.find()
    console.log(Vehicle);
    if(Vehicle){
     res.send({
        status:true,
        data:Vehicle
     })
    }else{
     res.status(500).json({message:'Vehicle not found'})
    }
}
exports.addVehicle=async function (req,res){
    const {id,brand_id,category_id,bodytype_id,bind_id,model_name,vehicle_information_images,VehiclePriceVariant}=req.body
    const savevehilces=await vehilces.create({id:id,brand_id:brand_id,category_id:category_id,bodytype_id:bodytype_id,bind_id:bind_id,model_name:model_name,vehicle_information_images:vehicle_information_images,VehiclePriceVariant:VehiclePriceVariant})
    if(savevehilces){
     res.status(200).json({message:'Saved Successfully'})
    }
    else{
     res.status(500).json({message:'vehilces not saved'})
 
    }
}

