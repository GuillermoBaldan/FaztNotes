const router = require("express").Router();

router.get("/users/signin", (req, res) => {
  res.render("users/signin");
});

router.get("/users/signup", (req, res) => {
  res.render("users/signup");
});

router.post("/users/signup", (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  const errors = [];
  if (!name || !email || !password || !confirm_password) {
    errors.push({ text: "Please fill in all the fields" });
  }
  if (password != confirm_password) {
    errors.push({ text: "Passwords do not match" });
  }
  if (password.length < 6) {
    errors.push({ text: "Password must be at least 6 characters" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  } else {
    res.send("Success");
  }
});

module.exports = router;
