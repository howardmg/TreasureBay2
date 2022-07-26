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
// const pool = require("./db/conn");

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



   app.get("/users", async (req, res) => {
     try {
       const userInfo = await db.query("SELECT * FROM users");
       res.json(userInfo.rows);
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