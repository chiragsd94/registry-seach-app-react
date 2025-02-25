import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="rounded rounded-lg flex justify-between p-4 m-0.5 bg-gray-300">
      <div className="mt-10">
        Created By Chirag SD
        <div className="mt-4 text-center text-sm text-gray-600">
          © 2025 Chirag SD. All Rights Reserved.
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link to="/about">About</Link>
        <a href="https://github.com/chiragsd94" target="blank">
          Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
