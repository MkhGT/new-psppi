import Header_one from "../../components/Header_one";
import Header_two from "../../components/Header_two";
import Footer from "../../components/Footer";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import { Montserrat } from "next/font/google";

import { Suspense } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

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
              <p>Managemen</p>
            </div>
            <div>
              <h2 className={"text-3xl font-bold py-2 mb-2 " + montserrat.className}>
                Manajemen dan Dosen
              </h2>

              <strong className="mb-2">MANAJEMEN PROGRAM STUDI PROGRAM PROFESI INSINYUR</strong>
              <p className="mb-7">
                <strong className="mb-2">Ketua Program Studi:</strong>Ir. Dedy Triawan Suprayog, S.T, M.Eng, PhD, IPM.<br />
                <br />
              </p>

              <h3 className="font-semibold text-lg">Dosen Pengampu Mata Kuliah :</h3>
              <table className="w-full mt-4 md:text-base text-xs">
                <thead>
                  <tr>
                    <th className="border border-gray-400 px-2 py-2">No</th>
                    <th className="border border-gray-400 py-2">NIP</th>
                    <th className="border border-gray-400 py-2">Nama Dosen</th>
                    <th className="border border-gray-400 py-2">Keterangan</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="border border-gray-400 py-2">1</td>
                    <td className="border border-gray-400 py-2">198710212012121001</td>
                    <td className="border border-gray-400 py-2">Dr. Eng. Ir. Teguh Firmansyah, M.T., IPM.</td>
                    <td className="border border-gray-400 py-2">Ir.,IPM,Dr.Eng</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">2</td>
                    <td className="border border-gray-400 py-2">197612132008121001</td>
                    <td className="border border-gray-400 py-2">Dr. Eng. Ir. Bobby Kurniawan, ST., MT., IPU.</td>
                    <td className="border border-gray-400 py-2">Ir.,IPU,Dr.Eng</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">3</td>
                    <td className="border border-gray-400 py-2">197712212009121002</td>
                    <td className="border border-gray-400 py-2">Dr. Ir. Sirajuddin, ST., MT.,IPU.</td>
                    <td className="border border-gray-400 py-2">Ir.,IPU,DR.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">4</td>
                    <td className="border border-gray-400 py-2">1976601132009122001</td>
                    <td className="border border-gray-400 py-2">Dr. Marta Pramudita, S.T., M.T</td>
                    <td className="border border-gray-400 py-2">Dr.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">5</td>
                    <td className="border border-gray-400 py-2">198403132019032009</td>
                    <td className="border border-gray-400 py-2">Shofiatul Ula, M.Eng</td>
                    <td className="border border-gray-400 py-2">M.Eng</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">6</td>
                    <td className="border border-gray-400 py-2"></td>
                    <td className="border border-gray-400 py-2">Ir. Wahidin, ST., MM</td>
                    <td className="border border-gray-400 py-2">Ir,IPM,Asean,. Eng</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">7</td>
                    <td className="border border-gray-400 py-2"></td>
                    <td className="border border-gray-400 py-2">Ir. Ediyanto Arief, ST, SH, MP, MT</td>
                    <td className="border border-gray-400 py-2">Ir, IPU</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
