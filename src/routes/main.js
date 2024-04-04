const express=require('express')
const router=express.Router()
module.exports=router
const {login,signup}=require('../controller/controller')
const{getBrands,setBrands,deleteBrands,updateBrands}=require('../controller/BrandController')
const{setCategories,deleteCategories,updateCategories,getCategories}=require('../controller/CategoryController')
const{getvehicles,addVehicle}=require('../controller/VehiclesController')
console.log("main.js file");

router.post('/login',login)
router.post('/signup',signup)

router.get('/brand',getBrands)
router.post('/brand',setBrands)
router.delete('/brand',deleteBrands)
router.put('/brand',updateBrands)


router.get('/category',getCategories)
router.post('/category',setCategories)
router.delete('/category',deleteCategories)
router.put('/category',updateCategories)


router.get('/vehicles',getvehicles)
router.post('/vehicles',addVehicle)


