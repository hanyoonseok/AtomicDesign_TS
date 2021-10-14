const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          //이메일 검사
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            done(null, false, { reason: '존재하지 않는 이메일입니다!' }); //서버에러, 성공, 클라이언트에러
          }
          //비밀번호검사
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            //비밀번호일치
            return done(null, user);
          }
          return done(null, false, { reason: '비밀번호가 틀렸습니다' });
        } catch (err) {
          console.error(err);
          return done(err);
        }
      }
    )
  );
};
