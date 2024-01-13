import React, { useState } from "react";

import "./styles.css";
import { FaStar } from "react-icons/fa";

const StarRating = ({ numStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currIndex) => {
    setRating(currIndex);
  };
  const handleMouseHover = (currIndex) => {
    setHover(currIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(numStars)].map((_, index) => {
        index++;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseHover(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
