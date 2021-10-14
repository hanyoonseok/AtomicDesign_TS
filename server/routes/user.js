const express = require('express');
const router = express.Router();

const { User} = require('../models');

router.post('/add', async (req,res,next)=>{
    try {
        if (req.user) {
          const fullUserWithoutPassword = await User.findOne({
            where: { id: req.user.id },
            attributes: {
              exclude: ['password'],
            },
          });
          res.status(200).json(fullUserWithoutPassword);
        } else {
          res.status(200).json(null);
        }
      } catch (err) {
        console.error(err);
        next(err);
      }
})
module.exports = router;