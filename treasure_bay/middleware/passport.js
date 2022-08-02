const passport = require("passport");
const PassportLocal = require("passport-local");
const bcrypt = require("bcrypt");
const db = require("../db/conn");

const Strategy = new PassportLocal.Strategy(
    {
        username: "username",
    },
    async (username, password, done) => {

        try {
            let findUser = await db.query(
                `SELECT * FROM users WHERE email = '${username}';`
            );
            let user;
            if (findUser.rows.length > 0) {
                user = findUser.rows[0];
            } else {
                user = undefined;
                return done({ Error: "No user exists." });
            }
            await bcrypt.compare(
                password,
                findUser.rows[0].password,
                (err, res) => {
                    console.log(res)
                    if (err) {
                        return done(err);
                    }
                    if (res === false) {
                        return done(null, false);
                    }
                    return done(null, user);
                }
            );
        } catch (error) {
            done(error);
        }
        passport.serializeUser(function (user, done) {
            done(null, user.user_id);
        });

        passport.deserializeUser(async function (user_id, done) {
            await db.query(`SELECT * FROM users WHERE user_id = ${user_id};`)(user_id, function (err, user) {
                done(err, user);
            });
        });
    }
)

module.exports = Strategy;