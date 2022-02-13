// importing packages
const express = require("express");
const admin = require("firebase-admin");
const bcrypt = require("bcrypt");
const path = require("path");
const bodyParser = require("body-parser");

// firebase admin setup

var serviceAccount = require("./adminserverconfig.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let db = admin.firestore();

// declare static path
let staticPath = path.join(__dirname, "public");

//intializing express.js
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middlewares
app.use(express.static(staticPath));

//routes
//home route
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "./index.html"));
});

app.listen(3000, () => {
  console.log("listening on port 3000.......");
});

//signup route
app.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    var a = await db.collection("users").doc(email).set(req.body);
    res.send(a);
  } catch {
    res.send({ msg: "error" });
  }
  // res.sendFile(path.join(staticPath, "./signup.html"));
});

// 404 route
app.get("/404", (req, res) => {
  res.sendFile(path.join(staticPath, "./404.html"));
});

app.use((req, res) => {
  res.redirect("/404");
});

app.use(express.json());

app.post("/signup", (req, res) => {
  let { name, email, password, number, tac, notification } = req.body;

  // form validations
  if (name.length < 3) {
    return res.json({ alert: "name must be 3 letters long" });
  } else if (!email.length) {
    return res.json({ alert: "enter your email" });
  } else if (password.length < 8) {
    return res.json({ alert: "password should be 8 letters long" });
  } else if (!number.length) {
    return res.json({ alert: "enter your phone number" });
  } else if (!Number(number) || number.length < 10) {
    return res.json({ alert: "invalid number, please enter valid one" });
  } else if (!tac) {
    return res.json({ alert: "you must agree to our terms and conditions" });
  }

  db.collection("users")
    .doc(email)
    .get()
    .then((user) => {
      if (user.exists) {
        return res.json({ alert: "The email has already been existed" });
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, salt) => {
            req.body.password = hash;
            db.collection("users")
              .doc(email)
              .set(req.body)
              .then((data) => {
                res.json({
                  name: req.body.name,
                  email: req.body.email,
                  seller: req.body.seller,
                });
              });
          });
        });
      }
    });
});
