const express = require("express");
const orderRourtes = require("./routes/order.routes");

const app = express();

app.use("/api/v1/orders", orderRourtes);

// NOt found route
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
