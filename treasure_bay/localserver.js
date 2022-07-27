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

const API_PORT = process.env.API_PORT;

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
app.get("/all", async (_, res) => {
  try {
      await db.query('SELECT * FROM products INNER JOIN users ON products.user_id = users.user_id', (error, results) => {
        res.status(200).json(results.rows)
      })
  } catch (error) {
      console.error(error.message)
  }
});

app.get("/products", async (_, res) => {
  try {
      await db.query('SELECT * FROM products', (error, results) => {
        res.status(200).json(results.rows)
      })
  } catch (error) {
      console.error(error.message)
  }
});

app.get("/product/:id", async (req, res) => {
  const id = req.params.id
  console.log(req.params.id)
  try {
      await db.query('SELECT * FROM products WHERE id = $1',  [id], (error, results) => {
          
          res.status(200).json(results.rows)
      })
  } catch (error) {
      console.error(error.message)
  }
});


// Post product info
app.post("/createproducts", async (req, res) => {
  const { name, price, description, details, picture, user_id} = req.body;
  try {
       await pool.connect()
       const addProduct = await pool.query('INSERT INTO products (name, price, description, details, picture,user_id) VALUES ($1, $2, $3, $4, $5, $6);',
       [name,price,description, details, picture,user_id])
        res.status(200).json(addProduct.rows);
     
     
      } 
      catch (error) {
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

app.listen(API_PORT, () => {
  console.log(`Server is listening on port: ${API_PORT}`);
});

// //Error handling
app.use((req, res) => {
  res.status(404).send("Not Found");
});
