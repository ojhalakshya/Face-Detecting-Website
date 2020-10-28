let express = require("express");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());

// Database
let database = 
{
  users:
  [
    {
      id: "123",
      name: "John",
      email: "john@gmail.com",
      password: "cookies",
      entries: 0,
      joined: new Date()
    },
    {
      id: "124",
      name: "Sally",
      email: "sally@gmail.com",
      password: "bananas",
      entries: 0,
      joined: new Date()
    }
  ]
};



app.get("/", (req, res) =>
{
  res.send(database.users);
});

// sign in
app.post("/signin", (req, res) =>
{
  if(req.body.email === database.users[0].email &&
      req.body.password === database.users[0].password)
  {
    res.json("Success");
  }
  else
  res.status(400).json("Error logging in");
});

// Register
app.post("/register", (req, res) =>
{
  let {email, name, password} = req.body;
  database.users.push(
  {
    id: "125",
    name: name,
    email: email,
    password: password,
    enteries: 0,
    joined: new Date()
  });
  res.json(database.users[database.users.length - 1]);
});

// profile
app.get("/profile/:id", (req, res) =>
{
  let { id } = req.params;
  let found = false;
  database.users.forEach(user =>
    {
      if(user.id === id)
      {
        found = true;
        return res.json(user);
      }
    });
  if(!found)
  res.status(400).json("No such user");
});

// Image
app.put("/image", (req, res) =>
{
  let {id} = req.body;
  let found = false;
  database.users.forEach(user =>
    {
      if(user.id === id)
      {
        found = true;
        user.entries++;
        return res.json(user.entries);
      }
    });
  if(!found)
  res.status(400).json("Not Found");
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