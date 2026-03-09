import Header_one from "../components/Header_one";
import Header_two from "../components/Header_two";
import Footer from "../components/Footer";

import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-[100%]">
      <Header_one />
      <div className="flex flex-row justify-center">
        <div className="lg:w-[1024px] w-[100%] flex flex-col justify-center">
          <Suspense>
            <Header_two />
          </Suspense>
          <section className="p-8 bg-white text-gray-600">
            <div className="flex mb-7">
              <a href="/" className="hover:cursor-pointer">
                <IoHomeSharp className="inline-block text-sm hover:fill-blue-950 duration-300" />
              </a>
              <IoIosArrowForward className="mt-2 inline-block text-sm" />
              <h1 className="text-sm font-bold ml-1 mt-1">Jadwal Kegiatan</h1>
            </div>
            <h1 className="text-3xl font-bold mb-16">Jadwal Kegiatan</h1>
            <table className="table-auto w-full mb-16">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Kegiatan</th>
                  <th className="px-4 py-2 border">Hari</th>
                  <th className="px-4 py-2 border">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Periode Pendaftaran</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">
                    1 Juli - 25 Juli 2026
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Seleksi</td>
                  <td className="border px-4 py-2 text-center">Sabtu</td>
                  <td className="border px-4 py-2 text-center">27 Juli 2026</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Hasil Seleksi</td>
                  <td className="border px-4 py-2 text-center">Rabu</td>
                  <td className="border px-4 py-2 text-center">31 Juli 2026</td>
                </tr>
              </tbody>
            </table>
            <p>Untuk info lebih lanjut dapat mengunjungi website berikut :</p>
            <a
              className="text-blue-800 hover:text-black hover:no-underline underline"
              target="_blank"
              href="https://penerimaan.untirta.ac.id/"
            >
              Info Lanjut
            </a>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
