import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import FoodCard from "../Food/FoodCard";

const Food = () => {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
        );
        const data = response.data.meals;
        console.log(data);
        setRecipe(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipe();
  }, []);

  return (
    <div>
      <Navbar />
      <FoodCard data={recipe} />
    </div>
  );
};

export default Food;
