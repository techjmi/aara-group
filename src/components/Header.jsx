import { FaBars, FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import mobile from '../assets/Upper-mobile-image.png';
import { useState } from "react";
import { ImCross } from "react-icons/im";
import './Header.css'

const Header = () => {
    const [showMenu, setShowMenu] = useState(true);
    return (
        <div className="sticky top-0 z-10 bg-white shadow-md">
            <header className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 flex items-center justify-between px-[5%] py-4 sticky top-0 z-10 bg-white shadow-md">
                <div className="flex items-center justify-around md:w-1/2">
                    {/* Left side */}
                    <div className="md:hidden flex items-center mr-4">
                        {/* Hamburger Menu */}
                        {showMenu ? (
                            <FaBars
                                className="text-white h-6 w-6"
                                onClick={() => setShowMenu(!showMenu)}
                            />
                        ) : (
                            <ImCross
                                className="text-white h-6 w-6"
                                onClick={() => setShowMenu(!showMenu)}
                            />
                        )}
                        {/* Centered image in mobile */}
                        <img src={mobile} alt="mobile" className="w-11 h-11 ml-3 md:hidden" />
                    </div>
                    <div className="hidden md:flex flex-col  items-start">
                        {/* "Deliver to" section */}
                        <div className="text-white">Deliver to</div>
                        <div className="flex items-center gap-2">
                            <span className="text-white font-bold">Location</span>
                            <MdLocationOn className="h-5 w-5 text-white" />
                        </div>
                    </div>
                    <div className="hidden md:flex-grow-1 mx-10 w-full max-w-md relative md:block">
                    {/* Search bar for desktop */}
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white pl-10"
                        placeholder="Search for Products, Brands, Offers"
                    />
                    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                </div>
               
                <div className="flex gap-5 justify-between items-center md:w-1/3">
                    {/* Right side */}
                    <div className="flex flex-col items-start">
                        {/* Wishlist section */}
                        <div className="text-white hidden md:block">Wishlist</div>
                        <div className="flex items-center gap-2">
                            <span className="text-white hidden md:block font-bold">0 Items</span>
                            <FaHeart className="h-5 w-5 text-white" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        {/* Cart section */}
                        <div className="text-white hidden md:block">Cart</div>
                        <div className="flex items-center gap-2">
                            <span className="text-white hidden md:block font-bold">0 Items</span>
                            <FaShoppingCart className="h-5 w-5 text-white" />
                        </div>
                    </div>
                    <div className="flex flex-col  items-start">
                        {/* My Account section */}
                        <div className="text-white hidden md:block">My Account</div>
                        <div className="flex items-center gap-2">
                            <span className="text-white hidden md:block font-bold">Sign In</span>
                            <FaUser className="h-5 w-5 text-white" />
                        </div>
                    </div>
                </div>
                {/* Centered image for desktop */}
                <div className="absolute z-20 top-[5%] left-1/4 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 xl:w-20 hidden md:block animate-tilt">
    <img src={mobile} alt="mobile" className="w-full h-full object-cover" />
</div>

            </header>
            {/* Search bar for mobile */}
            <div className="md:hidden px-5 py-2 bg-orange-800">
                <div className="relative w-full">
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white pl-10"
                        placeholder="Search for Products, Brands, Offers"
                    />
                    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div> 
            </div>
            <div className="hidden w-full text-sm font-bold xl:flex justify-center bg-white py-3 shadow-lg">
                {/* Content below the header */}
                <div className="flex justify-around w-full px-[10%]">
                    <p className="text-black">Mobiles & Tablets</p>
                    <p className="text-black">Tv & Electronics</p>
                    <p className="text-black">Laptop & Accessories</p>
                    <p className="text-black ml-[20%]">Computer & Peripherals</p>
                    <p className="text-black">Smart Technology</p>
                    <p className="text-black">Mobile Accessories</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
