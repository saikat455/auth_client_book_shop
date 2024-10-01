


import { FaPlay, FaSearch } from "react-icons/fa";
import header from "../assets/book shop.avif";

const Header = () => {
  return (
    <header className="pt-20"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          
          <div className="w-full flex flex-col space-y-6">
            <h1 className="text-3xl mt-7 md:text-4xl font-bold text-[#2e2e2e]">
              We are <span className="text-[#f54748]">Serious</span> About{" "}
              <span className="text-[#f54748]">Books</span> &{" "}
              <span className="text-[#fdc55e]">Delivery</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-[#191919]">
              Discover a vast collection of books across all genres. Whether you are a seasoned reader or just starting your literary journey, we provide swift and reliable delivery right to your doorstep.
            </p>

            {/* Search Bar */}
            <div className="flex rounded-full py-2 px-4 justify-between items-center bg-white shadow-md border">
              <div className="flex items-center w-full">
                <FaSearch size={22} className="cursor-pointer mr-2 text-[#191919]" />
                <input
                  type="text"
                  placeholder="Search for books..."
                  className="text-[#191919] w-full border-none outline-none py-2 px-4"
                />
              </div>

              <div className="h-10 w-10 bg-[#fdc55e] rounded-full flex items-center justify-center cursor-pointer">
                <FaSearch size={15} className="text-white" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-8 items-center">
              <button className="bg-[#f54748] active:scale-90 transition duration-500 transform hover:shadow-xl shadow-md rounded-full px-6 py-2 text-lg font-medium text-white">
                Explore Now
              </button>

              <div className="hidden sm:flex gap-4 items-center">
                <div className="h-14 w-14 shadow-md bg-white rounded-full flex items-center justify-center cursor-pointer">
                  <FaPlay size={18} className="text-[#f54748]" />
                </div>
                <span className="text-base md:text-lg lg:text-xl text-[#191919] cursor-pointer">
                  Watch Now
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={header}
              alt="Book Shop"
              className="h-96 sm:h-[23rem] w-full max-w-md rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
