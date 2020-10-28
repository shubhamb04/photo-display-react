import React, { useState, useContext } from "react";
import { Context } from "../context/Context";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleIsFavorite } = useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleIsFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleIsFavorite(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => toggleIsFavorite(img.id)}
        ></i>
      );
    }
  }
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" alt="photos" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

export default Image;
