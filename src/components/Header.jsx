import {FaPlay, FaSearch} from "react-icons/fa"
import header from "../assets/book shop.avif"

const Header = () => {
    return (
        <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6'>
            <div className='container mx-auto py-[14vh]'>
            <div className='grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center'>
                <div className='lg:w-[32rem] w-full flex flex-col space-y-6'>
                <div className='text-3xl mt-7 md:text-4xl font-bold text-[#2e2e2e] lg:text-4xl'>
                We are <span className='text-[#f54748]'>
                    Serious
                </span> For <span className="text-[#f54748]">Book</span> & <span className="text-[#Fdc55e]">Delivery</span>
                </div>

                <div className="lg:text-xl text-[#191919] md:text-lg text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorem dolorum nemo perferendis magni recusandae illo possimus adipisci rerum. Pariatur.
                </div>
                <div className="flex rounded-full py-2 px-4 justify-between items-center bg-white shadow-md border">
                <div className="flex items-center">
<FaSearch size={22} className="cursor-pointer"></FaSearch>
<input type="text" placeholder="Search book here..." className="text-[#191919] w-full border-none outline-none py-2 px-4" />
                </div>

                <div className="h-10 w-10 relative bg-[#fdc55e] rounded-full">
                <FaSearch size={15} className="cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></FaSearch>
                </div>
                </div>

                <div className="flex  gap-8 items-center">
                    <button className="bg-[#f54748] active:scale-90 transition duration-500 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
                        Explore now
                    </button>

                    <div className="sm:flex hidden gap-4 items-center">
                        <div className="h-14 w-14 shadow-md cursor-pointer relative bg-white rounded-full">
                        <FaPlay size={18} className="cursor-pointer text-[#f54748] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></FaPlay>
                        </div>

                        <div className="lg:text-xl text-[#191919] md:text-lg text-base cursor-pointer">
                            Watch now
                        </div>

                    </div>
                </div>
                </div>

                <img src={header} className="h-[23rem] mx-auto rounded-xl justify-end mt-4" alt="" />
            </div>
            </div>
        </div>
    );
};

export default Header;