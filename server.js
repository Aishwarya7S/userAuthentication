const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 7000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello Webpage");
});


const db = 'mongodb+srv://aishu:mongoDBLenova@tasks.o1yig.mongodb.net/?retryWrites=true&w=majority&appName=tasks'
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    });

app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});
