import express from "express";
import {
  saveUser,
  saveUsers,
  getUsers,
  updateUser,
  deleteUser,
  createUser,
  login,
} from "../middleware/users.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.get("/getAll", verifyToken, getUsers);
router.post("/saveAll", verifyToken, saveUsers);
router.post("/saveUser", verifyToken, saveUser);
router.post("/updateUser", verifyToken, updateUser);
router.post("/login", login);

router.post("/deleteUser", verifyToken, deleteUser);
router.post("/createUser", verifyToken, createUser);

export default router;
