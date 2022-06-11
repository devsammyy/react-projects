import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = people[index];

  return (
    <section className="review">
      <div className="image-container">
        <img src={image} alt={name} />
        <span className="quote">
          <FaQuoteRight />
        </span>
      </div>
      <h4>{name}</h4>
      <p>{job}</p>
      <p>{text}</p>

      <div className="btn-container">
        <button className="next-btn">
          <FaChevronLeft />
        </button>
        <button className="prev-btn">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Review;
