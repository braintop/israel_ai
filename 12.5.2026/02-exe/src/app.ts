import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes";
import { notFoundHandler, errorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    ok: true,
    message: "שרת המוצרים פעיל — Express + TypeScript",
    hint: "נסו GET /api/products",
  });
});

app.use("/api/products", productRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
