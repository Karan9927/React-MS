import React from "react";
import Card from "./Card";

const ExploringCreativity = () => {
  return (
    <div>
      <p className="text-[24px] my-[20px] text-[#fafafa] text-center font-semibold">
        Exploring Creativity
      </p>
      <div className="flex justify-center gap-8">
        <Card
          name="Visual Storytelling"
          desc="Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually."
          image="https://oktayshakirov.com/assets/images/icon-video.svg"
        />
        <Card
          name="Digital Content Creation"
          desc="Creatiing dynamic digital content, such as 3D models, graphics or animations."
          image="https://oktayshakirov.com/assets/images/icon-multimedia.svg"
        />
      </div>
    </div>
  );
};

export default ExploringCreativity;
