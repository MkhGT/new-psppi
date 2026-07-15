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
              <h2
                className={
                  "text-3xl font-bold py-2 mb-2 " + montserrat.className
                }
              >
                Manajemen dan Dosen
              </h2>

              <strong className="mb-2">
                MANAJEMEN PROGRAM STUDI PROGRAM PROFESI INSINYUR
              </strong>
              <p className="mb-7">
                <strong className="mb-2">Ketua Program Studi:</strong> Ir. Dedy
                Triawan Suprayog, S.T, M.Eng, PhD, IPM.
                <br />
                <br />
              </p>

              <h3 className="font-semibold text-lg">
                Dosen Pengampu Mata Kuliah :
              </h3>
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
                    <td className="border border-gray-400 py-2">
                      196810221997021001
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof. Dr. Ir. H. Fatah Sulaiman, S.T., M.T.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof., Dr., Ir.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">2</td>
                    <td className="border border-gray-400 py-2">
                      197607242001121001
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof. Dr.-Ing. Ir. Asep Ridwan, S.T., M.T., IPU.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof., Dr.-Ing., Ir., IPU.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">3</td>
                    <td className="border border-gray-400 py-2">
                      197405232001121002
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof. Ir. Alfirano, S.T., M.T., Ph.D.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof., Ir., Ph.D.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">4</td>
                    <td className="border border-gray-400 py-2">
                      197606082002121003
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof. Dr. Ir. Wahyu Susihono, IPM., ASEAN Eng.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof., Dr., Ir., IPM., ASEAN Eng.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">5</td>
                    <td className="border border-gray-400 py-2">
                      197705292003121002
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof. Dr. Ir. Jayanudin, S.T., M.T., IPM.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof., Dr., Ir., IPM.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">6</td>
                    <td className="border border-gray-400 py-2">
                      198508212010121006
                    </td>
                    <td className="border border-gray-400 py-2">
                      Dr. Eng. Ir. Teguh Firmansyah, M.T., IPM.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Dr. Eng., Ir., IPM.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">7</td>
                    <td className="border border-gray-400 py-2">
                      197507112002121001
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof. Dr. Ir. Supriyanto, S.T., M.Sc., IPM.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof., Dr., Ir., IPM.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">8</td>
                    <td className="border border-gray-400 py-2">
                      197902122005012002
                    </td>
                    <td className="border border-gray-400 py-2">
                      Dr. Ir. Ririn Irnawati, S.Pi., M.Si.
                    </td>
                    <td className="border border-gray-400 py-2">Dr., Ir.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">9</td>
                    <td className="border border-gray-400 py-2">
                      197402122001121001
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof. Dr. Ir. Alimuddin, S.T., M.M., M.T.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof., Dr., Ir.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">10</td>
                    <td className="border border-gray-400 py-2">
                      197608172001122001
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof. Dr. Ir. Indar Kustiningsih, S.T., M.T., IPM.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof., Dr., Ir., IPM.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">11</td>
                    <td className="border border-gray-400 py-2">
                      197508252002121003
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof. Ir. Agus Pramono, S.T., M.T., Ph.D., Tech.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof., Ir., Ph.D.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">12</td>
                    <td className="border border-gray-400 py-2">
                      198005042003122001
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof. Dr. Ir. Eka Sari, M.T., IPM., ASEAN Eng.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Prof., Dr., Ir., IPM., ASEAN Eng.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">13</td>
                    <td className="border border-gray-400 py-2">
                      197908152005011002
                    </td>
                    <td className="border border-gray-400 py-2">
                      Dr. Eng. Ir. Bobby Kurniawan, S.T., M.T., IPU.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Dr. Eng., Ir., IPU.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">14</td>
                    <td className="border border-gray-400 py-2">
                      197508052002121004
                    </td>
                    <td className="border border-gray-400 py-2">
                      Dr. Ir. Sirajuddin, S.T., M.T., IPU.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Dr., Ir., IPU.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">15</td>
                    <td className="border border-gray-400 py-2">
                      197708302003121001
                    </td>
                    <td className="border border-gray-400 py-2">
                      Dr. Eng. Ir. Agung Sudrajad, S.T., M.Eng., IPM.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Dr. Eng., Ir., IPM.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">16</td>
                    <td className="border border-gray-400 py-2">
                      196811221998021001
                    </td>
                    <td className="border border-gray-400 py-2">
                      Dr. Ir. Ediyanto Arief, S.T., S.H., M.P., M.T., IPU.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Dr., Ir., IPU.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">17</td>
                    <td className="border border-gray-400 py-2">
                      198512302012121003
                    </td>
                    <td className="border border-gray-400 py-2">
                      Ir. Dhimas Satria, S.T., M.Eng.
                    </td>
                    <td className="border border-gray-400 py-2">Ir., M.Eng.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">18</td>
                    <td className="border border-gray-400 py-2">
                      198412122010121006
                    </td>
                    <td className="border border-gray-400 py-2">
                      Ir. Dedy Triawan Suprayogi, S.T., M.Eng., Ph.D., IPM.,
                      C.Eng.
                    </td>
                    <td className="border border-gray-400 py-2">
                      Ir., Ph.D., IPM., C.Eng.
                    </td>
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
