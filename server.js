const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Node.js CI/CD Demo! 🚀</h1><p>Pipeline ran successfully!</p>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
