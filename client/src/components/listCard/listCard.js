import React from "react";
import Card from "../card/card";
import "./listCard.css";

function ListCard({ title, iconName, list }) {
  let itemList = list.map((el) => {
    return (
      <div className="row">
        <span className="label column">{el.label}</span>
        <span className="value column">{el.value}</span>
      </div>
    );
  });
  return (
    <Card
      title={title}
      iconName={iconName}
      content={<div className="list">{itemList}</div>}
    />
  );
}

export default ListCard;
