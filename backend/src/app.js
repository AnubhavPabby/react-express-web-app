const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../", 'build')));

console.log("process env: ", process.env);
console.log("PORT: ", process.env.PORT);
console.log("DB_USER: ", process.env.DB_USER);
console.log("DB_PASSWORD: ", process.env.DB_PASSWORD);
console.log("DB_BASE_URL: ", process.env.DB_BASE_URL);
console.log("DB_PROTOCOL: ", process.env.DB_PROTOCOL);
console.log("DB_TYPE: ", process.env.DB_TYPE);
console.log("DB_DOMAIN: ", process.env.DB_DOMAIN);
console.log("DB_NAME: ", process.env.DB_NAME);
console.log("DB_URL: ", process.env.DB_URL);

app.get('/api/v1', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1/user', (req, res) => {
  res.send('Getting all users');
})

app.get('/api/v1/user/:userId', (req, res) => {
  res.send(`Getting user from userId ${req.params.userId}`);
})

app.post('/api/v1/user', (req, res) => {
  res.send('Create new user')
})

app.put('/api/v1/user/:userId', (req, res) => {
  res.send(`Edit user details by userId ${req.params.userId}`);
})

app.delete('/api/v1/user/:userId', (req, res) => {
  res.send(`Delete user by userId ${req.params.userId}`);
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})