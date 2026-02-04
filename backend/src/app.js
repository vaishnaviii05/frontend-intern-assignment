const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // 🔴 THIS LINE IS CRITICAL

app.use("/api/v1/auth", require("./routes/auth.routes"));
app.use("/api/v1", require("./routes/user.routes"));
app.use("/api/v1/tasks", require("./routes/task.routes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
