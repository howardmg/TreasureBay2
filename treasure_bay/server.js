require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const db = require("./db/conn");
const cors = require("cors");
//const AWS = require("aws-sdk");
const fs = require("fs");
const util = require("util");
const multer = require("multer");
//const multerS3 = require("multer-s3");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");
const pool = require("./db/conn");
const { uploadFile, getFileStream } = require("./s3");

/************* Global variables **********************/

const PORT = process.env.API_PORT;
const upload = multer({ dest: "uploads/" });
const unlinkFile = util.promisify(fs.unlink);

/*===================================================
Middleware
===================================================*/

app.use(credentials);

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static("public"));

// app.get('/', function (req, res) {
//     res.sendFile(path.join("./my-app/public"));
//   });

/*===================================================
Routes
===================================================*/

//===================== Users Table ==============================//
// Get user info
app.get("/users", async (req, res) => {
  try {
    const userInfo = await pool.query("SELECT * FROM users");
    res.json(userInfo.rows);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//=================== Products Table ==============================//
// Get product info
app.get("/products", async (_, res) => {
  try {
    await db.query("SELECT * FROM products", (error, results) => {
      res.status(200).json(results.rows);
    });
  } catch (error) {
    console.error(error.message);
  }
});

// Post product info
app.post("/createproducts", async (req, res) => {
  try {
    await pool.connect();
    const addProduct = await pool.query(
      "INSERT INTO products (name, price, description, details, image_url,user_id) VALUES ($1, $2, $3, $4, $5, $6);",
      [name, price, description, details, image_url, user_id]
    );
    res.status(200).json(addProduct.rows);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// Get images from S3 bucket
app.get("/images/:key", (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
});

// Upload/post image to S3 bucket
app.post("/images", upload.single("image"), async (req, res) => {
  const file = req.file;
  const result = await uploadFile(file);
  await unlinkFile(file.path);
  const description = req.body.description;
  console.log("result: ", result);
  // res.send("ok");
  res.send({ imagePath: `/images/${result.Key}` });
});

//========================= Messages Table ===================================//

// Get message info
app.get("/messages", async (req, res) => {
  try {
    const messages = await pool.query("SELECT * FROM messages");
    res.json(messages.rows);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//========================= Listening on port ===================================//
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

// //Error handling
app.use((req, res) => {
  res.status(404).send("Not Found");
});
