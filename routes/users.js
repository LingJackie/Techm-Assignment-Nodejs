var express = require('express');
var router = express.Router();
var userModel = require('../models/userModel.js');


router.post('/post', async (req, res) => {
  const dbSize = await userModel.countDocuments();
  const data = new userModel({
      id: dbSize + 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthday: req.body.birthday,
      email: req.body.email,
      phoneNum: req.body.phoneNum,
      username: req.body.username,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      createdAt: new Date(),
  })
  console.log(req.body);
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

router.get('/get', function(req, res, ) {
    const query = userModel.find({}, 'id firstName username email');
    // userModel.find((err, docs) => {
    //     if (!err) {
    //         // res.render("list", {
    //         //     data: docs
    //         // });
    //         console.log(docs);
    //         res.json(docs);
    //     } else {
    //         console.log('Failed to retrieve docs: ' + err);
    //     }
    // });
    query.exec((err, docs) => {
        if (!err) {
            // res.render("list", {
            //     data: docs
            // });
            console.log(docs);
            res.json(docs);
        } else {
            console.log('Failed to retrieve docs: ' + err);
        }
    });
 
});

module.exports = router;