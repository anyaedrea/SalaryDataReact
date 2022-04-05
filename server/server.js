const express = require("express");
const jobRoutes = require("./routes/jobs");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/salaryData")
  .then(() => {
    console.log("Connection open!");
  })
  .catch((error) => {
    console.log("ERROR!", error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/jobs", jobRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
