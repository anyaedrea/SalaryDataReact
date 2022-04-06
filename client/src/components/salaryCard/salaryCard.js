import React from "react";
import Card from "../card/card";
import "./salaryCard.css";

function SalaryCard({ salary }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return (
    <Card
      title={"Average Salary"}
      iconName={"money-bill"}
      content={
        <div>
          <div className="salary-info mb-2">
            <span className="salary-amount">{formatter.format(salary)}</span>
            <span className="salary-period">/year</span>
          </div>
          <div className="card-footer text-muted">
            Range: {formatter.format(salary - 10000)} -
            {formatter.format(salary + 10000)}
          </div>
        </div>
      }
    ></Card>
  );
}

export default SalaryCard;
