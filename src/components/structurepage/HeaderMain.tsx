import { images2 } from "@/constants/images";
import { useEffect, useState } from "react";


const HeaderMain = () => {

    const [currentImage, setCurrentImage] = useState<string>(images2[0]);
    const [isFading, setIsFading] = useState(false); 
    const [isLoading,setLoading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
          setIsFading(true); // Start fading out
          setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * images2.length);
            setLoading(true);
            setCurrentImage(images2[randomIndex]);
            setIsFading(false); // Start fading in
            setLoading(false);
          }, 500);  // Fade out duration
        }, 5000); // Change every 3 seconds
    
        return () => clearInterval(interval);
      }, []);

  return (
    <>
    {
        isLoading && (<span className="loading loading-ring loading-lg"></span>)
    }
        <div className="flex justify-center p-10">
        <img
            src={currentImage}
            alt="Random"
            className={`
                w-auto h-auto  rounded-lg object-contain
                transition-all duration-500 ease-in-out
                ${isFading ? "opacity-0" : "opacity-100"}
                shadow-lg shadow-yellow-500
            `}/>
        </div>
    </>
  )
}

export default HeaderMain