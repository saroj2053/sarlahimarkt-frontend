import { useEffect, useState } from "react";
import bannerImage1 from "../assets/banner/banner1.jpg";
import bannerImage2 from "../assets/banner/banner2.jpg";
import bannerImage3 from "../assets/banner/banner3.jpg";
import bannerImage4 from "../assets/banner/slider-image3.png";
import bannerImage5 from "../assets/banner/slider-image4.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const BannerProduct = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    bannerImage1,
    bannerImage2,
    bannerImage3,
    bannerImage4,
    bannerImage5,
  ];

  const nextImage = () => {
    if (images.length - 1 > activeImage) {
      setActiveImage((prevCount) => prevCount + 1);
    }

    if (images.length - 1 === activeImage) {
      setActiveImage(0);
    }
  };

  const prevImage = () => {
    if (activeImage !== 0) {
      setActiveImage((prevCount) => prevCount - 1);
    }
    if (activeImage === 0) {
      setActiveImage(images.length - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (images.length - 1 > activeImage) {
        nextImage();
      } else {
        setActiveImage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeImage]);

  return (
    <div className="container mx-auto px-4 rounded ">
      <div className=" md:h-72 lg:h-96 w-full relative">
        <div className="absolute z-10 h-full w-full md:flex items-center hidden ">
          <div className=" flex justify-between w-full text-2xl">
            <button onClick={prevImage} className="bg-white shadow-md  p-1">
              <FaAngleLeft />
            </button>
            <button onClick={nextImage} className="bg-white shadow-md  p-1">
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="hidden md:flex h-full w-full overflow-hidden">
          {images.map((imageUrl, idx) => {
            return (
              <div
                className="w-full h-[85%] min-w-full min-h-[85%] transition-all"
                key={imageUrl + idx}
                style={{ transform: `translateX(-${activeImage * 100}%)` }}
              >
                <img src={imageUrl} className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
