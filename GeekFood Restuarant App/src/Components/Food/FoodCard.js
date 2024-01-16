import { useNavigate } from "react-router-dom";

const FoodCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-wrap justify-center gap-12 p-4 my-10 border-solid">
        {data?.map(
          ({ strMeal, strMealThumb, strArea, idMeal, strCategory }) => {
            return (
              <div
                className="p-6 shadow-xl cursor-pointer rounded-xl hover:shadow-2xl"
                key={idMeal}
                onClick={() => {
                  navigate(`${idMeal}`);
                }}
              >
                <img
                  className="h-[18rem] w-[90%] scale-105"
                  src={strMealThumb}
                  alt="meal"
                />
                <h3 className="mt-4 mb-2 text-xl font-semibold ">{strMeal}</h3>
                <p className="mb-1 font-semibold text-gray-700">
                  Category: {strCategory}
                </p>
                <h4 className=" text-[#155263] font-semibold">
                  Country : {strArea}
                </h4>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default FoodCard;
