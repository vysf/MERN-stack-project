// router.HTTPmethods("url atau endpoint", controller function)
//
//
// router.use("/products", (req, res, next) => {
//   res.json({
//     name: "Yusuf Umar Al Hakim",
//     email: "yusufumar@student.untan.ac.id",
//   });
//   next();
// });

const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth");

// CREATE -> method POST
router.post("/register", authController.register);

// READ -> method GET
router.get("/login");

module.exports = router;
