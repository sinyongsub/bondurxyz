var express = require('express');
var router = express.Router();



router.get('/one', function(req,res){
    res.render('./one')
    
});





module.exports = router;