var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/:id', async(req, res, next) => {
//   try{
//     let results = await db.one(req.params.id);
//     res.json(results);
//   }
//   catch(e){
//     console.log(e);
//     res.status(500);
//   }
// });

module.exports = router;
