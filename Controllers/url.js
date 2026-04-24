const { nanoid } = require('nanoid');
const URLModel=require("../Models/url")
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
const generateShortId=async(req,res)=>{
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"url is required"}) 
    let longUrl = body.url;


if (!longUrl.startsWith("http://") && !longUrl.startsWith("https://")) {
  longUrl = "https://" + longUrl;
} 


const existingUrl = await URLModel.findOneAndUpdate({ longUrl });

  if (existingUrl) {
    return res.json({ shortId: existingUrl.shortID });
  }

 const shortId=nanoid(8);
 
    await URLModel.create({
        shortID :shortId,
        longUrl:longUrl,
    });
    return res.json({shortId})
};
const redirectUrl = async (req, res) => {
  const { shortId } = req.params;

  const result = await URLModel.findOneAndUpdate(
    { shortID:shortId }, // important: filter by shortId
    { $inc: { clickCount: 1 } ,
    $set: { lastAccessedAt: new Date() }
    }
  );

  if (!result) return res.status(404).send("URL not found");

  res.redirect(result.longUrl);
};



module.exports={generateShortId ,redirectUrl};