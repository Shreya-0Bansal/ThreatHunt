const express = require("express");
const router = express.Router();
const collection = require("../model/user");
const bcrypt = require('bcrypt');

const app= express();
// const bodyParser = require('body-parser');
// router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res, next) => {
    res.render("captcha");
});

router.get('/index', (req, res, next) => {
    res.render("index", { docTitle: 'ThreatHunt' });
});

router.get('/home', (req, res, next) => {
    res.render("home", { docTitle: 'Home Page' });
});

router.get('/chat', (req, res, next) => {
    res.render("chat", { docTitle: 'Chat Page' });
});

router.get('/note', (req, res, next) => {
    res.render("note", { docTitle: 'Notes Page' });
});

router.get('/signin', (req, res) => {
    res.render('signin', { docTitle: 'Sign In', message: '' });
});

router.get('/signup', (req, res, next) => {
    res.render('signup', { docTitle: 'Sign Up', message: '' });
});
router.post("/signup", async (req, res) => {
    const data = {
    name:req.body.name,
    username:req.body.username,
    password: req.body.password
}

// Check if the username already exists in the database
const existingUser = await collection.findOne({ username: data.username });

if (existingUser) {
    return res.render("signin", { docTitle: "Signup Page", message: "User already exists. Please choose a different username." });
} else {
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    data.password = hashedPassword;

    const userdata = await collection.insertMany(data);
    console.log(userdata);
}
res.render("signin",{docTitle:"Signin Page"});

});

router.post("/signin", async (req, res) => {
    try {
        const user = await collection.findOne({ username: req.body.username });

        if (!user) {
            return res.render("signin", { docTitle: "Signin Page", message: "User not found" });
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordMatch) {
            return res.render("signin", { docTitle: "Signin Page", message: "Wrong password" });
        }
        uname = user.name;
        res.render("chat", { docTitle: 'Chat Page', use:uname});
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});


module.exports = router;