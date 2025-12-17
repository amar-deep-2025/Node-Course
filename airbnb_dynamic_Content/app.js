const express = require("express");
const path = require("path");

const userRouter = require("./routes/userRouters");
const { hostRouter } = require("./routes/hostRouters");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));

app.use(userRouter);
app.use(hostRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
