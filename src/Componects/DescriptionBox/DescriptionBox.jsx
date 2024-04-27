import React from "react";
import "./Descriptionbox.css";

const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box-fade">Reviews (154)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In cupiditate
          quasi unde quae facilis dolore est magni aspernatur tenetur maxime,
          nesciunt at tempora similique architecto, perferendis sunt odit minima
          laborum officiis harum? Dolores maiores inventore doloribus,
          temporibus voluptatum reprehenderit doloremque debitis impedit libero
          voluptatem dolore nemo illum! Omnis, nihil ratione.{" "}
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
