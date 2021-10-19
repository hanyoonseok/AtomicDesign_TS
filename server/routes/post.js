const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport = require('passport');
const { User, Post } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({});
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
  }
});

router.post('/login', async (req, res, next) => {
  const user = await User.findOne({
    where: { email: req.body.email },
    attributes: ['email', 'nickname', 'password'],
    include: [
      { model: Post },
      {
        model: User,
        as: 'Followings',
        attributes: ['id'],
      },
      {
        model: User,
        as: 'Followers',
        attributes: ['id'],
      },
    ],
  });
  const result = user.password === req.body.password;
  if (result) {
    //비밀번호일치
    res.status(200).json(user);
  } else {
    return res.status(403).send('비밀번호 불일치');
  }
});

module.exports = router;
