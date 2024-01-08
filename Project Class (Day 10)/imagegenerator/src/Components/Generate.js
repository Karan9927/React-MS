import React, { useRef, useState } from "react";
import defaultImage from "../Assets/Fish.webp";
import loader from "../Assets/loader.svg";
import axios from "axios";
const Generate = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isImageAvailable, setisImageAvailable] = useState(false);
  let inputRef = useRef(null);

  const imageGenerator = async (searchUrl) => {
    if (inputRef.current.value === "") {
      return 0;
    }

    const URL =
      "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5";

    const headers = {
      Authorization: `Bearer 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`,
      "Content-Type": "application/json",
    };

    setisImageAvailable(true);
    try {
      const res = await axios.post(URL, searchUrl, {
        headers: headers,
        responseType: "blob",
      });
      const reader = new FileReader();
      reader.onload = () => {
        const blobUrl = reader.result;
        setImageUrl(blobUrl);
        setisImageAvailable(false);
      };
      reader.readAsDataURL(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getImageonBasedOfText = () => {
    const serchKey = inputRef.current.value;
    console.log(serchKey);
    imageGenerator(serchKey);
  };

  return (
    <div className=" bg-[#292C31] shadow-xl h-[640px] border border-gray-700 m-8 mx-16 p-8 rounded-2xl">
      <h1 className="header text-[26px] text-[#FFFFFFE6]">
        AI Image Generator
      </h1>
      <h2 className="text-[#FFFFFFE6] text-[14px] my-1">
        Generate an image using Generative AI by describing what you want to
        see.
      </h2>
      <div className="searchBox">
        <input
          type="text"
          ref={inputRef}
          placeholder="Describe what you want to see?(eg: A fish)"
          className="w-full p-3 py-4 my-2 border border-gray-500 rounded-lg bg-inherit text-[#FFFFFFE6] focus:border-transparent  focus:outline-blue-500"
        />
        <div className="my-2 text-right">
          <button
            className="bg-[#009DD1] hover:bg-[#08799f] w-max px-4 py-2 rounded-md text-[#FFFFFFE6] "
            onClick={getImageonBasedOfText}
          >
            Generate
          </button>
        </div>
      </div>
      <div className="imgLoading">
        <div className="image">
          {isImageAvailable ? (
            <img
              className="absolute top-[40%] left-[45%] w-[200px] "
              src={loader}
              alt="Loader"
            />
          ) : (
            <img
              className="w-[350px] rounded-md"
              src={imageUrl ? imageUrl : defaultImage}
              alt="aiImage"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Generate;
