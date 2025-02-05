import React, { useState } from "react";
import Description from "./Description";
import {
  Coffee,
  CupSoda,
  Link,
  ArrowUpRight,
  ArrowUpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Content = () => {
  const [active, setActive] = useState(0);
  const [currContent, setCurrContent] = useState(0);

  const toc = [
    "Registered Company",
    "GST Registration",
    "Pan Registration",
    "Importer Exporter Code (IEC)",
    "Authorized Dealer (AD) code",
    "FSSAI registration",
  ];

  const buttons = [
    "Eligibility Criteria",
    "Certifications",
    "Test and Inspections",
    "Packaging and Labelling",
    "Pre-Shipping Banking",
    "Shipping and Insurance",
    "Post-Shipping Steps",
  ];

  return (
    <div className="w-full px-4">
      <div className="flex items-center overflow-x-auto scrollbar-hidden">
        <div className="flex gap-4 md:gap-[75px] min-w-max pb-1">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`py-3 px-4  cursor-pointer transition-all duration-300 ${
                active === index
                  ? "border-b-4 border-[#124673] font-bold"
                  : "hover:border-b-2 hover:border-[#124673]/50"
              }`}
            >
              <p className="text-sm sm:text-lg md:text-xl font-medium whitespace-nowrap">
                {btn}
              </p>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl mt-20">
        <div className="hidden lg:w-1/3 lg:block">
          <h2 className="font-semibold text-xl mb-3">Table of Content</h2>
          <ul className="border-l pl-7 flex flex-col text-lg space-y-1 list-none">
            {toc.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                onClick={() => setCurrContent(index)}
                className={`cursor-pointer ${
                  index === currContent ? "text-[#102e48] font-semibold" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </ul>
          <div className="mt-20 w-fit flex flex-wrap gap-2">
            <div className="p-1 border border-gray-400 rounded-md">
              <Link size={34} color="#70707b" />
            </div>
            <div className="p-1 border border-gray-400 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="#70707b"
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
              </svg>
            </div>
            <div className="p-1 border border-gray-400 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="#70707b"
                viewBox="0 0 50 50"
              >
                <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
              </svg>
            </div>
            <div className="p-1 border border-gray-400 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="#70707b"
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 mt-5">
          <Description />
        </div>
      </div>
      <div className="bg-[#f5f5f5] p-6 md:p-10 mt-10 md:mt-20 pb-28 md:pb-56 shadow-lg text-lg md:text-xl flex flex-col md:flex-row max-w-full md:max-w-[80%] mx-auto">
        <div className="w-full md:w-1/3 border-gray-300 pr-0 md:pr-6">
          <ul className="space-y-3 md:space-y-4 text-gray-500">
            <li className="flex items-center text-black font-semibold">
              <Coffee size={24} md:size={28} className="mr-2" /> Coffee
            </li>
            <li className="flex items-center">
              <Link size={24} md:size={28} className="mr-2" /> Spices
            </li>
            <li className="flex items-center">
              <CupSoda size={24} md:size={28} className="mr-2" /> Tea
            </li>
          </ul>
        </div>
        <div className="w-full md:w-2/3 mt-4 md:mt-0">
          <ul className="space-y-6 md:space-y-8">
            <li className="flex justify-between items-center border-b-2 md:border-b-4 pb-2 border-[#f4bc0c] font-semibold">
              Coffee Board of India <ArrowUpRight size={24} md:size={28} />
            </li>
            <li className="flex justify-between items-center border-b pb-2 border-gray-300">
              Global Coffee Trade <ArrowUpRight size={24} md:size={28} />
            </li>
            <li className="flex justify-between items-center border-b pb-2 border-gray-300">
              India’s Coffee Exports <ArrowUpRight size={24} md:size={28} />
            </li>
            <li className="flex justify-between items-center border-b pb-2 border-gray-300">
              Introduction to Coffee <ArrowUpRight size={24} md:size={28} />
            </li>
          </ul>
        </div>
      </div>
      <a
        href="#"
        className="text-center md:text-right mx-auto md:mr-36 mt-6 md:mt-8 text-gray-700 text-lg md:text-xl flex justify-center md:justify-end items-center"
      >
        Back to top <ArrowUpCircle size={24} md:size={28} className="ml-1" />
      </a>

      <div className="max-w-[80%] flex flex-wrap items-center justify-between mx-auto mt-20 px-4 sm:px-6">
        <div className="text-center sm:text-right w-full sm:w-auto">
          <p >Previous</p>
          <p className="text-lg pb-4 border-b  text-black font-medium flex items-center justify-center sm:justify-end">
            <ChevronLeft className="inline mr-2" />
            Definition and Classification
          </p>
        </div>
        <div className="text-center sm:text-left w-full sm:w-auto mt-4 sm:mt-0">
          <p>Next</p>
          <p className="text-lg pb-4 border-b text-black font-medium flex items-center justify-center sm:justify-start">
            Spices in the Age of Colonialism
            <ChevronRight className="inline ml-2" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
