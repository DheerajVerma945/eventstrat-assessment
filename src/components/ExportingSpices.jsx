import React from "react";
import { Home } from "lucide-react";

const ExportingSpices = () => {
  const currPage = "Commodity Focus";
  const category = "Spices";
  const subcategory = "Exporting Spices from India";
  return (
    <div className="relative w-full h-[540px] overflow-hidden">
      <img
        src="./spices.png"
        alt="Spices Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/5 to-black/40" />

      <nav className="absolute top-4 left-4 text-white lg:left-28 flex items-center flex-wrap gap-1 text-sm sm:text-base">
        <Home
          size={20}
          className="w-5 h-5 sm:w-6 sm:h-6 hover:text-[#f49729] cursor-pointer"
        />
        {currPage && (
          <>
            <span className="mx-1 sm:mx-2">/</span>
            <p className="hover:text-[#f49729] cursor-pointer truncate">
              {currPage}
            </p>
          </>
        )}
        {category && (
          <>
            <span className="mx-1 sm:mx-2">/</span>
            <p className="hover:text-[#f49729] cursor-pointer truncate">
              {category}
            </p>
          </>
        )}
        {subcategory && (
          <>
            <span className="mx-1 sm:mx-2">/</span>
            <p className="font-medium truncate">{subcategory}</p>
          </>
        )}
      </nav>

      <div className="absolute top-32 left-4 md:top-[130px] lg:left-[165px] border-t-8 border-[#f2b90f] bg-white p-4 md:p-5 shadow-lg w-[90%] sm:w-[80%] md:w-[645px] h-auto sm:h-[200px] md:h-[270px]">
        <div className="relative ml-5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <p className="text-[#f49729] font-semibold text-2xl">SPICES</p>
            <img
              src="./spiceBoard.png"
              alt="Logo"
              className=" w-10 h-10 sm:w-12 sm:h-12 md:w-[70px] md:h-[70px] bg-white shadow-2xl object-contain"
            />
          </div>
          <p className="text-2xl sm:text-4xl md:text-4xl font-bold text-[#222] leading-tight">
            Exporting Spices from India
          </p>
          <p className=" sm:text-base text-lg text-gray-900 mt-7">
            The Spices Board of India promotes spice cultivation, export, and
            research through various initiatives and regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExportingSpices;


