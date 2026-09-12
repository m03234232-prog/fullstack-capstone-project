const express = require("express");
const app = express();

const searchRoutes = require("./routes/searchRoutes");

app.use(express.json());

// Search API route
app.use("/api/search", searchRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
