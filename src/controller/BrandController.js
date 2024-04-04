const express=require('express')
const router=express.Router()
const brandServices=require('../services/BrandServices')
const Brand=require('../models/BrandModel')



exports.getBrands=async function (req,res){
   const brands=await Brand.find()
   if(brands){
    res.send({
        status:true,
        data:brands
     })
   }else{
    res.status(500).json({message:'Brand not found'})
   }
}
exports.setBrands=async function (req,res){
    const {brand_id,name,model}=req.body
   const saveBrand=await Brand.create({brand_id:brand_id,name:name,model:model})
   if(saveBrand){
    res.status(200).json({message:'Saved Successfully'})
   }
   else{
    res.status(500).json({message:'Brand not saved'})

   }
}
exports.deleteBrands=async function (req,res){
    const {name}=req.body
   const deleteBrand=await Brand.findOneAndDelete({name:name})
   if(deleteBrand){
    res.status(200).json({message:'delete Brand Successfully'})
   }
   else{
    res.status(500).json({message:'Brand not deleted'})

   }
}
exports.updateBrands=async function (req,res){
    const {name}=req.body
    const UpdateBrand=await Brand.findOneAndUpdate({name:name})
    if(UpdateBrand){
     res.status(200).json({message:'Updated Brand Successfully'})
    }
    else{
     res.status(500).json({message:'Brand not Updated'})
 
    }
}


