import { images2 } from "@/constants/images";
import { useEffect, useState } from "react";


const HeaderMain = () => {

    const [currentImage, setCurrentImage] = useState<string>(images2[0]);
    const [isFading, setIsFading] = useState(false); 

    useEffect(() => {
        const interval = setInterval(() => {
          setIsFading(true); // Start fading out
          setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * images2.length);
            setCurrentImage(images2[randomIndex]);
            setIsFading(false); // Start fading in
          }, 500);  // Fade out duration
        }, 3000); // Change every 3 seconds
    
        return () => clearInterval(interval);
      }, []);

  return (
    <>
        <div className="flex justify-center">
        <img
        src={currentImage}
        alt="Random"
        className=
        {`  w-auto h-96 pt-5 mt-4 rounded-lg shadow-md transition-transform duration-500 
            ${isFading ? "opacity-0" : "opacity-100"}
        `}
        style={{ transition: "opacity 0.5s ease" }} 
      />
        </div>
    </>
  )
}

export default HeaderMain