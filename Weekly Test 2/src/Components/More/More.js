import React from "react";
import MoreCard from "./MoreCard";

const More = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <MoreCard
        image="https://oktayshakirov.com/assets/images/projects/pigletz.jpg"
        cat="Marketing & BizDev | Content Creator"
        title="Pigletz"
        desc="I create and manage the Pigletz community's social media presence, including producing and editing high-quality Web3 content for their YouTube channel. I also work on expanding the community's reach and impact through partnerships in the Web3 space."
      />
      <MoreCard
        image="https://oktayshakirov.com/assets/images/projects/sha-beats.jpg"
        cat="Beat Making | Sound Design"
        title="Music Production"
        desc="Produced over 100 instrumentals in different genres, collaborated with artists and my beats are on popular streaming platforms like Spotify, iTunes, Amazon and Deezer. They can also be purchased exclusively on my beatstore for musicians to create their unique sound."
      />
      <MoreCard
        image="https://oktayshakirov.com/assets/images/projects/sha-pixels.png"
        cat="Multimedia Design | 3D Rendering"
        title="Digital Content Creation"
        desc="My digital art portfolio, which includes a wide collection of graphic designs, 3D models and short video animations created for various purposes. I have long experience working with popular softwares like Adobe Photoshop, After Effects, Premiere Pro and Blender.."
      />
    </div>
  );
};

export default More;
