const express = require('express');
const app = express();
//const path = require('path');
const multer = require('multer');

app.use(express.json());

const upload = multer({ dest: 'uploads/' });
app.use(upload.single('file'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
