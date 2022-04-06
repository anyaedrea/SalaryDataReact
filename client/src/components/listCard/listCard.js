import React from "react";
import Card from "../card/card";
import "./listCard.css";

function ListCard({ title, iconName, list }) {
  let itemList = list.map((el) => {
    return (
      <div className="listRow">
        <span className="label listColumn">{el.label}</span>
        <span className="value listColumn">{el.value}</span>
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
