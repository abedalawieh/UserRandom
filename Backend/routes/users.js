import express from "express";
import {
  saveUser,
  saveUsers,
  getUsers,
  updateUser,
  deleteUser,
  createUser,
} from "../middleware/users.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.get("/getAll", verifyToken, getUsers);
router.post("/saveAll", verifyToken, saveUsers);
router.post("/saveUser", verifyToken, saveUser);
router.post("/updateUser", verifyToken, updateUser); // Changed to PUT for updating/

router.post("/deleteUser", verifyToken, deleteUser); // Changed to DELETE for deletion
router.post("/createUser", verifyToken, createUser); // Changed to DELETE for deletion

export default router;
// getUsers, saveUsers, saveUser, updateUser, deleteUser
