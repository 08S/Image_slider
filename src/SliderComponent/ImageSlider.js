import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

 const sliderStyle = {
    height: "100%",
    position: "relative",
 }

  const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex].url})`,
  }

  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer"
  }
  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer"
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex  === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
 
  const dotContainerStyle = {
    display: "flex",
    justifyContent: "center"
  }

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px"
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <div style={sliderStyle}>
        <div onClick={goToPrevious} style={leftArrowStyle }>❰</div>
        <div onClick={goToNext} style={rightArrowStyle}>❱</div>
      <div style={slideStyle}></div>
      <div style={dotContainerStyle}>
      {slides.map((slide, slideIndex) => (
        <div style={dotStyle} key={slideIndex} onClick={() => goToSlide(slideIndex)}>●</div>
      ))}
      </div>
    </div>
  );
};

export default ImageSlider;
