const express = require("express");
const app = express();
const AuthTime = (req, res, next) => {
  let today = new Date();
  let day = today.getDay();
  let Hours = today.getHours();

  console.log(day);
  console.log(Hours);

  if (day >= 1 && day <= 5 && Hours >= 9 && Hours <= 16 )   {
    next();
  } else {
    res.send(
      "<center> <h1> <br><br><br><br> Sorry, working hours are Monday to Friday, from 9 to 17 </h1> </center>"
    );
  }
};

app.use(AuthTime);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Pages/Home_Page.html");
});
app.get("/Contact_Us", (req, res) => {
  res.sendFile(__dirname + "/Pages/Contact_Us.html");
});
app.get("/Our_Services", (req, res) => {
  res.sendFile(__dirname + "/Pages/Our_Services.html");
});
app.get("/css/style.css", (req, res) => {
  res.sendFile(__dirname + "/css/style.css");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/Pages/Page_Not_Found.html");
  // res.redirect('/')
});
app.listen(3000, (err) =>
  err ? console.log(err) : console.log("Server is running on port 3000")
);
