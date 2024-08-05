const express = require("express");
const app = express();

//To access .env file we use dotEnv pkg
const dotEnv = require("dotenv").config();
const port = process.env.PORT || 5000;

// 1st api ❤
//app.use - isMiddleware and adding rotes config
app.use("/api/contacts",require("./routes/contact.Routes"));

app.listen(port, () => {
  console.log(`node running in ${port}`);
});
