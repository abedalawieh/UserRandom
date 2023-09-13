import express from "express";
import router from "./routes/users.js";
import dotenv from "dotenv";
import corsConfig from "./middleware/corsConfig.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(corsConfig);
app.use("/api", router);

app.listen(8800, () => {
  console.log("Running on port 8800");
});
