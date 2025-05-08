var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var models = require("../models/index");

module.exports = () => {
    // sessionにユーザー情報を格納する処理
    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    // sessionからユーザー情報を復元する処理
    passport.deserializeUser(async (username, done) => {
        // DBのuserテーブルからユーザーを取得する処理
        try {
            let user = await models.users.findOne({ where: { username: username } });
            done(null, user);
        } catch (err) { done(err); }
    });

    // 利用するstrategyを設定
    passport.use(new localStrategy(async (username, password, done) => {
        try {
            let user = await models.users.findOne({ where: { username: username } });
            if (!user) { return done(null, false); }
            if (user.password != password) { return done(null, false); }
            return done(null, user);
        } catch (err) { return done(err); }
    }));
}