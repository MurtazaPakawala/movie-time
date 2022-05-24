import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";

function SingleContent({ poster, title, date, media_type, vote_average, des }) {
  return (
    <div className="container">
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <div className="text-container">
        <b>{title}</b>
        <p>{des}</p>
      </div>
    </div>
  );
}

export default SingleContent;
