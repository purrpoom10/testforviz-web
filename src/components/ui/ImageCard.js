import React from "react";

function ImageCard({ image }) {
  return (
    <div className="imagecard">
      <img src={image.download_url} alt="" />
    </div>
  );
}

export default ImageCard;
