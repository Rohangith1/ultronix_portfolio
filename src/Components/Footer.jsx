import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <h1 className="font-RobotoMono text-2xl font-bold">Reach me out...</h1>
      <ul className="flex flex-row gap-4 text-3xl md:text-5xl ">
        <li>
          <a href="">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="">
            <RiInstagramFill />
          </a>
        </li>
        <li>
          <a href="">
            <FaXTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
