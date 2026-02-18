require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ===== Import Routes =====
const itemRoutes = require("./routes/items");
const authRoutes = require("./routes/auth");

// ===== Middlewares =====
app.use(cors());
app.use(express.json());

// ===== MongoDB Connection =====
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch((err) => console.log("MongoDB Error ❌", err));

// ===== Routes =====
app.use("/api/items", itemRoutes);
app.use("/api/auth", authRoutes);

// ===== Test Route =====
app.get("/", (req, res) => {
    res.send("ShareHub Backend Running 🚀");
});

// ===== Start Server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});