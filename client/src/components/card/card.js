import React from "react";
import Icon from "../icon/icon";
import "bootstrap/dist/css/bootstrap.css";
import "./card.css";

function Card({ title, iconName, content }) {
  return (
    <div className="chartCard card mb-3">
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
