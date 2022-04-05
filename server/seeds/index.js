const mongoose = require("mongoose");
const jobTitles = require("./jobTitles");
const Job = require("../models/Job");
const types = ["Internship", "Full-time", "Part-time", "Contract", "Freelance"];
const locations = ["Germany", "USA", "Canada", "Bangladesh", "Argentina"];

mongoose
  .connect("mongodb://localhost:27017/salaryData")
  .then(() => {
    console.log("Connection open!");
  })
  .catch((error) => {
    console.log("ERROR!", error);
  });

const seedDb = async () => {
  await Job.deleteMany({});
  for (let title of jobTitles) {
    for (let location of locations) {
      const malePercent = Math.floor(Math.random() * 100);
      const job = new Job({
        title: `${title.toLowerCase()}`,
        location: `${location.toLowerCase()}`,
        salary: Math.floor(Math.random() * (100000 - 30000) + 30000),
        malePercent: malePercent,
        femalePercent: 100 - malePercent,
        matLeave: Math.floor(Math.random() * (13 - 5) + 5),
      });
      await job.save();
    }
  }
  console.log("Filled db with fake data");
};

seedDb();
