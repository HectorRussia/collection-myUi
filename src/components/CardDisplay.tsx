import { images } from "@/constants/images"


const CardDisplay = () => {
  return (
    <>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-10 lg:mt-3 gap-4 lg:gap-7 justify-center items-center  h-screen">
          {images.map(img => (
             <div className="card bg-base-100 p-5 md:p-0 w-96 shadow-xl transform transition duration-500 hover:scale-110 cursor-pointer">
              <figure>
                <img
                  src={`${img}`}
                  alt="Shoes" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
          </div>
          ))}
       
      </div>
    </>    
         
  )
}

export default CardDisplay