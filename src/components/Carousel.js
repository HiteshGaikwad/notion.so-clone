import { useState } from "react";
import arrowdown from "../images/arrow-down.png"

const Carousel = ({images,currentImage}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className='mt-4 mb-24 rounded-xl w-2/3 relative'>
        <img alt='carousel' src={currentImage===-1?images[activeIndex]:images[currentImage]} />
        <button className="absolute left-5 top-2/4" onClick={()=>{handlePrev();}}><img className="w-12 rotate-90 mix-blend-darken" alt="arrow" src={arrowdown}/></button>
        <button className="absolute right-5 top-2/4" onClick={handleNext}><img className="w-12 -rotate-90 mix-blend-darken" alt="arrow" src={arrowdown}/></button>
      </div>
    );
  };
  
  export default Carousel;