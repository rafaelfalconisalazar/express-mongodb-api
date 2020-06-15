const express= require('express');
const router= express.Router();
const Product= require('../documents/product');
const uri="/api/v1/product";


router.post(uri,function(req,res){
    let product=req.body;
    if(product.name == undefined) res.status(403).send('"the name is required"');
    Product.create(product).then(function(){
        res.status(202).send('"product created"')
    }).catch(error=>{
        res.status(403).send('"information send is invalid"')
    });
})

router.get(uri,function(req,res){
    Product.find().then(function(products){
        res.send(products)

    });
})


router.get(uri+"/:id",function(req,res){
    let id= req.params.id;
    Product.findById(id).then(function(product){
        res.send(product)
    }).catch(error=>{
        res.status(403).send('"product do not find"');
    })
})

router.get(uri+"/category/:id",function(req,res){
    let id= req.params.id;

    Product.find({category:id}).then(function(products){
        res.send(products)
    }).catch(error=>{
        res.status(403).send('"product do not find"');
    })
})


router.delete(uri+"/:id",function(req,res){
    let id= req.params.id;
    Product.findByIdAndDelete(id).then(function(){
        res.status(201).send('"product deleted"')
    }).catch(error=>{
        res.status(403).send('"product do not find"');
    })
})

router.put(uri+"/:id",function(req,res){
    let id= req.params.id;
    let product=req.body;
    Product.findByIdAndUpdate(id,product).then(function(){
        res.status(201).send('"product updated"')
    }).catch(error=>{
        res.status(403).send('"product do not find"');
    })
})

module.exports=router;