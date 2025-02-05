import { Search } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white h-full mt-10 font-semibold p-6 md:p-12">
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
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.9455 22.5L10.396 14.5901L3.44886 22.5H0.509766L9.09209 12.7311L0.509766 0.5H8.05571L13.286 7.95502L19.8393 0.5H22.7784L14.5943 9.81648L23.4914 22.5H15.9455ZM19.2185 20.27H17.2398L4.71811 2.73H6.6971L11.7121 9.75316L12.5793 10.9719L19.2185 20.27Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.2234 0.5H1.77187C0.792187 0.5 0 1.27344 0 2.22969V22.7656C0 23.7219 0.792187 24.5 1.77187 24.5H22.2234C23.2031 24.5 24 23.7219 24 22.7703V2.22969C24 1.27344 23.2031 0.5 22.2234 0.5ZM7.12031 20.9516H3.55781V9.49531H7.12031V20.9516ZM5.33906 7.93438C4.19531 7.93438 3.27188 7.01094 3.27188 5.87187C3.27188 4.73281 4.19531 3.80937 5.33906 3.80937C6.47813 3.80937 7.40156 4.73281 7.40156 5.87187C7.40156 7.00625 6.47813 7.93438 5.33906 7.93438ZM20.4516 20.9516H16.8937V15.3828C16.8937 14.0562 16.8703 12.3453 15.0422 12.3453C13.1906 12.3453 12.9094 13.7937 12.9094 15.2891V20.9516H9.35625V9.49531H12.7687V11.0609H12.8156C13.2891 10.1609 14.4516 9.20938 16.1813 9.20938C19.7859 9.20938 20.4516 11.5813 20.4516 14.6656V20.9516Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5C0 18.4895 4.3882 23.454 10.125 24.3542V15.9688H7.07812V12.5H10.125V9.85625C10.125 6.84875 11.9166 5.1875 14.6576 5.1875C15.9701 5.1875 17.3438 5.42188 17.3438 5.42188V8.375H15.8306C14.34 8.375 13.875 9.30008 13.875 10.25V12.5H17.2031L16.6711 15.9688H13.875V24.3542C19.6118 23.454 24 18.4895 24 12.5Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center md:justify-evenly gap-5 mt-7 w-full">
        <span className="hover:text-gray-400 cursor-pointer">Terms</span>
        <span className="hover:text-gray-400 cursor-pointer">
          Cookie Policy
        </span>
        <span className="hover:text-gray-400 cursor-pointer">
          Cookie Settings | Your Privacy Choices
        </span>
        <span className="hover:text-gray-400 cursor-pointer">Disclaimer</span>
        <span className="hover:text-gray-400 cursor-pointer">
          Privacy Policy
        </span>
        <span>CultivAIte® is part of Global Ispice Platforms Pvt Ltd</span>
      </div>
    </footer>
  );
}
