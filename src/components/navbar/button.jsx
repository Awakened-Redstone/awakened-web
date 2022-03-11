import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <>
      <Link reloadDocument
        to={props.link}
        className={props.icon ? "hasIcon" : ""}
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          userSelect: "none",
          WebkitUserSelect: "none",
          WebkitTouchCallout: "none",
          textTransform: "uppercase",
          transition: "inherit",
          pointerEvents: "none",
          color: "inherit",
          textDecoration: "none"
        }}
        noicon={props.noIcon || "false"}
        target={props.newTab ? "_blank" : ""}
        rel={props.newTab ? "noopener noreferrer" : ""}
      >
        {props.icon ? (
          <div
            style={{
              backgroundImage: `url(${props.icon})`,
              paddingRight: props.padRight || "invalid"
            }}
          ></div>
        ) : (
          ""
        )}
        {props.text}
      </Link>
    </>
  );
}
