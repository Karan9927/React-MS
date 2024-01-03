import React from "react";
import Info from "./Info";
import { IoHourglassOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import SocialIcons from "./SocialIcons";

const Profile = () => {
  return (
    <div className="profile max-h-[632px] px-[35px] pt-[20px] pb-[30px] text-center border border-black w-58 rounded-3xl flex flex-col gap-8 sticky top-[30px]">
      <div className="flex flex-col items-center gap-4">
        <img
          className="rounded-3xl w-[150px]"
          src="https://oktayshakirov.com/assets/images/avatar.jpg"
          alt="avatar"
        />
        <p className="text-[18px] font-bold text-white">Oktay Shakirov</p>
        <p className="hello bg-[#1E1E1F6B] w-full text-white text-[12px] p-1 rounded-3xl">
          Hello, World !
        </p>
      </div>
      <div className="flex flex-col gap-8 py-5 border-t border-black">
        <Info icon={<IoHourglassOutline />} title="Age" sub="29 years old" />
        <Info
          icon={<IoLocationSharp />}
          title="Location"
          sub="Berlin, Germany"
        />
        <Info icon={<FaUser />} title="Personality type" sub="INTJ-T" />
      </div>
      <div>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Profile;
