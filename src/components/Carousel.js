import { useRef } from "react";

function Carousel({imageUrls}) {
  const slidesContainerRef = useRef(null);
  const slideRef = useRef(null);

  const nextButtonHandler = () => {
    const slideWidth = slideRef.current?.clientWidth;
    slidesContainerRef.current.scrollLeft += slideWidth;
    console.log("i am clickicked");
  };

  const prevButtonHandler = () => {
    const slideWidth = slideRef.current?.clientWidth;
    slidesContainerRef.current.scrollLeft -= slideWidth;
    console.log("i am clickicked");
  };

  return (
    <section className="slider-wrapper">
      <button
        className="slide-arrow"
        id="slide-arrow-prev"
        onClick={prevButtonHandler}
      >
        &#8249;
      </button>
      <button
        className="slide-arrow"
        id="slide-arrow-next"
        onClick={nextButtonHandler}
      >
        &#8250;
      </button>
      <ul
        className="slides-container"
        id="slides-container"
        ref={slidesContainerRef}
      >
        {imageUrls.map((x, index) => (
        <li className="slide" ref={slideRef}>
          <img className="slideImg" key={index} src={x.replace(/&amp;/g, "&")} alt="Reddit does not have altText."></img>
        </li>
        ))}
      </ul>
    </section>
  );
}

export default Carousel;
