const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({ shortID: { type: String, required: true, unique: true },
    longUrl: { type: String, required: true },
    clickCount: {type: Number,default : 0},
     lastAccessedAt: {type: Date},
    },{timestamps:true}
);
     
const URL=mongoose.model("url",urlSchema);
module.exports=URL;
