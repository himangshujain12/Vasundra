const express=require('express')
const router=express.Router()
const categoryServices=require('../services/CategoryServices')
const Category=require('../models/CategoryModel')



exports.getCategories=async function (req,res){
    const Category=await Category.find()
   if(Category){
    res.send({
        status:true,
        data:Category
     })
   }else{
    res.status(500).json({message:'Category not found'})
   }
}
exports.setCategories=async function (req,res){
    const {category,vehicle_type,category_id}=req.body
    const saveCategory=await Category.create({category_id:category_id,category:category,vehicle_type:vehicle_type})
    if(saveCategory){
     res.status(200).json({message:'Saved Successfully'})
    }
    else{
     res.status(500).json({message:'Category not saved'})
 
    }
}
exports.deleteCategories=async function (req,res){
    const {name}=req.body
    const deleteCategory=await Category.findOneAndDelete({name:name})
    if(deleteCategory){
     res.status(200).json({message:'delete Category Successfully'})
    }
    else{
     res.status(500).json({message:'Category not deleted'})
 
    }
}
exports.updateCategories=async function (req,res){
    const {name}=req.body
    const UpdateCategory=await Category.findOneAndUpdate({name:name})
    if(UpdateCategory){
     res.status(200).json({message:'Updated Category Successfully'})
    }
    else{
     res.status(500).json({message:'Category not Updated'})
 
    }
}


