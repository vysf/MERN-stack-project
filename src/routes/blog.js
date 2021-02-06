const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const blogController = require("../controllers/blog");

// [POST] : /v1/blog/post
// membuat postingan blog mulai dari gambar, judul, dan content blog
router.post(
  "/post",
  [
    body("title")
      .isLength({ min: 5 })
      .withMessage("Title must be at least 5 characters long"),
    body("body")
      .isLength({ min: 5 })
      .withMessage("Body must be at least 5 characters long"),
  ],
  blogController.createBlogPost
);

// [GET] : /v1/blog/posts
// menampilkan semua content blog yang sudah dibuat
// ? adalah query parameter,
// 'page' adalah nama querynya yang memulai mau dari page berapa data di tampilkan,
// & adalah penambahan nama query
// 'perPage' untuk menampilkan berapa banyak data setiap kali membuka page
// penulisan query parameter adalah [endpoint]?[NAMA QUERY 1]=[VALUE 1]&[NAMA QUERY ...]=[VALUE ...]
router.get("/posts", blogController.getAllBlogPost);

// [GET] : /v1/blog/post/:postId
// menampilkan salah satu content blog yang sudah dibuat
router.get("/post/:postId", blogController.getBlogPostById);

// [PUT] : /v1/blog/post/:postId
// memperbaharui blog yang sudah dibuat
router.put(
  "/post/:postId",
  [
    body("title")
      .isLength({ min: 5 })
      .withMessage("Title must be at least 5 characters long"),
    body("body")
      .isLength({ min: 5 })
      .withMessage("Body must be at least 5 characters long"),
  ],
  blogController.updateBlogPost
);

// [DELETE] : /v1/blog/post/:postId
// menghapus salah satu content blog yang sudah dibuat
router.delete("/post/:postId", blogController.deleteBlogPost);

module.exports = router;
