import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex justify-center gap-5 text-white text-md">
      <FaGithub className="cursor-pointer opacity-70 hover:opacity-100" />
      <FaLinkedin className="cursor-pointer opacity-70 hover:opacity-100" />
      <FaInstagram className="cursor-pointer opacity-70 hover:opacity-100" />
      <FaTwitter className="cursor-pointer opacity-70 hover:opacity-100" />
    </div>
  );
};

export default SocialIcons;
