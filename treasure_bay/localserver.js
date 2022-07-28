require("dotenv").config();
const express = require("express");
const app = express();
const path = require('path');
const db = require("./db/conn");
const cors = require("cors");
const AWS = require("aws-sdk");
const fs = require("fs");
const multer = require("multer");
const multerS3 = require("multer-s3");
const credentials = require('./middleware/credentials');
const corsOptions = require("./config/corsOptions");
const pool = require("./db/conn");
const { uploadFile, getFileStream } = require("./s3");




const fileStorageEngine=multer.diskStorage({
  destination: (req,file,cb)=>{
  cb(null,'./src/components/ProductItem/images')
 },
 filename:(req,file,cb)=>{
  cb(null,Date.now()+ "--"+file.originalname)
 }
});
const upload = multer({storage:fileStorageEngine});


app.use(credentials);

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static("public"));

// app.get('/', function (req, res) {
//     res.sendFile(path.join("./my-app/public"));
//   });

/*===================================================
Routes
/*===================================================*/
// Get user info
app.get("/users", async (req, res) => {
  try {
    const userInfo = await pool.query("SELECT * FROM users");
    res.json(userInfo.rows);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//=================get/post product info==============================//
// Get product info
app.get("/products", async (req, res) => {
  try {
    const products = await pool.query("SELECT * FROM products");
    res.json(products.rows);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.post("/postitem", upload.single('images'), async (req, res) => {
  try {
    const {productName, price, details, description, user_id} = req.body
    // console.log("product name: ", productName)
    const parseUser = parseInt(user_id)
    const parsePrice = parseInt(price)
    // console.log("parsed price", parsePrice)
    // console.log("body data: ", req.body)
    const file = req.file;
    // console.log("file: ", file)
    const result = await uploadFile(file);
    // console.log("result: ", result)
    const imageURL = result.Location
    // console.log("s3 image url: ", imageURL)
    const addProduct = await pool.query(
      "INSERT INTO products (name, price, description, details, image_url,user_id) VALUES ($1, $2, $3, $4, ARRAY[$5], $6);",
      [productName, parsePrice, description, details, imageURL, parseUser]
    );
    res.status(200).json(addProduct.rows);
  } catch (error) {
    res.status(400).json(error.message);
  }
});



    
    
//=========================End Post Product ===================================//

// Get message info
app.get("/messages", async (req, res) => {
  try {
    const messages = await pool.query("SELECT * FROM messages");
    res.json(messages.rows);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.listen(process.env.API_PORT, () => {
     console.log(`Server is listening on port: ${process.env.API_PORT}`);
   });


// //Error handling
app.use((req, res) => {
     res.status(404).send("Not Found");
   });