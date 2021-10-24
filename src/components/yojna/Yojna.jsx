import React from "react";
import "./yojna.css";

export default function Yojna(data) {
  return (
    <div className="yojna">
      <img src={data.thumbnail} alt="" className="yojna_thumbnail" />
      <div className="yojna_title">{data.title}</div>
      <div className="yojna_desc">{data.desc}</div>
      <button>Read More</button>
    </div>
  );
}
