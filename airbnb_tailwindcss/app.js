const express = require("express");

//core module
const path = require("path");
//Local Module
const userRouter = require("./routes/userRouters");

const hostRouter = require("./routes/hostRouters");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  console.log("First middleWare");
  next();
});

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
