import { Router } from "express";
import {
  getAllProducts,
  getInStockProducts,
  getProductById,
  createProduct,
  deleteProductById,
} from "../controllers/product.controller";

const router = Router();

router.get("/", getAllProducts);
/** חייב לפני /:id — אחרת "in-stock" ייחשב כ־id */
router.get("/in-stock", getInStockProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.delete("/:id", deleteProductById);

export default router;
