import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="font-russo flex justify-between m-2 p-2">
      <Link to="/">NPM Package Registry</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
