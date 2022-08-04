require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const db = require("./db/conn");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");
const pool = require("./db/conn");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const expressSession = require("express-session");
const bcrypt = require("bcrypt");
const Strategy = require("./middleware/passport.js");
const util = require("util");

/*===================================================
Global Constants
===================================================*/
const API_PORT = process.env.API_PORT;

const { uploadFile, getFileStream } = require("./s3");
//const { send } = require("process");
const unlinkFile = util.promisify(fs.unlink);
const upload = multer({ dest: "uploads/" });

/*===================================================
Middleware
===================================================*/
passport.use(Strategy);

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
//referencing passport.js in middleware directory for authorization strategy
app.use(cookieParser("secret"));
app.use(
  expressSession({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

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

// Get product info with user join table
app.get("/all", async (_, res) => {
  try {
    await db.query(
      "SELECT * FROM products INNER JOIN users ON products.user_id = users.user_id ORDER BY product_id DESC",
      (error, results) => {
        res.status(200).json(results.rows);
      }
    );
  } catch (error) {
    console.error(error.message);
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

//====================== Profile Routes ======================//

app.post(`/createprofile`, upload.array("file"), async (req, res, next) => {
  try {
    const avatar = req.files;
    const result = await uploadFile(avatar);
    console.log(avatar);
    const imgKey = avatar[0].filename;
    const imageURL = `https://treasure-bay-images.s3.amazonaws.com/${imgKey}`;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(req.file);
    console.log(req.body);
    await db.query(
      `INSERT INTO users (first_name, last_name, city, state, zipcode, email, password, avatar) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.city}', '${req.body.state}', '${req.body.zipcode}', '${req.body.email}', '${hashedPassword}', '${imageURL}');`
    );
    res.json("Success");
  } catch (error) {
    res.json(error);
  }
});

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
      }
      if (user) {
        res.send(user);
      }
    });
  })(req, res, next)
);

//get one user
app.get("/login/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const data = await db.query("SELECT email FROM users WHERE email = $1", [
      email,
    ]);
    res.send(data.rows);
    console.log(data.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//=================== Products Routes ======================//

// Post product info
app.post("/postitem", upload.array("images"), async (req, res) => {
  try {
    const { productName, price, details, description, user_id } = req.body;
    const parseUser = parseInt(user_id);
    const parsePrice = parseInt(price);
    const files = req.files;
    const imageArray = [];
    files.map((files) => {
      const imgkey = files.filename;
      const imageURL = `https://treasure-bay-images.s3.amazonaws.com/${imgkey}`;
      imageArray.push(imageURL);
    });

    console.log(files, imageArray);

    // Uploads file(s) to S3 bucket
    const result = await uploadFile(files);

    // Adds post item info to the database
    const addProduct = await pool.query(
      "INSERT INTO products (name, price, description, details, image_url,user_id) VALUES ($1, $2, $3, $4, $5, $6);",
      [productName, parsePrice, description, details, imageArray, parseUser]
    );
    res.status(200).json(addProduct.rows);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//search functionality to find products
app.get("/search/:searchvalue", async (req, res) => {
  const searchValue = req.params.searchvalue;
  try {
    const data = await db.query(
      `SELECT * FROM products INNER JOIN users ON products.user_id = users.user_id WHERE LOWER(name) LIKE LOWER('%${searchValue}%')`
    );
    res.send(data.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/profileproducts/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await db.query(
      "SELECT * FROM products INNER JOIN users ON users.user_id = products.user_id WHERE users.user_id = $1 ORDER BY product_id DESC",
      [id],
      (error, results) => {
        res.status(200).json(results.rows);
      }
    );
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.params.id);
  try {
    await db.query(
      "SELECT * FROM products INNER JOIN users ON products.user_id = users.user_id WHERE product_id = $1 ORDER BY product_id DESC",
      [id],
      (error, results) => {
        res.status(200).json(results.rows);
      }
    );
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/product/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await db.query(
      "DELETE FROM products WHERE product_id = $1",
      [id],
      (err, results) => {
        res.status(200).send(`product was deleted`);
      }
    );
  } catch (error) {
    console.error(error.message);
  }
});

// Get images from S3 bucket
app.get("/images/:key", (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
});

// Upload single image to S3 bucket
app.post("/images", upload.single("image"), async (req, res) => {
  const file = req.file;
  const result = await uploadFile(file);
  await unlinkFile(file.path);
  console.log("result: ", result);
  res.send({ imagePath: `/images/${result.Key}` });
});

// Upload multiple images to S3 bucket
app.post("/multiple", upload.array("images"), async (req, res) => {
  console.log("req.files ", req.files);
  try {
    const results = await uploadFile(req.files);
    console.log("backend results ", results);
    res.json({ status: "success" });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
  //await unlinkFile(file.path);
});

//=================== Listening on Port ==============================//
app.listen(API_PORT, () => {
  console.log(`Server is listening on port: ${API_PORT}`);
});

// //Error handling
app.use((req, res) => {
  res.status(404).send("Not Found");
});
