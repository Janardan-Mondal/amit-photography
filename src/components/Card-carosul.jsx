import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { imageData } from "../assets/assets";

const Thump = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClick = (images) => {
    setSelectedImages(images || []);
    setOpen(true);
  };

  return (
    <div className="w-full flex flex-wrap gap-2 mt-5">
      {imageData.map((item) => (
        <div
          key={item.id}
          className="relative w-full sm:w-[48%] md:w-[32%] lg:w-[24%] group cursor-pointer rounded-lg border border-gray-300 overflow-hidden"
          onClick={() => handleClick(item.images)}
        >
          <img
            src={item.thumnail}
            className="w-full h-auto object-cover "
            alt={`Thumbnail ${item.id}`}
          />
          {/* Title at the bottom */}
          <div className="w-full bg-zinc-400 absolute bottom-0 left-0 text-blue-950 text-center py-2">
            {item.title}
          </div>
        </div>
      ))}

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative w-[90%] md:w-[50%] bg-white p-4 rounded-lg shadow-lg">
            <button
              className=" px-2 py-1 mb-3 cursor-pointer bg-red-500 text-white rounded"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
              {selectedImages.map((image, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                    src={image}
                    alt={`Slide ${index}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thump;
