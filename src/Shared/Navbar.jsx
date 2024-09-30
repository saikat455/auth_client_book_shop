

// import { useState } from "react";
// import logo from "../assets/logo.png";
// import { TiThMenu } from "react-icons/ti";
// import { RxCross2 } from "react-icons/rx";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className="bg-white/80 shadow-md fixed top-0 left-0 w-full
//      z-40 ease-in duration-300 backdrop-blur-md">
//       <div className="py-3 px-8 sm:px-4 md:px-6 lg:px-20 mx-auto">
//         <div className="flex items-center justify-between">

//           <div className="flex-grow">
//             <img src={logo} alt="Logo" className="h-14 cursor-pointer ml-10" />
//           </div>

//           <div className="hidden lg:flex items-center justify-end gap-6 ">
//             <a
//               href=""
//               className="text-[#191919] text-lg font-medium hover:text-red-500"
//             >
//               Today Featured
//             </a>
//             <a
//               href=""
//               className="text-[#191919] text-lg font-medium hover:text-red-500"
//             >
//               Why Bookhub
//             </a>
//             <a
//               href=""
//               className="text-[#191919] text-lg font-medium hover:text-red-500"
//             >
//               Our Collection
//             </a>
//             <a
//               href=""
//               className="text-[#191919] text-lg font-medium hover:text-red-500"
//             >
//               Add Book
//             </a>
//             <a
//               href=""
//               className="text-[#191919] text-lg font-medium hover:text-red-500"
//             >
//               Popular Reads
//             </a>
//             <button className="bg-[#F54748] active:scale-90 transition-duration-100 transform hover:shadow-xl shadow-md rounded-md px-8 py-2 text-xl font-medium text-white">
//               Login
//             </button>
//           </div>

//           <div className="block lg:hidden z-40" onClick={handleNav}>
//             {nav ? (
//               <RxCross2 size={25} className="text-[#191919] cursor-pointer" />
//             ) : (
//               <TiThMenu className="text-red-500 cursor-pointer" size={25} />
//             )}
//           </div>

//           <div
//             className={`lg:hidden absolute w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/80 top-0 duration-500 ${
//               nav ? "right-0" : "right-[-100%]"
//             } pt-24`}
//           >
//             <div className="flex flex-col gap-7">
//               <a
//                 href=""
//                 className="text-[#191919] text-base font-medium hover:text-red-500"
//               >
//                 Today Featured
//               </a>
//               <a
//                 href=""
//                 className="text-[#191919] text-base font-medium hover:text-red-500"
//               >
//                 Why Bookhub
//               </a>
//               <a
//                 href=""
//                 className="text-[#191919] text-base font-medium hover:text-red-500"
//               >
//                 Our Collection
//               </a>
//               <a
//                 href=""
//                 className="text-[#191919] text-base font-medium hover:text-red-500"
//               >
//                 Add Book
//               </a>
//               <a
//                 href=""
//                 className="text-[#191919] text-base font-medium hover:text-red-500"
//               >
//                 Popular Reads
//               </a>
//               <button className="bg-[#F54748] active:scale-90 transition-duration-100 transform hover:shadow-xl shadow-md rounded-md px-8 py-2 text-xl font-medium text-white">
//                 Login
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import { useState } from "react";
import logo from "../assets/logo.png"; // Ensure the path is correct
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-white/80 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-14 cursor-pointer" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="#today-featured"
              className="text-[#191919] text-lg font-medium hover:text-[#f54748]"
            >
              Today Featured
            </a>
            <a
              href="#why-bookhub"
              className="text-[#191919] text-lg font-medium hover:text-[#f54748]"
            >
              Why Bookhub
            </a>
            <a
              href="#our-collection"
              className="text-[#191919] text-lg font-medium hover:text-[#f54748]"
            >
              Our Collection
            </a>
            <a
              href="#add-book"
              className="text-[#191919] text-lg font-medium hover:text-[#f54748]"
            >
              Add Book
            </a>
            <a
              href="#popular-reads"
              className="text-[#191919] text-lg font-medium hover:text-[#f54748]"
            >
              Popular Reads
            </a>
            <button className="bg-[#f54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-6 py-2 text-lg font-medium text-white">
              Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="block lg:hidden z-50" onClick={handleNav}>
            {nav ? (
              <RxCross2 size={25} className="text-[#191919] cursor-pointer" />
            ) : (
              <TiThMenu className="text-[#f54748] cursor-pointer" size={25} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 w-3/4 sm:w-2/5 h-full px-4 py-8 text-xl font-medium ease-in-out duration-300 shadow-sm backdrop-blur-md bg-white/80 transform ${
            nav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-7">
            <a
              href="#today-featured"
              className="text-[#191919] text-base font-medium hover:text-[#f54748]"
            >
              Today Featured
            </a>
            <a
              href="#why-bookhub"
              className="text-[#191919] text-base font-medium hover:text-[#f54748]"
            >
              Why Bookhub
            </a>
            <a
              href="#our-collection"
              className="text-[#191919] text-base font-medium hover:text-[#f54748]"
            >
              Our Collection
            </a>
            <a
              href="#add-book"
              className="text-[#191919] text-base font-medium hover:text-[#f54748]"
            >
              Add Book
            </a>
            <a
              href="#popular-reads"
              className="text-[#191919] text-base font-medium hover:text-[#f54748]"
            >
              Popular Reads
            </a>
            <button className="bg-[#f54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-6 py-2 text-lg font-medium text-white">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
