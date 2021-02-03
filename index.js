const express = require("express");

const app = express();

app.use(() => {
  console.log("hello server...");
  console.log("hello lagi server...");
  console.log("hello lagi lagi  server...");
});

app.listen(4000);
