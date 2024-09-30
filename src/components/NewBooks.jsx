// import { FaHeart, FaStar } from "react-icons/fa";
// import book from "../assets/newbooks.jpg"


// const NewBooks = () => {
//     return (
//         <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
//             <div className="container mx-auto py-[2vh]">
//             <div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">
//                 New <span className="text-[#f54748]">Books</span>
//             </div>
//             <div className="grid py-6 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
//             <div className="book-card  rounded-lg flex flex-col cursor-pointer items-center p-5">
//             <div className="relative mb-3">
// <img src={book} alt="" />
// <div className="absolute top-2 left-2">
//         <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
// <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></FaHeart>
//         </button>
// </div>

// <div className="absolute bottom-2 right-2">
//         <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
//         <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             $10
//         </div>
//         </button>
// </div>
//             </div>

//             <div className="flex gap-4 items-center">
//             <p className="text-xl text-center font-bold text-[#f54748]">
// Kebab
//             </p>
//             <div className="flex text-sm space-x-2 cursor-pointer">
//                 <span className="font-normal text-[#fdc55e]">4.3</span>
//                 <FaStar size={16} className="text-[#fdc55e]"></FaStar>
//                 <span className="font-medium">(4)</span>

//             </div>
//             </div>

//             <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Order now</button>
//             </div>

//             <div className="book-card rounded-lg flex flex-col cursor-pointer items-center p-5">
//             <div className="relative mb-3">
// <img src={book} alt="" />
// <div className="absolute top-2 left-2">
//         <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
// <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></FaHeart>
//         </button>
// </div>

// <div className="absolute bottom-2 right-2">
//         <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
//         <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             $10
//         </div>
//         </button>
// </div>
//             </div>

//             <div className="flex gap-4 items-center">
//             <p className="text-xl text-center font-bold text-[#f54748]">
// Kebab
//             </p>
//             <div className="flex text-sm space-x-2 cursor-pointer">
//                 <span className="font-normal text-[#fdc55e]">4.3</span>
//                 <FaStar size={16} className="text-[#fdc55e]"></FaStar>
//                 <span className="font-medium">(4)</span>

//             </div>
//             </div>

//             <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Order now</button>
//             </div>
//             <div className="book-card rounded-lg flex flex-col cursor-pointer items-center p-5">
//             <div className="relative mb-3">
// <img src={book} alt="" />
// <div className="absolute top-2 left-2">
//         <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
// <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></FaHeart>
//         </button>
// </div>

// <div className="absolute bottom-2 right-2">
//         <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
//         <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             $10
//         </div>
//         </button>
// </div>
//             </div>

//             <div className="flex gap-4 items-center">
//             <p className="text-xl text-center font-bold text-[#f54748]">
// Kebab
//             </p>
//             <div className="flex text-sm space-x-2 cursor-pointer">
//                 <span className="font-normal text-[#fdc55e]">4.3</span>
//                 <FaStar size={16} className="text-[#fdc55e]"></FaStar>
//                 <span className="font-medium">(4)</span>

//             </div>
//             </div>

//             <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Order now</button>
//             </div>
//             <div className="book-card rounded-lg flex flex-col cursor-pointer items-center p-5">
//             <div className="relative mb-3">
// <img src={book} alt="" />
// <div className="absolute top-2 left-2">
//         <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
// <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></FaHeart>
//         </button>
// </div>

// <div className="absolute bottom-2 right-2">
//         <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
//         <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             $10
//         </div>
//         </button>
// </div>
//             </div>

//             <div className="flex gap-4 items-center">
//             <p className="text-xl text-center font-bold text-[#f54748]">
// Kebab
//             </p>
//             <div className="flex text-sm space-x-2 cursor-pointer">
//                 <span className="font-normal text-[#fdc55e]">4.3</span>
//                 <FaStar size={16} className="text-[#fdc55e]"></FaStar>
//                 <span className="font-medium">(4)</span>

//             </div>
//             </div>

//             <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Order now</button>
//             </div>
//             <div className="book-card rounded-lg flex flex-col cursor-pointer items-center p-5">
//             <div className="relative mb-3">
// <img src={book} alt="" />
// <div className="absolute top-2 left-2">
//         <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
// <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></FaHeart>
//         </button>
// </div>

// <div className="absolute bottom-2 right-2">
//         <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
//         <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             $10
//         </div>
//         </button>
// </div>
//             </div>

//             <div className="flex gap-4 items-center">
//             <p className="text-xl text-center font-bold text-[#f54748]">
// Kebab
//             </p>
//             <div className="flex text-sm space-x-2 cursor-pointer">
//                 <span className="font-normal text-[#fdc55e]">4.3</span>
//                 <FaStar size={16} className="text-[#fdc55e]"></FaStar>
//                 <span className="font-medium">(4)</span>

//             </div>
//             </div>

//             <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Order now</button>
//             </div>
//             <div className="book-card rounded-lg flex flex-col cursor-pointer items-center p-5">
//             <div className="relative mb-3">
// <img src={book} alt="" />
// <div className="absolute top-2 left-2">
//         <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
// <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></FaHeart>
//         </button>
// </div>

// <div className="absolute bottom-2 right-2">
//         <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
//         <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             $10
//         </div>
//         </button>
// </div>
//             </div>

//             <div className="flex gap-4 items-center">
//             <p className="text-xl text-center font-bold text-[#f54748]">
// Kebab
//             </p>
//             <div className="flex text-sm space-x-2 cursor-pointer">
//                 <span className="font-normal text-[#fdc55e]">4.3</span>
//                 <FaStar size={16} className="text-[#fdc55e]"></FaStar>
//                 <span className="font-medium">(4)</span>

//             </div>
//             </div>

//             <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Order now</button>
//             </div>

//             <div className="book-card  rounded-lg flex flex-col cursor-pointer items-center p-5">
//             <div className="relative mb-3">
// <img src={book} alt="" />
// <div className="absolute top-2 left-2">
//         <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
// <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></FaHeart>
//         </button>
// </div>

// <div className="absolute bottom-2 right-2">
//         <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
//         <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             $10
//         </div>
//         </button>
// </div>
//             </div>

//             <div className="flex gap-4 items-center">
//             <p className="text-xl text-center font-bold text-[#f54748]">
// Kebab
//             </p>
//             <div className="flex text-sm space-x-2 cursor-pointer">
//                 <span className="font-normal text-[#fdc55e]">4.3</span>
//                 <FaStar size={16} className="text-[#fdc55e]"></FaStar>
//                 <span className="font-medium">(4)</span>

//             </div>
//             </div>

//             <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Order now</button>
//             </div>

//             <div className="book-card  rounded-lg flex flex-col cursor-pointer items-center p-5">
//             <div className="relative mb-3">
// <img src={book} alt="" />
// <div className="absolute top-2 left-2">
//         <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
// <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></FaHeart>
//         </button>
// </div>

// <div className="absolute bottom-2 right-2">
//         <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
//         <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             $10
//         </div>
//         </button>
// </div>
//             </div>

//             <div className="flex gap-4 items-center">
//             <p className="text-xl text-center font-bold text-[#f54748]">
// Kebab
//             </p>
//             <div className="flex text-sm space-x-2 cursor-pointer">
//                 <span className="font-normal text-[#fdc55e]">4.3</span>
//                 <FaStar size={16} className="text-[#fdc55e]"></FaStar>
//                 <span className="font-medium">(4)</span>

//             </div>
//             </div>

//             <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Order now</button>
//             </div>
            

//             </div>

            
//             </div>
//             </div>
//     );
// };

// export default NewBooks;


import { FaHeart, FaStar } from "react-icons/fa";
import book from "../assets/newbooks.jpg"; // Ensure the path is correct

const NewBooks = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">
        New <span className="text-[#f54748]">Books</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6">
        
        {/* Book Card 1 */}
        <div className="rounded-lg flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3 w-full">
            <img src={book} alt="New Book" className="w-full h-auto rounded-lg object-cover" />
            <div className="absolute top-2 left-2">
              <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-3 rounded-full relative">
                <FaHeart className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </button>
            </div>
            <div className="absolute bottom-2 right-2">
              <button className="shadow-sm text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                <div className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  $10
                </div>
              </button>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <p className="text-xl text-center font-bold text-[#f54748]">
              Book Title 1
            </p>
            <div className="flex text-sm space-x-2 cursor-pointer">
              <span className="font-normal text-[#fdc55e]">4.3</span>
              <FaStar size={16} className="text-[#fdc55e]" />
              <span className="font-medium">(4)</span>
            </div>
          </div>

          <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
            Order Now
          </button>
        </div>

        {/* Book Card 2 */}
        <div className="rounded-lg flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3 w-full">
            <img src={book} alt="New Book" className="w-full h-auto rounded-lg object-cover" />
            <div className="absolute top-2 left-2">
              <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-3 rounded-full relative">
                <FaHeart className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </button>
            </div>
            <div className="absolute bottom-2 right-2">
              <button className="shadow-sm text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                <div className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  $10
                </div>
              </button>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <p className="text-xl text-center font-bold text-[#f54748]">
              Book Title 2
            </p>
            <div className="flex text-sm space-x-2 cursor-pointer">
              <span className="font-normal text-[#fdc55e]">4.5</span>
              <FaStar size={16} className="text-[#fdc55e]" />
              <span className="font-medium">(5)</span>
            </div>
          </div>

          <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
            Order Now
          </button>
        </div>

        {/* Book Card 3 */}
        <div className="rounded-lg flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3 w-full">
            <img src={book} alt="New Book" className="w-full h-auto rounded-lg object-cover" />
            <div className="absolute top-2 left-2">
              <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-3 rounded-full relative">
                <FaHeart className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </button>
            </div>
            <div className="absolute bottom-2 right-2">
              <button className="shadow-sm text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                <div className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  $10
                </div>
              </button>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <p className="text-xl text-center font-bold text-[#f54748]">
              Book Title 3
            </p>
            <div className="flex text-sm space-x-2 cursor-pointer">
              <span className="font-normal text-[#fdc55e]">4.0</span>
              <FaStar size={16} className="text-[#fdc55e]" />
              <span className="font-medium">(3)</span>
            </div>
          </div>

          <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
            Order Now
          </button>
        </div>

        {/* Book Card 4 */}
        <div className="rounded-lg flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3 w-full">
            <img src={book} alt="New Book" className="w-full h-auto rounded-lg object-cover" />
            <div className="absolute top-2 left-2">
              <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-3 rounded-full relative">
                <FaHeart className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </button>
            </div>
            <div className="absolute bottom-2 right-2">
              <button className="shadow-sm text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                <div className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  $10
                </div>
              </button>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <p className="text-xl text-center font-bold text-[#f54748]">
              Book Title 4
            </p>
            <div className="flex text-sm space-x-2 cursor-pointer">
              <span className="font-normal text-[#fdc55e]">4.8</span>
              <FaStar size={16} className="text-[#fdc55e]" />
              <span className="font-medium">(6)</span>
            </div>
          </div>

          <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
            Order Now
          </button>
        </div>

        {/* Book Card 5 */}
        <div className="rounded-lg flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3 w-full">
            <img src={book} alt="New Book" className="w-full h-auto rounded-lg object-cover" />
            <div className="absolute top-2 left-2">
              <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-3 rounded-full relative">
                <FaHeart className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </button>
            </div>
            <div className="absolute bottom-2 right-2">
              <button className="shadow-sm text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                <div className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  $10
                </div>
              </button>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <p className="text-xl text-center font-bold text-[#f54748]">
              Book Title 5
            </p>
            <div className="flex text-sm space-x-2 cursor-pointer">
              <span className="font-normal text-[#fdc55e]">4.6</span>
              <FaStar size={16} className="text-[#fdc55e]" />
              <span className="font-medium">(5)</span>
            </div>
          </div>

          <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
            Order Now
          </button>
        </div>

        {/* Book Card 6 */}
        <div className="rounded-lg flex flex-col cursor-pointer items-center p-5">
          <div className="relative mb-3 w-full">
            <img src={book} alt="New Book" className="w-full h-auto rounded-lg object-cover" />
            <div className="absolute top-2 left-2">
              <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-3 rounded-full relative">
                <FaHeart className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </button>
            </div>
            <div className="absolute bottom-2 right-2">
              <button className="shadow-sm text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                <div className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  $10
                </div>
              </button>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <p className="text-xl text-center font-bold text-[#f54748]">
              Book Title 6
            </p>
            <div className="flex text-sm space-x-2 cursor-pointer">
              <span className="font-normal text-[#fdc55e]">4.7</span>
              <FaStar size={16} className="text-[#fdc55e]" />
              <span className="font-medium">(5)</span>
            </div>
          </div>

          <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
            Order Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default NewBooks;
