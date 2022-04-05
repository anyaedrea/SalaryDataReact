import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

function Result() {
  let [data, setData] = useState({});
  let { job, location } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `/jobs?title=${job.toLocaleLowerCase()}&location=${location.toLowerCase()}`
      );
      const jsonData = await res.json();
      setData(jsonData.jobs[0]);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>
        {data.title.toUpperCase()} - {data.location.toUpperCase()}
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
