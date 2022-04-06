import React, { Component } from "react";
import "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import "./chartCard.css";
import Icon from "../icon/icon";
import Card from "../card/card";

function ChartCard({ title, iconName, labels, dataArray, classes }) {
  const backgroundColors = ["#01cda9", "#332d4f", "#e54461", "#b6b544"];
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: dataArray,
        backgroundColor: backgroundColors,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "left",
        align: "start",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  return (
    <Card
      title={title}
      iconName={iconName}
      content={
        <Doughnut data={chartData} options={options} className="chart-canvas" />
      }
      classes={classes}
    />
  );
}

export default ChartCard;
