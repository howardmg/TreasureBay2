require("dotenv").config();
const fs = require("fs");
const { S3 } = require("aws-sdk");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const path = require("path");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

//uploads multiple files to S3
const uploadFile = async (files) => {
  const s3client = new S3Client({ region, accessKeyId, secretAccessKey });

  const uploadParams = files.map((file) => {
    let fileStream = fs.createReadStream(file.path);

    return {
      Bucket: bucketName,
      Key: path.basename(file.path),
      Body: fileStream,
    };
  });

  return await Promise.all(
    uploadParams.map((param) => s3client.send(new PutObjectCommand(param)))
  );
};
exports.uploadFile = uploadFile;

// downloads a file from S3 bucket
const getFileStream = (fileKey) => {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };

  return s3.getObject(downloadParams).createReadStream();
};
exports.getFileStream = getFileStream;
