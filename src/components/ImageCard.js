import React from "react";

const ImageCard = ({ image }) => {
  const descproduct = image.description;
  const res = descproduct.substr(0, 50);

  return (
    <div className="bg-blue-600 lg:w-80 rounded-md overflow-hidden bg-no-repeat hover:bg-blue-400">
      <img
        src={image.image}
        alt=""
        className="w-full h-35 md:h-48 object-contain p-2 my-5"
      />
      <div className="px-6 py-8">
        <div className="font-bold text-yellow-300 text-lg text-justify mb-3">
          {image.name}
        </div>
        <div className="text-neutral-50">
          <ul>
            <li>{res}..</li>
            <li className="text-md m">
              <strong>{image.price}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
