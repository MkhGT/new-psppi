import { FaSearch } from "react-icons/fa";
import "./Headerone.css";

export default function Header_one() {
  return (
    <div className="bg-[#F4D77B] shadow py-3">
      <div className="flex justify-center">
        <div className="lg:w-[78%] w-[100%] lg:mr-0 mr-4">
          <div className="text-[#05285E] text-xs flex justify-end">
            <a
              href="https://untirta.ac.id"
              target="_blank"
              className="hover:text-white"
            >
              UNTIRTA.ac.id
            </a>
            <div className="flex searchButton pt-0.5 ml-4 cursor-pointer hover:text-white">
              <input
                type="text"
                className="searchInput bg-transparent border-b border-gray-300 text-[#05285E] focus:outline-none focus:border-white"
                placeholder="Cari di sini"
              />
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
