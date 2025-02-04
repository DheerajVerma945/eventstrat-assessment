import { Search } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white h-full font-semibold p-6 md:p-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-8 mx-auto md:mx-16">
          <img src="/logoFooter.png" alt="CultivAlte Logo" className="w-60" />
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search CultivAlte"
              className="w-full md:w-96 p-3 pl-5 pr-12 rounded-full border-2 outline-white text-white placeholder-gray-400"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full xl:ml-[200px]">
          <div>
            <h2 className="text-lg font-semibold mb-4 whitespace-nowrap">
              Useful Links
            </h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Commodity Finder
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="#" className="hover:text-gray-300">
                  Market Insights
                </a>
                <span className="bg-[#343434] border border-gray-300 text-xs px-2 py-1 rounded-md">
                  New
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-[#ab8513] pb-7 mt-8 pt-6 text-sm text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mx-4 md:mx-20 text-lg">
          <p>&copy; 2024 Global Ispice Platforms Pvt Ltd</p>
          <div className="flex gap-5 text-lg mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="34"
                height="34"
                fill="currentColor"
                className="text-white"
              >
                <path d="M 5.92 6 L 20.58 27.375 L 6.23 44 L 9.41 44 L 21.99 29.42 L 31.99 44 L 44 44 L 28.68 21.67 L 42.2 6 L 39.03 6 L 27.28 19.62 L 17.93 6 L 5.92 6 z"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="34"
                height="34"
                fill="currentColor"
                className="text-white"
                viewBox="0 0 30 30"
              >
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 30 30"
                width="34"
                height="34"
                fill="currentColor"
                className="text-white"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center md:justify-evenly gap-5 mt-7 w-full">
        <span className="hover:text-gray-400 cursor-pointer">Terms</span>
        <span className="hover:text-gray-400 cursor-pointer">Cookie Policy</span>
        <span className="hover:text-gray-400 cursor-pointer">
          Cookie Settings | Your Privacy Choices
        </span>
        <span className="hover:text-gray-400 cursor-pointer">Disclaimer</span>
        <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
        <span>CultivAIte® is part of Global Ispice Platforms Pvt Ltd</span>
      </div>
    </footer>
  );
}
