import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RiArrowDropDownLine } from 'react-icons/ri'

function Navlinks() {
  return (
    <div className="flex text-lg justify-evenly gap-6 items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive ? "underline underline-offset-4" : ""
          }hidden lg:block hover:scale-110 transition duration-300 cursor-pointer`
        }
      >
        <img src={logo} alt="icon" className="mr-10 w-[100px]" />
      </NavLink>

      <div className="flex items-center">
      <a className="hidden lg:block cursor-pointer">
        Product
      </a>
      <RiArrowDropDownLine size='25px' />

      </div>

      

      <a className="hidden lg:block cursor-pointer">
        Team
      </a>

      <a className="hidden lg:block cursor-pointer">
        Enterprise
      </a>

      <div className="flex items-center">
      <a className="hidden lg:block cursor-pointer">
        Explore
      </a>
      <RiArrowDropDownLine size='25px'/>
      </div>

      <a className="hidden lg:block cursor-pointer">
        Maketplace
      </a>

      <div className="flex items-center">
      <a className="hidden lg:block cursor-pointer">
        Pricing
      </a>
      <RiArrowDropDownLine size='25px'/>
      </div>

      <NavLink
        to="/users"
        className={({ isActive }) =>
          `${
            isActive ? "underline underline-offset-4" : ""
          } hidden lg:block hover:scale-110 transition duration-300 cursor-pointer`
        }
      >
        Users
      </NavLink>
    </div>
  );
}

export default Navlinks;