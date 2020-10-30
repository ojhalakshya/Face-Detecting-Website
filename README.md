# Face-Detecting-Website

## Dependencies
1. NPM
   * `npm init -y`
2. Nodemon
   * `npm install nodemon`
3. Express
   * `npm install express`
4. Body-Parser
   * `npm install body-parser`
5. Bcrypt.js
   * `npm install bcrypt-nodejs`

Now add the following or modify in the package.json file.
```json
  "scripts": {
    "start": "nodemon server.js"
  }
```

## Basic Request Pages
<pre>
1. "/"                -> Root
2. "/signin"          -> User Sign in
3. "/register"        -> Register a new User
4. "/profile/:userId" -> Get user profile
5. "/image"           -> Update entries
</pre>