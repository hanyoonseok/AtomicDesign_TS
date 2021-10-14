const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport = require('passport');
const { User } = require('../models');

router.post('/login', async (req, res, next) => {
  const user = await User.findOne({
    where: { email: req.body.email },
    attributes: ['email', 'nickname', 'password'],
  });
  const result = user.password === req.body.password;
  if (result) {
    //비밀번호일치
    res.status(200).json(user);
  } else {
    return res.status(403).send('비밀번호 불일치');
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const findUser = await User.findOne({
      where: { email: req.body.email },
    });
    if (findUser) {
      // 이미 존재하는 이메일이면
      return res.status(403).send('이미 존재하는 이메일입니다');
    } else {
      const user = await User.create({
        email: req.body.email,
        password: req.body.password,
        nickname: req.body.nickname,
      });
      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/logout', (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;
