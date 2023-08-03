import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import avatar from '../../assets/images/avatar.png';
import Menu from "./components/Menu";
import { IoCartOutline, IoClose, IoMenu } from "react-icons/io5";
import Cart from "../cart/Cart";
import { CartContext } from "../../providers/CartProvider";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  
  const { handleCart, quantityProducts } = useContext(CartContext);

  return (
    <header className="bg-white w-screen md:w-11/12 top-0 p-2 md:p-4 fixed md:border-b md:border-gray-300">
      <div className="flex items-center justify-between h-12 md:h-16">
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden mx-4"
          >
            <IoMenu
              className="hover:fill-orange-600 transition duration-150 ease-in-out"
              size={25}
              color='gray'
            />
          </button>

          <img src={logo} className="mr-12" />

          <div className="hidden md:block">
            <Menu />
          </div>
        </div>

        <div className="flex items-center justify-between mx-4">
          <button onClick={() => handleCart()}>
            <IoCartOutline size={25} className="mx-2 cursor-pointer" color='black' />
            
            {quantityProducts > 0 && 
              <div className="bg-orange-400 rounded-xl text-white font-bold text-xs w-6 absolute right-16 top-4  md:right-20 md:top-8">
                {quantityProducts}
              </div>
            }
          </button>
          <img src={avatar} className="ml-4 md:ml-6 h-7 w-7" />
        </div>
      </div>

      {showMobileMenu && (
        <div className="md:hidden h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-70">
          <div className="bg-white h-screen w-60 pl-1pr-24">
            <button
              onClick={() => setShowMobileMenu(false)}
              className="my-4 ml-3"
            >
              <IoClose size={25} color="gray" />
            </button>

            <Menu />
          </div>
        </div>
      )}
    </header>
  );
};