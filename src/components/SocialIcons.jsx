import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaFacebook } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className="text-teal-500">
      <a
        className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        href="/"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        href="https://www.facebook.com/thegreatvisionschool"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        href="/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        href="https://www.instagram.com/thegreatvisionschool"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        href="https://youtube.com/@thegreatvisionschool?feature=shared"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
  );
};

export default SocialIcons;
