import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faMoneyBill1,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function Icon({ iconName, bgColor, symbolColor, className }) {
  const map = new Map();
  map.set("money-bill", faMoneyBill1);
  map.set("gem", faGem);
  map.set("user", faUser);
  return (
    <span className="fa-stack">
      <FontAwesomeIcon
        icon={faCircle}
        color={bgColor}
        className="fa-stack-2x"
      />
      <FontAwesomeIcon
        icon={map.get(iconName)}
        color={symbolColor}
        className="fa-stack-1x"
      />
    </span>
  );
}

export default Icon;
