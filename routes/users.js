const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
  res.send("Users list");
});
router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Test" });
});

const users = [{ firstName: "Kyle" }, { firstName: "Casper" }];

router.post("/", (req, res) => {
  const isValid = true;
  if (!req.body.firstName) {
    return next(new Error("First name required"));
  }
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    res.render("users/new", { firstName: req.body.firstName });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    res.json(req.user);
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`);
  });

router.param("id", (req, res, next, id) => {
  const user = users[id];
  if (!user) {
    return res.status(404).send("User not found");
  }
  req.user = user;
  next();
});

function logger(req, res, next) {
  const start = Date.now();
  res.on("finish", () => {
    console.log(
      `${req.method} ${req.originalUrl} ${res.statusCode} - ${Date.now() - start}ms`,
    );
  });
  next();
}

module.exports = router;
