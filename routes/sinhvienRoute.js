const express=require('express');
const router=express.Router();
const sinhvien=require('../models/sinhvienModel');
//get (select)
//http://localhost:5000/
router.get('/', async (req,res)=>{
    try {
        const sinhviens = await sinhvien.find();
        //res.json(sinhviens);
        res.render('sinhviens',{sinhviens: sinhviens});//tra ve file ejs
        console.log(sinhviens);
    } catch (error) {
        console.error(error);
        res.json({error: error});
    }
});
//post (new sinhvien)
//http://localhost:5000/sinhvien
router.post('/sinhvien',async (req,res)=>{
    try {
        const {id,name}=req.body;
        const sinhvien1=new sinhvien({id,name});
        await sinhvien1.save();
        res.json(sinhvien1);
        console.log(sinhvien1);
    } catch (error) {
        console.error(error);
        res.json({error: error});
    }
});
//put (update)
//http://localhost:5000/sinhvien/:_id
router.put('/sinhvien/:_id', async (req,res)=>{
    try {
        const _id=req.params._id;
        const {id,name}=req.body;
        const updateSinhVien=await sinhvien.findByIdAndUpdate(_id,{id,name},{new: true});
        res.json(updateSinhVien);
        console.log(updateSinhVien);
    } catch (error) {
        console.error(error);
        res.json({error: error});
    }
});
//delete (delete)
//http://localhost:5000/sinhvien/:_id
router.delete('/sinhvien/:_id', async (req,res)=>{
    try {
        const _id=req.params._id;
        const deleteSinhVien= await sinhvien.findByIdAndDelete(_id);
        res.json(deleteSinhVien);
        console.log(deleteSinhVien);
    } catch (error) {
        console.error(error);
        res.json({error: error});
    }
});
module.exports=router;