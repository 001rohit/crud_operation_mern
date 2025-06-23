const express = require('express')
const cors = require('cors')
const router  = express.Router()
const user  = require("../module/User")

router.use(cors())
router.use(express.json())
router.get("/home",(req,res)=>{
    res.send("home page")
})

router.post("/createUser",(req,res)=>{
     user.create(req.body)
     .then(users=>res.json(users)).catch(err=>res.json(err))
})

router.get('/',(req,res)=>{
    user.find({}).then(users=>res.json(users)).catch(err=>res.json(err))
})

router.get('/updateUser/:id',(req,res)=>{
    const id = req.params.id
    // const {name,email,age} = req.body.
    user.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age})
    .then(users=>res.json(users)).catch(err=>res.json(err))
})
router.get("/getUser/:id",(req,res)=>{
    const id = req.params.id;
    user.findById({_id:id}).then(users=>res.json(users)).catch(err=>res.json(err))
})

router.put("/updateUser/:id",(req,res)=>{
    const id = req.params.id;
    // const {name,email,age} = req.body
   user.findByIdAndUpdate({_id:id},{name:req.body.name ,email:req.body.email ,age:req.body.age}).then(users=>res.json(users)).catch(err=>res.json(err)) 
})
router.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    user.findByIdAndDelete({_id:id}).then(users=>res.json(users)).catch(err=>res.json(err))
})
module.exports = router