import React, { useState } from "react";
import { CiMobile1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GiWeightScale } from "react-icons/gi";
import { FaAmazon, FaMobile, FaNewspaper, FaPlus } from "react-icons/fa";
import { MdClose, MdSmartphone } from "react-icons/md";
import { SiMotorola, SiSamsung } from "react-icons/si";
import { SiXiaomi } from "react-icons/si";
import { BsApple } from "react-icons/bs";

function MobileNav() {
  const [bycatgory, setBycatgory] = useState(false);
  const [byPrice, setByPrice] = useState(false);
  return (
    <div className="w-full flex flex-col text-gray-600 capitalize font-medium text-sm ">
      <Link to="/" className="flex items-center p-3  hover:bg-gray-50">
        <CiMobile1 className="text-lg mr-2" />
        All mobiles
      </Link>
      <Link to="/" className="flex items-center p-3  hover:bg-gray-50">
        <GiWeightScale className="text-lg mr-2" />
        compare mobiles
      </Link>
      <Link to="/" className="flex items-center p-3  hover:bg-gray-50">
        <FaMobile className="text-lg mr-2" />
        upcoming mobiles
      </Link>
      <Link to="/" className="flex items-center p-3  hover:bg-gray-50">
        <FaNewspaper className="text-lg mr-2" />
        latest new and reviews
      </Link>
      <Link to="/" className="flex items-center p-3  hover:bg-gray-50">
        <FaAmazon className="text-lg mr-2" />
        amazon central
      </Link>
      <Link to="/" className="flex items-center p-3  hover:bg-gray-50">
        <MdSmartphone className="text-lg mr-2" />
        best mobiles
      </Link>
      <Link to="/" className="flex items-center p-3  hover:bg-gray-50">
        <MdSmartphone className="text-lg mr-2" />
        latest mobiles
      </Link>
      <Link to="/" className="flex items-center p-3  hover:bg-gray-50">
        <MdSmartphone className="text-lg mr-2" />
        phone finder
      </Link>
      <div onClick={() => {setBycatgory(bycatgory => !bycatgory);setByPrice(false)}} className="w-full flex flex-row justify-between items-center p-3 hover:bg-gray-50">
        <p className="flex items-center  ">
          <MdSmartphone className="text-lg mr-2" />
          mobile by brands
        </p>
        {bycatgory? (
          <MdClose className="text-lg"  />
        ) : (
          <FaPlus/>
        )}
      </div>
      <div
        className={`w-full ${
          bycatgory ?"flex" : "hidden"
        } flex-col`}
      >
        <Link to="/" className="w-full   hover:bg-gray-50">
          <SiSamsung className="text-5xl mx-auto" />
        </Link>
        <Link to="/" className="w-full py-2   hover:bg-gray-50">
          <SiXiaomi className="text-2xl mx-auto" />
        </Link>
        <Link to="/" className="w-full py-2   hover:bg-gray-50">
          <BsApple className="text-2xl mx-auto" />
        </Link>
        <Link to="/" className="w-full py-2   hover:bg-gray-50">
          <SiMotorola className="text-2xl mx-auto" />
        </Link>

        <Link to="/" className="text-center p-3  hover:bg-gray-50">
          oneplus mobiles
        </Link>
        <Link to="/" className="text-center p-3  hover:bg-gray-50">
          vivo mobiles
        </Link>
        <Link to="/" className="text-center p-3  hover:bg-gray-50">
          realme mobiles
        </Link>
        <Link to="/" className="text-center p-3  hover:bg-gray-50">
          oppo mobiles
        </Link>
        <Link to="/" className="text-center p-3  hover:bg-gray-50">
          iqoo mobiles
        </Link>
        <Link to="/" className="text-center p-3  hover:bg-gray-50">
          poco mobiles
        </Link>
      </div>
      <div onClick={() => {setByPrice(byPrice => !byPrice);setBycatgory(false)} }className="w-full flex flex-row justify-between items-center p-3 hover:bg-gray-50">
        <p className="flex items-center  ">
          <MdSmartphone className="text-lg mr-2" />
          mobile by price
        </p>
        {byPrice  ? (
          <MdClose className="text-lg" />
        ) : (
          <FaPlus  />
        )}
      </div>
      <div
        className={`w-full ${
          byPrice  ? "flex" : "hidden"
        } flex-col`}
      >
       

        <Link to="/" className="text-center p-3  hover:bg-gray-50">
          mobile under 10,000
        </Link>
        <Link to="/" className="text-center p-3  hover:bg-gray-50">
        mobile under 15,000
        </Link>
        <Link to="/" className="text-center p-3  hover:bg-gray-50">
        mobile under 20,000
        </Link>
        <Link to="/" className="text-center p-3  hover:bg-gray-50">
        mobile under 25,000
        </Link>
        <Link to="/" className="text-center p-3  hover:bg-gray-50">
        mobile under 30,000
        </Link>
        <Link to="/" className="text-center p-3  hover:bg-gray-50">
        mobile under 50,000
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
