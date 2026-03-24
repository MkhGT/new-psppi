"use client";
import Image from "next/image";
import { Nunito_Sans, Montserrat } from "next/font/google";
import { VscSearch } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], weights: [700] });
const montserrat = Montserrat({ subsets: ["latin"], weights: [700] });

export default function Header_two() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const searchBtn = useRef();
  const router = useRouter();

  const [menuOpen, setMenu] = useState(false);
  const [profilOpen, setProfil] = useState(false);
  const [pendaftaranOpen, setPendaftaran] = useState(false);
  const [input, setInput] = useState(search ? search : "");

  function openProfil() {
    if (profilOpen) {
      setProfil(false);
    } else {
      setProfil(true);
    }
  }

  function openPendaftaran() {
    if (pendaftaranOpen) {
      setPendaftaran(false);
    } else {
      setPendaftaran(true);
    }
  }

  function openMenu() {
    if (menuOpen) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }

  function inputSearch() {
    if (input === "") {
      searchBtn.current.click();
    } else {
      router.push(`/news`);
    }
  }

  return (
    <div className="bg-transparent shadow py-3">
      <div className="flex justify-center">
        <div className="lg:w-[100%] w-[100%] lg:mx-0 mx-4 flex flex-col lg:flex-row justify-between px-3">
          <div className="flex justify-center">
            <div
              className={
                "text-[#05285E] text-2xl font-extrabold self-center " +
                montserrat.className
              }
            >
              <p>PROGRAM STUDI</p>
              <p>PROGRAM PROFESI INSINYUR</p>
              <p>UNIVERSITAS SULTAN AGENG TIRTAYASA</p>
            </div>
          </div>
          <div className="flex lg:justify-end justify-center">
            <div className="flex justify-between items-center">
              <Image
                src="/images/kemendikbud2.png"
                alt="Kemendikbud"
                className="object-cover md:p-1 w-[50%] lg:h-[120px] h-[100px] object-right"
                width={1920}
                height={1080}
              />
              <Image
                src="/images/untirtalogo.jpg"
                alt="Unitrta Logo"
                className="object-cover md:p-1 w-[50%] lg:h-[120px] h-[100px] object-right"
                width={1920}
                height={1080}
              />
              <Image
                src="/images/kampusmerdeka.png"
                alt="PII Logo"
                className="object-cover md:p-5 p-3 w-[50%] lg:h-[120px] h-[100px] object-right"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F4D77B] w-[100%] my-3 md:flex justify-between text-[#05285E] shadow-md">
        <div
          onClick={() => openMenu()}
          className={
            menuOpen
              ? "ml-3 menu-btn md:hidden block menOpen"
              : "ml-3 menu-btn md:hidden block"
          }
        ></div>

        <ul
          className={
            menuOpen
              ? "md:flex items-center flex-wrap md:w-[85%]"
              : "md:flex items-center flex-wrap md:w-[85%] hidden"
          }
        >
          <a href="/">
            <li className="md:text-center cursor-pointer text-sm md:border-r border-[#05285E]/20 p-2 border-b border-[#05285E]/10 hover:bg-[#E6C229] transition">
              Home
            </li>
          </a>

          <li
            onMouseLeave={() => openProfil()}
            onMouseEnter={() => openProfil()}
            className="md:flex hidden items-center text-center text-sm md:border-r border-[#05285E]/20 p-2 hover:bg-[#E6C229] relative transition"
          >
            <p>Profil</p>
            <IoIosArrowDown className="text-xs ml-1" />

            <div
              className={
                profilOpen
                  ? "bg-[#F4D77B] border border-[#05285E]/10 shadow-lg absolute left-0 top-9 md:w-56 z-30 w-[100%]"
                  : "hidden"
              }
            >
              <ul>
                {[
                  "Visi-Misi",
                  "Kurikulum",
                  "Manajemen & Dosen",
                  "Konsentrasi Pembimbingan",
                ].map((item, i) => (
                  <a key={i} href="#">
                    <li className="p-2 border-b border-[#05285E]/10 hover:bg-[#E6C229] transition">
                      {item}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          </li>

          {[
            "Biaya Perkuliahan",
            "Jadwal Kegiatan",
            "News",
            "Kontak & Info",
            "Download",
            "Sistem Perkuliahan",
          ].map((item, i) => (
            <a key={i} href="#">
              <li className="md:border-r border-[#05285E]/20 p-2 text-sm hover:bg-[#E6C229] transition border-b border-[#05285E]/10">
                {item}
              </li>
            </a>
          ))}
        </ul>

        <div className="md:flex items-center md:w-[15%] justify-evenly px-2">
          <input
            value={input}
            type="text"
            placeholder="Search"
            className="bg-white/40 text-[#05285E] placeholder-[#05285E]/60 p-2 w-full rounded-md outline-none"
            onInput={(e) => setInput(e.target.value)}
          />
          <VscSearch className="ml-2 cursor-pointer hover:text-white transition" />
        </div>
      </div>
    </div>
  );
}
