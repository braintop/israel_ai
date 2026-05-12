import { Router } from "express";
import { getUsers, getUserById, createUser } from "../controllers/user.controller";

const router = Router();

router.get("/api/users", getUsers);
router.get("/api/users/:id", getUserById);
router.post("/api/users", createUser);

export default router;