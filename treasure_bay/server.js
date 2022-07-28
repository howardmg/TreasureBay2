require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const db = require("./db/conn");
const cors = require("cors");
const AWS = require("aws-sdk");
const fs = require("fs");
const multer = require("multer");
const multerS3 = require("multer-s3");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");
const pool = require("./db/conn");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const expressSession = require("express-session");
const bcrypt = require("bcrypt");
const Strategy = require("./middleware/passport.js")



const API_PORT = process.env.API_PORT;
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
const upload = multer();
app.use(passport.initialize());
//referencing passport.js in middleware directory for authorization strategy
passport.use(Strategy);
app.use(cookieParser("secret"));
app.use(
  expressSession({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static("public"));

// app.get('/', function (req, res) {
//     res.sendFile(path.join("./my-app/public"));
//   });

/*===================================================
Routes
===================================================*/
// Get user info
app.get("/users", async (req, res) => {
  try {
    const userInfo = await pool.query("SELECT * FROM users");
    res.json(userInfo.rows);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// Get product info
app.get("/products", async (req, res) => {
  try {
    const products = await pool.query("SELECT * FROM products");
    res.json(products.rows);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// Get message info
app.get("/messages", async (req, res) => {
  try {
    const messages = await pool.query("SELECT * FROM messages");
    res.json(messages.rows);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//=======================================Profile Routes Start===============================================================================================
app.post(`/createprofile`, upload.single("file"), async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(req.body)
    await db.query(
      `INSERT INTO users (first_name, last_name, city, state, zipcode, email, password, avatar) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.city}', '${req.body.state}', '${req.body.zipcode}', '${req.body.email}', '${hashedPassword}');`
    );
    res.json("Success");
  } catch (error) {
    res.json(error);
  }
})

app.post(`/login`, (req, res, next) =>
  passport.authenticate("local", function (err, user, info) {
    // console.log(user)
    if (err) {
      return next(err);
    }
    // req / res held in closure
    req.logIn(user, function (err) {
      if (err) {
        return res.json(err);
      } if (user) {
        res.send(user)
      }
    }
    );
  })(req, res, next)
);

//get one user
app.get("/login/:email", async (req, res) => {
  try {
    const email = req.params.email
    const data = await db
      .query('SELECT email FROM users WHERE email = $1', [
        email
      ])
    res.send(data.rows)
    console.log(data.rows)
  } catch (error) {
    console.log(error.message)
  }
})
//=======================================Profile Routes End===============================================================================================


app.listen(API_PORT, () => {
  console.log(`Server is listening on port: ${API_PORT}`);
});

// //Error handling
app.use((req, res) => {
  res.status(404).send("Not Found");
});
