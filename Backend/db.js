import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "userrandom",
});

try {
  db.connect((error) => {
    if (error) {
      console.log(error.message);
    }
    console.log("Database connected successfully");
  });
} catch (error) {
  console.error("Error connecting to the database:", error.message);
}

export { db };
