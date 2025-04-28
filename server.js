const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app);

// const socketIo = require("socket.io");
const io = require("socket.io")(server);

const indexRoute = require("./Routes/index");

app.use(indexRoute);

app.set("view engine", "ejs");
app.set("views", "EJS");

app.use(express.static(path.join(__dirname, "EJS")));

app.get('/contact', (req, res, next) => {
  res.render("contact", { docTitle: 'Contact Page', success: false });
});

app.use("/contact", (req, res) => {

  const { name, email } = req.body;
  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "#", 
      pass: "#",
    },
  });

  // Email content
  let mailOptions = {
    from: "#",
    to: email,
    subject: "Thank You for Contacting ThreatHunt",
    text: "Dear " + name +"\n\nThanks for reaching out to ThreatHunt.\n\nWe've got your message and will get back to you soon. Stay tuned! \n\nBest Regards, \n\nThreat Hunt Dashboard Team",
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred while sending email:", error);
      res.status(500).send("An error occurred while sending the email");
    } else {
      console.log("Email sent successfully:", info.response);
      res.render("contact", { docTitle: 'Contact Page', success: true });
    }
  });
});

// Socket.io connection handling
io.on("connection", (socket) => {
  
  console.log("A user connected");

  // Handle new messages
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});


// app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "img")));
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "js")));
// app.use(express.static(path.join(__dirname, "scss")));
app.use(express.static(path.join(__dirname, "lib/chart")));
app.use(express.static(path.join(__dirname, "lib/easing")));
app.use(express.static(path.join(__dirname, "lib/owlcarousel")));
app.use(express.static(path.join(__dirname, "lib/owlcarousel/assets")));
app.use(express.static(path.join(__dirname, "lib/tempusdominus/css")));
app.use(express.static(path.join(__dirname, "lib/tempusdominus/js")));
app.use(express.static(path.join(__dirname, "lib/waypoints")));
app.use(express.static(path.join(__dirname, "assets/js")));



app.use((req, res, next) => {

  res.status(404).render("404", { docTitle: "Error"});

});
server.listen(5000);
