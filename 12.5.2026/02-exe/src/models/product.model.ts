export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

/** מערך בזיכרון (ללא DB) — לצורך התרגיל */
export const products: Product[] = [
  { id: 1, name: "חלב 3%", price: 6.9, category: "מזון", inStock: true },
  { id: 2, name: "לחם אחיד", price: 8.5, category: "מזון", inStock: true },
  { id: 3, name: "עט כחול", price: 3.0, category: "כתיבה", inStock: false },
  { id: 4, name: "מחשב נייד", price: 3499, category: "אלקטרוניקה", inStock: true },
  { id: 5, name: "כיסא משרדי", price: 450, category: "ריהוט", inStock: true },
  { id: 6, name: "מקלדת מכנית", price: 299, category: "אלקטרוניקה", inStock: false },
];
