const express = require("express");
const { ctrlWrapper, schemasValidation, auth } = require("../../middlewares");
const {
  joiBookSchema,
  joiFavoriteBookSchema,
  joiWishBookSchema,
  joiRatingBookSchema,
} = require("../../models");
const { books: ctrl } = require("../../controllers");
const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAllBooks));

router.get("/:bookId", auth, ctrlWrapper(ctrl.getBookById));

router.post(
  "/",
  auth,
  schemasValidation(joiBookSchema),
  ctrlWrapper(ctrl.addBook)
);

router.delete("/:bookId", auth, ctrlWrapper(ctrl.removeBook));

router.put(
  "/:bookId",
  auth,
  schemasValidation(joiBookSchema),
  ctrlWrapper(ctrl.updateBook)
);

router.patch(
  "/:bookId/rating",
  auth,
  schemasValidation(joiRatingBookSchema),
  ctrlWrapper(ctrl.updateStatusBook)
);

router.patch(
  "/:bookId/favorite",
  auth,
  schemasValidation(joiFavoriteBookSchema),
  ctrlWrapper(ctrl.updateStatusBook)
);

router.patch(
  "/:bookId/wish",
  auth,
  schemasValidation(joiWishBookSchema),
  ctrlWrapper(ctrl.updateStatusBook)
);

module.exports = router;
