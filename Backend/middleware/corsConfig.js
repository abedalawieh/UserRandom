import cors from "cors";

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true,
};

export default cors(corsOptions);
