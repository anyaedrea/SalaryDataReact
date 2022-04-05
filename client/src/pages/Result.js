import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

function Result() {
  const [data, setData] = useState({
    title: "",
    location: "",
    salary: 0,
    malePercent: 0,
    femalePercent: 0,
    matLeave: 0,
  });
  const { job, location } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `/jobs?title=${job.toLocaleLowerCase()}&location=${location.toLowerCase()}`
      );
      const jsonData = await res.json();
      // console.log(jsonData.jobs[0]);
      setData(jsonData.jobs[0]);
      // console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>
        {data.title} - {data.location}
      </h1>
      <section>
        <h2>Average Salary: </h2>
        <p>{data.salary}</p>
      </section>
      <section>
        <h2>Gender Distribution: </h2>
        <p>Male: {data.malePercent}%</p>
        <p>Female: {data.femalePercent}%</p>
      </section>
      <section>
        <h2>Average Maternal Leave Duration</h2>
        <p>{data.matLeave} weeks</p>
      </section>
    </div>
  );
}

export default Result;
