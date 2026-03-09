import Header_one from "../components/Header_one";
import Header_two from "../components/Header_two";
import Footer from "../components/Footer";

import { Montserrat } from "next/font/google";

import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
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
            <div className="flex mb-6 text-sm">
              <div className="flex pt-[2px] ml-1">
                <a href="/" className="text-blue-500 hover:text-red-600 mr-2">
                  <FaHome />
                </a>
                <IoIosArrowForward className="mr-2" />
              </div>
              <p className="font-bold">Sistem Perkuliahan</p>
            </div>

            <h1 className={"text-3xl font-bold mb-16 " + montserrat.className}>
              Sistem Perkuliahan
            </h1>

            {/* <h2 className="text-2xl mb-2">
              Kelas Rekognisi Pembelajaran Lampau (RPL){" "}
            </h2>
            <ul className="list-disc list-inside mb-16">
              <li className="mb-2">
                <strong>Penyelenggaraan RPL</strong> berdasarkan pada
                PermendikbudristekNomor 41 tahun 2021. Kelas RPL dapat ditempuh
                bila calon mahasiswa sudah menempuh pendidikan perguruan tinggi
                sebelumnya dan memiliki pengalaman bekerja dan kompetensi atau
                keterampilan yang sesuai dengan bidang keinsinyurannya.
              </li>
              <li className="mb-2">
                <strong>Tidak ada</strong> perkuliahan tatap muka, diganti
                dengan mengisi form capaian (FAIP)
              </li>
              <li className="mb-2">Waktu perkuliahan selama 1 semester</li>
            </ul> */}

            <h2 className="text-2xl mb-2">Kelas PSPPI UNTIRTA</h2>
            <p>
              Kelas regular merupakan program yang diadakan dengan cara
              mengikuti perkuliahan selama 11 minggu (1 semester dan 5 minggu)
              baik secara offline maupun online pada jawal yang telah
              ditentukan. Adapun matakuliah yang diselengarakan diantaranya
              berikut ini.
            </p>
            <table className="table-auto w-full mb-16 md:text-base text-xs text-center">
              <thead>
                <tr>
                  <th className="py-2 border-x border-t">Semester</th>
                  <th className="py-2 border-x border-t">Kode Mata Kuliah</th>
                  <th className="py-2 border-x border-t">Mata Kuliah</th>
                  <th className="py-2 border" colSpan={6}>
                    Bobot SKS
                  </th>
                </tr>
                <tr>
                  <th className="py-2 border-x border-b"></th>
                  <th className="py-2 border-x border-b"></th>
                  <th className="py-2 border-x border-b"></th>
                  <th className="py-2 border" colSpan={3}>
                    Tatap Muka
                  </th>
                  <th className="py-2 border" colSpan={3}>
                    Praktik
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-l py-1 text-center">1</td>
                  <td className="border py-1">PII621101</td>
                  <td className="border py-1">Kode Etik dan Etika Profesi</td>
                  <td className="border py-1 text-center" colSpan={3}>
                    1
                  </td>
                  <td className="border py-1 text-center" colSpan={3}>
                    1
                  </td>
                </tr>
                <tr>
                  <td className="border-l py-1 text-center"></td>
                  <td className="border py-1">PII621103</td>
                  <td className="border py-1">Profesionalisme Keinsinyuran</td>
                  <td className="border py-1 text-center" colSpan={3}>
                    1
                  </td>
                  <td className="border py-1 text-center" colSpan={3}>
                    1
                  </td>
                </tr>
                <tr>
                  <td className="border-l py-1 text-center"></td>
                  <td className="border py-1">PII621105</td>
                  <td className="border py-1">
                    Keamanan, Kesehatan, Keselamatan Kerja dan Lingkungan (K3L)
                  </td>
                  <td className="border py-1 text-center" colSpan={3}>
                    1
                  </td>
                  <td className="border py-1 text-center" colSpan={3}>
                    1
                  </td>
                </tr>
                <tr>
                  <td className="border-l py-1 text-center"></td>
                  <td className="border py-1">PII621107</td>
                  <td className="border py-1">Praktek Keinsinyuran</td>
                  <td className="border py-1 text-center" colSpan={3}>
                    2
                  </td>
                  <td className="border py-1 text-center" colSpan={3}>
                    10
                  </td>
                </tr>
                <tr>
                  <td className="border-l py-1 text-center"></td>
                  <td className="border py-1"></td>
                  <td className="border py-1">Total</td>
                  <td className="border py-1 text-center" colSpan={3}>
                    5
                  </td>
                  <td className="border py-1 text-center" colSpan={3}>
                    13
                  </td>
                </tr>
                <tr>
                  <td className="border-l border-t py-1 text-center">2</td>
                  <td className="border py-1">PII621102</td>
                  <td className="border py-1">Studi Kasus</td>
                  <td className="border py-1 text-center" colSpan={3}>
                    1
                  </td>
                  <td className="border py-1 text-center" colSpan={3}>
                    3
                  </td>
                </tr>
                <tr>
                  <td className="border-l py-1 text-center"></td>
                  <td className="border py-1">PII621104</td>
                  <td className="border py-1">Seminar</td>
                  <td className="border py-1 text-center" colSpan={3}>
                    1
                  </td>
                  <td className="border py-1 text-center" colSpan={3}>
                    1
                  </td>
                </tr>
                <tr>
                  <td className="border-l border-b py-1 text-center"></td>
                  <td className="border py-1"></td>
                  <td className="border py-1">Total</td>
                  <td className="border py-1 text-center" colSpan={3}>
                    2
                  </td>
                  <td className="border py-1 text-center" colSpan={3}>
                    4
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
