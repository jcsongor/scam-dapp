require('dotenv').config();
const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_DEPLOYER_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_DEPLOYER_ACCESS_KEY_SECRET,
});
const bucketName = process.env.AWS_DEPLOYER_BUCKET_NAME;
const fileName = `build.zip`;
const remoteFileName = `build-${(new Date()).toISOString().replace(/\..*/, '')}.zip`;
const index = `<html><body><a href="/${remoteFileName}">latest build</a></body></html>`

const upload = (params) => s3.upload(params, function (s3Err, data) {
        if (s3Err) throw s3Err
        console.log(`File uploaded successfully at ${data.Location}`)
    });

fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    upload({
        Bucket: bucketName,
        Key: remoteFileName,
        Body: data,
    });
    upload({
        Bucket: bucketName,
        Key: 'index.html',
        ContentType: 'text/html',
        Body: index,
    });
});
