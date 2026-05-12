import type { Request, Response } from "express";
import type { Product } from "../models/product.model";
import { products } from "../models/product.model";

/** params מגיעים כמחרוזות — נמיר ל־number ונוודא תקינות */
function parseProductId(raw: string | undefined): { ok: true; id: number } | { ok: false } {
  if (raw === undefined || raw.trim() === "") {
    return { ok: false };
  }
  const id = Number(raw);
  if (!Number.isFinite(id) || !Number.isInteger(id) || id <= 0) {
    return { ok: false };
  }
  return { ok: true, id };
}

export function getAllProducts(_req: Request, res: Response) {
  res.json(products);
}

/** בונוס: רק מוצרים במלאי */
export function getInStockProducts(_req: Request, res: Response) {
  res.json(products.filter((p) => p.inStock));
}

export function getProductById(req: Request, res: Response) {
  const parsed = parseProductId(req.params.id);
  if (!parsed.ok) {
    return res.status(400).json({ error: "מזהה מוצר לא תקין" });
  }
  const product = products.find((p) => p.id === parsed.id);
  if (!product) {
    return res.status(404).json({ error: "מוצר לא נמצא" });
  }
  res.json(product);
}

export function createProduct(req: Request, res: Response) {
  const body = req.body as Partial<Product> & Record<string, unknown>;

  const name =
    typeof body.name === "string" ? body.name.trim() : String(body.name ?? "").trim();
  if (!name) {
    return res.status(400).json({ error: "חסר שם מוצר" });
  }

  const price = typeof body.price === "number" ? body.price : Number(body.price);
  if (!Number.isFinite(price) || price <= 0) {
    return res.status(400).json({ error: "מחיר חייב להיות מספר גדול מ־0" });
  }

  const category =
    typeof body.category === "string" && body.category.trim() !== ""
      ? body.category.trim()
      : "כללי";

  let inStock = true;
  if (body.inStock !== undefined && body.inStock !== null) {
    if (typeof body.inStock === "boolean") {
      inStock = body.inStock;
    } else {
      const s = String(body.inStock).toLowerCase();
      if (s === "false" || s === "0")
         inStock = false;
      else if (s === "true" || s === "1") inStock = true;
    }
  }

  const nextId = products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1;
  const product: Product = {
    id: nextId,
    name,
    price,
    category,
    inStock,
  };
  products.push(product);
  res.status(201).json(product);
}

export function deleteProductById(req: Request, res: Response) {
  const parsed = parseProductId(req.params.id);
  if (!parsed.ok) {
    return res.status(400).json({ error: "מזהה מוצר לא תקין" });
  }
  const index = products.findIndex((p) => p.id === parsed.id);
  if (index === -1) {
    return res.status(404).json({ error: "מוצר לא נמצא" });
  }
  const [removed] = products.splice(index, 1);
  res.json({ message: "המוצר נמחק", product: removed });
}
