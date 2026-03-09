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
              <p>Konsentrasi</p>
            </div>
            <div>
              <h1
                className={
                  "text-3xl font-bold py-2 mb-2 " + montserrat.className
                }
              >
                Konsentrasi Pembimbingan
              </h1>
              <p className=" mb-4">
                Program Studi Program Profesi Insinyur, Untirta menawarkan
                konsentrasi pembimbingan dari Program Studi Sarjana (S1),
                Sarjana Terapan (S1T) atau DIV pada cakupan disiplin teknik
                keinsinyuran berikut ini (PP 25 Tahun 2019):
              </p>
              <h1
                className={
                  "text-xl font-bold py-2 mb-2 " + montserrat.className
                }
              >
                Sarjana (S1) teknik / D4 teknik
              </h1>
              <ol className="list-decimal mb-2 pl-8">
                <li>) Teknik Bangunan (Sipil atau Arsitektur)</li>
                <li>) Teknik Perencanaan Perkotaan dan Wilayah</li>
                <li>) Teknik Industri</li>
                <li>) Teknik Mesin</li>
                <li>) Teknik Kimia</li>
                <li>) Teknik Material</li>
                <li>) Teknik Elektro</li>
                <li>) Teknik Telekomunikasi</li>
                <li>) Teknik Informatika/ Informatika</li>
                <li>) Teknik Metalurgi</li>
                <li>) Teknik Lingkungan</li>
                <li>) Teknik Kelautan</li>
                <li>) Teknik Perkapalan.</li>
              </ol>
              <h1
                className={
                  "text-xl font-bold py-2 mb-2 " + montserrat.className
                }
              >
                S.Si dengan Pilihan Bidang
              </h1>
              Matematika/Fisika/Kimia/Geografi/Astronomi/Lainnya
              <h1
                className={
                  "text-xl font-bold py-2 mb-2 " + montserrat.className
                }
              >
                S.Pd Teknik
              </h1>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
