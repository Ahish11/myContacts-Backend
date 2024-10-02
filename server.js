const express = require("express");
const errorhandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
//To access .env file we use dotEnv pkg
//* place dotEnv always at top
const dotEnv = require("dotenv").config();

connectDb();
const app = express();
const port = process.env.PORT || 5000;

// 1st api ❤
//!app.use - isMiddleware and adding rotes config
app.use(express.json()); //to pass (body) client to server
app.use("/api/contacts", require("./routes/contact.Routes"));
app.use("/api/users", require("./routes/user.Routes"));
app.use(errorhandler);

app.listen(port, () => {
  console.log(`node running in ${port}`);
});
