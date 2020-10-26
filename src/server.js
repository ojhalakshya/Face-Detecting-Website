let express = require("express");
let app = express();

app.get("/", (req, res) =>
{
  res.send("Root is working");
});

app.listen(3000, () =>
{
  console.log("App is running on port 3000");
});

/**
 * / --> res = this is working
 * /signin --> POST = success/fail
 * /register --> POST = new user object
 * /profile/:userId --> GET = user information
 * /image --> PUT --> updated user object
 */