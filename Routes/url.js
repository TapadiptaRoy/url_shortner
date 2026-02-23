const express=require('express');
const { generateShortId,redirectUrl }=require("../Controllers/url");
const router=express.Router();

router.post('/',generateShortId);   
router.get("/:shortId", redirectUrl);
module.exports=router;