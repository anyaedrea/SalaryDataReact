const Job = require("../models/Job");

const getJobs = async (req, res, next) => {
  const jobs = await Job.find(req.query);
  console.log(jobs);
  res.json({ jobs });
};

module.exports = { getJobs };
