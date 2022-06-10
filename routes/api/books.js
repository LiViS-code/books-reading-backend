const express = require("express");
const { ctrlWrapper, validationBook, auth } = require("../../middlewares");
const { joiBookSchema, joiStatusBookSchema } = require("../../models");
const { books: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAllBooks));

router.get("/:bookId", auth, ctrlWrapper(ctrl.getBookById));

router.post(
  "/",
  auth,
  validationBook(joiBookSchema),
  ctrlWrapper(ctrl.addBook)
);

router.delete("/:bookId", auth, ctrlWrapper(ctrl.removeBook));

router.put(
  "/:bookId",
  auth,
  validationBook(joiBookSchema),
  ctrlWrapper(ctrl.updateBook)
);

router.patch(
  "/:bookId/favorite",
  auth,
  validationBook(joiStatusBookSchema, "missing field favorite"),
  ctrlWrapper(ctrl.updateStatusBook)
);

module.exports = router;