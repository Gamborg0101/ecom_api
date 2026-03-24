const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //Middleware that accepts info from forms / body
app.use(express.json()); //Middleware that acceps JSON from forms / body

app.set("view engine", "ejs");

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(3000);
