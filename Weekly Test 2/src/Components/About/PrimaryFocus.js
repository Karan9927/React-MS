import React from "react";
import Card from "./Card";

const PrimaryFocus = () => {
  return (
    <div>
      <p className="text-[24px] my-[20px] text-[#fafafa] text-center font-semibold">
        Primary Focus
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <Card
          name="Web Design & Development"
          desc="Creating attractive, easy-to-use websites that work well for businesses and individuals online."
          image="https://oktayshakirov.com/assets/images/icon-dev.svg"
        />
        <Card
          name="Mobile Apps & Games"
          desc="Creating and developing engaging mobile apps and games for iOS and Android devices."
          image="https://oktayshakirov.com/assets/images/icon-app.svg"
        />
        <Card
          name="Development Solutions"
          desc="Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications."
          image="https://oktayshakirov.com/assets/images/icon-frameworks.svg"
        />
        <Card
          name="Marketing & SEO"
          desc="Using SEO and marketing strategies to boost online visibility and promote products or services."
          image="https://oktayshakirov.com/assets/images/icon-marketing.svg"
        />
      </div>
    </div>
  );
};

export default PrimaryFocus;
