const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //Middleware that accepts info from forms / body
app.use(express.json()); //Middleware that acceps JSON from forms / body

app.set("view engine", "ejs");

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);
