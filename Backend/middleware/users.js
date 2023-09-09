import { json } from "express";
import verifyToken from "./auth.js";
import { db } from "../db.js";
export const getUsers = (req, res) => {
  try {
    let { id, low, high } = req.query;
    let whereClause = ""; // Initialize an empty WHERE clause

    if (low && high) {
      // Both low and high provided, use BETWEEN
      whereClause = ` AND dob BETWEEN '${low}' AND '${high}'`;
    } else if (low) {
      // Only low provided
      whereClause = ` AND dob > '${low}'`;
    } else if (high) {
      // Only high provided
      whereClause = ` AND dob < '${high}'`;
    }

    // Construct the SQL query with the WHERE clause
    const getUsers = `SELECT * FROM usersdata WHERE userid = ${id} ${whereClause}`;

    db.query(getUsers, (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          description: "Server Error",
        });
      } else {
        res.status(200).json({
          success: true,
          data: result,
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      description: "Server Error",
    });
  }
};

export const saveUsers = (req, res) => {
  try {
    const { users, userid } = req.body;

    // Assuming you send an array of user objects in the request body

    const query =
      "INSERT INTO usersdata (userid, uuid, picture, name, email, location, phone, nationality, dob) VALUES ?";

    const values = users.map((user) => [
      userid, // Add the userid to each row
      user.uuid,
      user.picture,
      user.name,
      user.email,
      user.location,
      user.phone,
      user.nationality,
      user.dob,
    ]);

    db.query(query, [values], (err, result) => {
      if (err) {
        console.error("Error saving users:", err);
        res.status(500).json({ error: "Error saving users" });
      } else {
        console.log("Users saved successfully");
        res.status(200).json({ message: "Users saved successfully" });
      }
    });
  } catch (e) {
    console.log(err);
    res.status(500).json({
      success: false,
      description: "Server Error",
    });
  }
};

export const saveUser = async (req, res) => {
  try {
    const {
      userid,
      data: { uuid, picture, name, location, email, phone, nationality, dob },
    } = req.body;

    db.query(
      "INSERT INTO usersdata (userid, uuid, picture, name, email, location, phone, nationality, dob) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [userid, uuid, picture, name, location, email, phone, nationality, dob],
      (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ Message: "Server Side Error" });
        }

        return res.status(200).json({ Status: "Successs" });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      description: "Server Error",
    });
  }
};
export const createUser = async (req, res) => {
  try {
    const {
      userid,
      uuid,
      picture,
      name,
      location,
      email,
      phone,
      nationality,
      dob,
    } = req.body;

    db.query(
      "INSERT INTO usersdata (userid, uuid, picture, name, email, location, phone, nationality, dob) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [userid, uuid, picture, name, location, email, phone, nationality, dob],
      (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ Message: "Server Side Error" });
        }

        return res.status(200).json({ Status: "Successs" });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      description: "Server Error",
    });
  }
};
export const updateUser = (req, res) => {
  try {
    const {
      data: { name, location, email, phone, nationality, dob, uuid },
    } = req.body;

    db.query(
      "UPDATE usersdata SET name = ? ,location = ? ,email = ? ,phone = ? ,nationality = ? ,dob = ?  WHERE uuid = ?",
      [name, location, email, phone, nationality, dob, uuid],
      (error, result) => {
        if (error) {
          console.log(error);
          res.status(500).json({
            success: false,
            description: "Server Error",
          });
        } else {
          res.status(200).json({
            success: true,
            data: result,
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      description: "Server Error",
    });
  }
};

export const deleteUser = (req, res) => {
  try {
    const {
      userid,
      data: { uuid },
    } = req.body;

    const deleteQuery = "DELETE FROM usersdata WHERE userid = ? AND uuid = ?";

    db.query(deleteQuery, [userid, uuid], (error) => {
      if (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({ Message: "Server Side Error" });
      }

      // Send a success response here if the deletion was successful
      res.status(200).json({ Message: "User deleted successfully" });
    });
  } catch (e) {
    console.log(err);
    res.status(500).json({
      success: false,
      description: "Server Error",
    });
  }
};
