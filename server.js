require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* ================= CORS ================= */

app.use(cors({
  origin: [
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "https://sharehub-frontend.onrender.com"
  ],
  credentials: true
}));

app.use(express.json());

/* ================= MongoDB ================= */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("MongoDB Error ❌", err));

/* ================= Routes ================= */

const itemRoutes = require("./routes/items");
const authRoutes = require("./routes/auth");

app.use("/api/items", itemRoutes);
app.use("/api/auth", authRoutes);

/* ================= Test Route ================= */

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

/* ================= Start Server ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});