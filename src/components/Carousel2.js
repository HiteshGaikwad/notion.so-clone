import { useState } from "react";
import arrowdown from "../images/arrow-down.png"

const Carousel2 = ({images}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className='mt-4 mb-24 rounded-xl relative'>
        <img alt='carousel' src={images[activeIndex]} />
        <button className="absolute  left-5 top-2/4" onClick={()=>{handlePrev();}}><img className="w-12 p-2 rounded-full bg-white rotate-90 " alt="arrow" src={arrowdown}/></button>
        <button className="absolute right-5 top-2/4" onClick={handleNext}><img className="w-12 -rotate-90 p-2 rounded-full bg-white" alt="arrow" src={arrowdown}/></button>
      </div>
    );
  };
  
  export default Carousel2;