const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const db = admin.firestore();

app.post('/form',(req,res) => {
    const newForm = {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        message: req.body.message
    }
    db.collection("formResponses")
    .add(newForm)
    .then((doc) =>{
        res.json(newForm);
    })
    .catch((err) => {
        res.status(500).json({error: "something went wrong"});
        console.error(err);
    })
});

exports.api = functions.https.onRequest(app);