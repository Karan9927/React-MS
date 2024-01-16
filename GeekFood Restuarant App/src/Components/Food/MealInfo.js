import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MealInfo = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setItem(response.data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };

    if (id !== "") {
      fetchData();
    }
  }, [id]);

  return (
    <>
      {item && (
        <>
          <Navbar />
          <div>
            <div className="flex justify-center gap-20 my-10 text-3xl font-semibold">
              <h1>{item.strMeal}</h1>
              <h2>{item.strArea} Food</h2>
              <h3>{item.strCategory}</h3>
            </div>
            <div className="flex mx-[80px] items-center justify-between">
              <div className="">
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="w-[70%] rounded-md shadow-xl"
                />
              </div>
              <div className=" p-6 bg-[#e9e9e9] border shadow-lg rounded-md w-[450px] h-max">
                <h2 className="p-2 text-xl font-semibold text-center uppercase">
                  Ingredients
                </h2>
                <h4 className="flex justify-between p-2 border-b-2 border-gray-300">
                  <div className=" first-letter:uppercase">
                    {item.strIngredient1}
                  </div>
                  <div>{item.strMeasure1}</div>
                </h4>
                <h4 className="flex justify-between p-2 border-b-2 border-gray-300">
                  <div className=" first-letter:uppercase">
                    {item.strIngredient2}
                  </div>
                  <div>{item.strMeasure2}</div>
                </h4>
                <h4 className="flex justify-between p-2 border-b-2 border-gray-300">
                  <div className=" first-letter:uppercase">
                    {item.strIngredient3}
                  </div>
                  <div>{item.strMeasure3}</div>
                </h4>
                <h4 className="flex justify-between p-2 border-b-2 border-gray-300">
                  <div className=" first-letter:uppercase">
                    {item.strIngredient4}
                  </div>
                  <div>{item.strMeasure4}</div>
                </h4>
                <h4 className="flex justify-between p-2 border-b-2 border-gray-300">
                  <div className=" first-letter:uppercase">
                    {item.strIngredient5}
                  </div>
                  <div>{item.strMeasure5}</div>
                </h4>
                <h4 className="flex justify-between p-2 border-b-2 border-gray-300">
                  <div className=" first-letter:uppercase">
                    {item.strIngredient6}
                  </div>
                  <div>{item.strMeasure6}</div>
                </h4>
                <h4 className="flex justify-between p-2 border-b-2 border-gray-300">
                  <div className=" first-letter:uppercase">
                    {item.strIngredient7}
                  </div>
                  <div>{item.strMeasure7}</div>
                </h4>
                <h4 className="flex justify-between p-2 border-b-2 border-gray-300">
                  <div className=" first-letter:uppercase">
                    {item.strIngredient8}
                  </div>
                  <div>{item.strMeasure8}</div>
                </h4>
                <div className="mt-3 text-center">
                  <a
                    className="cursor-pointer hover:text-blue-500"
                    href={item.strSource}
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" mx-[80px] mt-[40px]">
            <h2 className="text-[28px] font-semibold">INSTRUCTIONS</h2>
            <h4 className="mt-4 text-[20px]">{item.strInstructions}</h4>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
export default MealInfo;
