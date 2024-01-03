import React from "react";
import FavoriteCard from "./FavoriteCard";

const FavoriteAct = () => {
  return (
    <div>
      <p className="text-[24px] my-[20px] text-[#fafafa] text-center font-semibold">
        Favorite Activities
      </p>
      <div className="flex flex-wrap gap-10 p-[30px] pb-[35px] justify-center">
        <FavoriteCard
          image="https://oktayshakirov.com/assets/images/finances.png"
          title="Investments"
          desc="Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment"
        />
        <FavoriteCard
          image="https://oktayshakirov.com/assets/images/music.png"
          title="Music"
          desc="Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians"
        />
        <FavoriteCard
          image="https://oktayshakirov.com/assets/images/traveling.png"
          title="Traveling"
          desc="Exploring new places, learn about different cultures and create lifelong memories."
        />
        <FavoriteCard
          image="https://oktayshakirov.com/assets/images/camera.png"
          title="Photography"
          desc="Capturing precious moments and memories through the lens of a camera."
        />
      </div>
    </div>
  );
};

export default FavoriteAct;
