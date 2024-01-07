import React, { useState } from "react";

const Detail = ({ item, clicked }) => {
  const handleClick = () => {
    clicked();
  };
  const imageUrl = item.links.download;

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "downloaded_image.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex-col sm:text-left sm:flex-row flex text-center items-start justify-around sm:h-[655px] h-[750px] gap-10 sm:gap-20 bg-gray-300 py-[57px]">
      <button
        onClick={handleClick}
        className="absolute p-1 text-white duration-300 bg-black rounded-md left-5 top-20 hover:bg-gray-700 hover:scale-105"
      >
        Back
      </button>
      <div className="flex justify-center">
        <img
          className="sm:w-[90%] w-[50%] mt-10 sm:mt-0 rounded-md hover:scale-105 duration-300"
          src={item.urls.small}
        />
      </div>
      <div>
        <h2 className="my-2 text-2xl font-semibold sm:text-4xl">
          Uploded By: {item.user.name} @{item.id}
        </h2>
        <h2 className="my-2 text-xl font-semibold sm:text-3xl">
          Upload Date: {item.user.updated_at}
        </h2>
        <hr className="sm:p-[1px] mx-10 sm:mx-0 p-[0.5px] my-4 bg-black" />
        <p className="my-2 text-xl font-semibold">Width: {item.width}</p>
        <p className="my-2 text-xl font-semibold">Height: {item.height}</p>
        <hr className="sm:p-[1px] mx-10 sm:mx-0 p-[0.4px] my-4 bg-black" />
        <button
          onClick={downloadImage}
          className="p-2 text-white bg-black rounded-md hover:bg-gray-700"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Detail;
