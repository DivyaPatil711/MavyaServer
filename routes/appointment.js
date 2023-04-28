const express=require('express')

const mongoose=require('mongoose')
const Appointment=require('../models/Appointment')
const router=express.Router()
const app=express()
app.use(express.json())

//get all data
router.get('/api',async(req,res)=>{
   const appointment=await Appointment.find({})
   res.status(200).json(appointment)
})

//post data
router.post('/api',async(req,res)=>{
    const {name,email,phone,date,time}=req.body
    try{
        const appointment=await Appointment.create({name,email,phone,date,time})
        res.status(200).json(appointment)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
})

module.exports=router