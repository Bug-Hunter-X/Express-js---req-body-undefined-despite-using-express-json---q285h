const express = require('express');
const app = express();
app.use(express.json()); // Ensure this middleware is placed BEFORE route handlers
app.post('/data', (req, res) => {
  console.log(req.body); // req.body should now be correctly populated
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));