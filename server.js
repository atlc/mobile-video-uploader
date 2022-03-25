const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./videos");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

const app = express();

app.use(express.static("public"));

app.post("/video", upload.single(`uploaded_video`), function (req, res) {
    console.log({ body: JSON.stringify(req.body), file: req.file });

    res.send("check server logs, idiot");
});

app.listen(3000);
