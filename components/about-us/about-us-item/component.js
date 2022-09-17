import React from "react";

const AboutUsItem = ({ image, header, content }) => {
  return (
    <div className="about-us-item">
      <div className="about-us-item-image">
        {image}
      </div>
      <div className="about-us-item-content">
        <h2>{header}</h2>
        <p>{content}</p>
        <span>Lees meer</span>
      </div>
    </div>
  );
};

export { AboutUsItem };
