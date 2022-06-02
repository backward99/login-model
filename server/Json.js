const express = require('express')
const router = express.Router();
const multer = require("multer");
const {Json} = require('./models/Json');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename:  (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    // fileFilter:  (req, file, cb) => {
    //     const ext = path.extname(file.originalname);
    //     if(ext !== '.json'){
    //         return cb(res.status(400).end('only json is allowd'), false);
    //     }
    //     cb(null, true);
    // },
});


const upload = multer({storage: storage}).single("file");

router.post('/uploadfiles', (req, res) =>{
    upload(req, res, err => {
        if(err) {
            console.log('err',err)
            return res.json({ uploadSuccess: false, err})
        }
        return res.json({ uploadSuccess: true, url: res.req.file.path, fileName: res.req.file.filename})
    })
})


router.post('/uploadJson', (req, res) =>{
    const json = new Json(req.body);

    json.save((err,doc)=>{
        if(err) return res.json({uplasdJsonSuccess: false, err})
        res.status(200).json({uplasdJsonSuccess: true})
    })

})

module.exports = router;