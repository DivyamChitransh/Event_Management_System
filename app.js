import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import userRoutes from "./Routes/user.routes.js";
import eventRoutes from "./Routes/events.routes.js";
import bookingRoutes from "./Routes/Booking.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

let db;

const connectDB = async () => {
  try {
    db = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });

    console.log("Connected to MySQL database");
  } catch (error) {
    console.error("Failed to connect to MySQL database", error.message);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("Welcome to the Event Management System API");
});

const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);

const startServer = async () => {
  await connectDB();

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    });
};

startServer();

export { db };