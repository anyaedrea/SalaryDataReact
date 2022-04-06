import React from "react";
import Icon from "../icon/icon";
import "./card.css";

function Card({ title, iconName, content, classes }) {
  const classNames = `card ${classes}`;
  return (
    <div className={classNames}>
      <div className="card-body">
        <div className="card-header mb-3">
          <div className="card-icon">
            <Icon
              iconName={iconName}
              bgColor={"rgba(1, 205, 169, 0.3)"}
              symbolColor={"#332d4f"}
            />
          </div>
          <h3 className="card-title">{title}</h3>
        </div>
        {content}
      </div>
    </div>
  );
}

export default Card;
