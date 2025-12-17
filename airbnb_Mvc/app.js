const express = require("express");
const path = require("path");

const storeRouter = require("./routes/storeRouters");
const hostRouter = require("./routes/hostRouters");

const rootDir = require("./utils/filePath");

const errorsController = require("./controllers/errors");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/node_modules", express.static(path.join(rootDir, "node_modules")));

app.use(express.urlencoded({ extended: false }));

app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(errorsController.pageNotFound);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
