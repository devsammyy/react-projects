import React, { useState } from "react";
import data from "./data";
import { FaChevronLeft, FaQuoteRight, FaChevronRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = data[index];

  const monitorIndex = (index) => {
    if (index > data.length - 1) {
      return 0;
    }
    if (index < 0) {
      return data.length - 1;
    }
    return index;
  };

  const nextBtn = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return monitorIndex(newIndex);
    });
  };

  const prevBtn = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return monitorIndex(newIndex);
    });
  };

  return (
    <section className="review">
      <div className="image-container">
        <img src={image} alt={name} />
        <span className="quote">
          <FaQuoteRight />
        </span>
      </div>
      <h2>{name}</h2>
      <p style={{ fontStyle: "italic", fontWeight: "bold" }}>{job}</p>
      <p>{text}</p>

      <div className="btn-container">
        <button className="next-btn" onClick={nextBtn}>
          <FaChevronLeft />
        </button>
        <button className="prev-btn" onClick={prevBtn}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Review;
