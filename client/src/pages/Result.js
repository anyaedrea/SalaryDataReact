import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import ChartCard from "../components/chartCard/chartCard";
import SalaryCard from "../components/salaryCard/salaryCard";
import ListCard from "../components/listCard/listCard";
import "../variables.css";
import "./result.css";

function Result() {
  const [data, setData] = useState({
    title: "title",
    location: "location",
    salary: 0,
    malePercent: 50,
    femalePercent: 50,
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

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const list = [
    { label: "Maternity Leave", value: `${data.matLeave} weeks` },
    { label: "Paternity Leave", value: "1.5 weeks" },
    { label: "Time Off", value: "30 days" },
    { label: "Healthcare", value: formatter.format(7423) },
    { label: "Pension", value: formatter.format(10284) },
  ];

  return (
    <div className="result-container">
      <div className="result-header">
        <div className="result-titles">
          <h1 className="result-title">{data.title}</h1>
          <p className="result-subtitle text-muted">{data.location}</p>
        </div>
        <div>
          <button className="btn btn-primary">Download Report</button>
        </div>
      </div>
      <section>
        <SalaryCard salary={data.salary} />
      </section>
      <section>
        <ChartCard
          title={"Gender Distribution"}
          labels={[
            `Male ${data.malePercent}%`,
            `Female ${data.femalePercent}%`,
          ]}
          dataArray={[data.malePercent, data.femalePercent]}
          iconName="user"
        />
      </section>
      <section>
        <ListCard title={"Benefits"} iconName={"gem"} list={list}></ListCard>
      </section>
    </div>
  );
}

export default Result;
