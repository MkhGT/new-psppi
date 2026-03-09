import Header_one from "../../components/Header_one";
import Header_two from "../../components/Header_two";
import Footer from "../../components/Footer";
import { Montserrat } from "next/font/google";
import { IoHomeSharp } from "react-icons/io5";
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
            <div className="flex mb-7">
              <a href="/" className="hover:cursor-pointer">
                <IoHomeSharp className="inline-block text-sm hover:fill-blue-950 duration-300" />
              </a>
              <IoIosArrowForward className="mt-2 inline-block text-sm" />
              <p>Kurikulum</p>
            </div>
            <div>
              <h1
                className={
                  "text-3xl font-bold py-2 mb-2 " + montserrat.className
                }
              >
                Kurikulum
              </h1>

              <h2 className="text-3xl mb-2">
                Struktur Kurikulum PSPPI Untirta
              </h2>
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
                    <td className="border py-1">
                      Profesionalisme Keinsinyuran
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
                    <td className="border py-1">PII621105</td>
                    <td className="border py-1">
                      Keamanan, Kesehatan, Keselamatan Kerja dan Lingkungan
                      (K3L)
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

              {/* <h2 className="text-3xl mb-2">Kurikulum Kelas (RPL)</h2>
              <ul className="list-disc list-inside mb-24">
                <li className="mb-2"><strong>Penyelenggaraan RPL</strong> berdasarkan pada PermendikbudristekNomor 41 tahun 2021. Kelas RPL dapat ditempuh bila calon mahasiswa sudah menempuh pendidikan perguruan tinggi sebelumnya dan memiliki pengalaman bekerja dan kompetensi atau keterampilan yang sesuai dengan bidang keinsinyurannya.</li>
                <li className="mb-2"><strong>Tidak ada</strong> perkuliahan tatap muka, diganti dengan mengisi form capaian (FAIP)</li>
                <li className="mb-2">Waktu perkuliahan selama 1 semester</li>                
              </ul> */}

              <h2 className="text-3xl mb-2">
                Capaian Pembelajaran Lulusan Minimum:
              </h2>

              {/* Tabel 1 */}
              <h4 className="mt-10 mb-2 font-bold">
                Aspek Sikap CPL PSPPI Untirta
              </h4>
              <table className="table-auto w-full mb-24">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">No</th>
                    <th className="px-4 py-2 border">Capaian Pembelajaran</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center">1</td>
                    <td className="border px-4 py-2">
                      bertakwa kepada Tuhan Yang Maha Esa dan mampu menunjukkan
                      sikap religius
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">2</td>
                    <td className="border px-4 py-2">
                      menjunjung tinggi nilai kemanusiaan dalam menjalankan
                      tugas berdasarkan agama, moral, dan etika
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">3</td>
                    <td className="border px-4 py-2">
                      berkontribusi dalam peningkatan mutu kehidupan
                      bermasyarakat, berbangsa, bernegara, dan kemajuan
                      peradaban berdasarkan Pancasila
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">4</td>
                    <td className="border px-4 py-2">
                      berperan sebagai warga negara yang bangga dan cinta tanah
                      air, memiliki nasionalisme serta rasa tanggung jawab pada
                      negara dan bangsa
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">5</td>
                    <td className="border px-4 py-2">
                      menghargai keanekaragaman budaya, pandangan, agama, dan
                      kepercayaan, serta pendapat atau temuan orisinal orang
                      lain
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">6</td>
                    <td className="border px-4 py-2">
                      bekerja sama dan memiliki kepekaan sosial serta kepedulian
                      terhadap masyarakat dan lingkungan
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">7</td>
                    <td className="border px-4 py-2">
                      taat hukum dan disiplin dalam kehidupan bermasyarakat dan
                      bernegara
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">8</td>
                    <td className="border px-4 py-2">
                      menginternalisasi nilai, norma, dan etika akademik
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">9</td>
                    <td className="border px-4 py-2">
                      menunjukkan sikap bertanggungjawab atas pekerjaan di
                      bidang keahliannya secara mandiri
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">10</td>
                    <td className="border px-4 py-2">
                      menginternalisasi semangat kemandirian, kejuangan, dan
                      kewirausahaan
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Tabel 2 */}
              <h4 className="mt-10 mb-2 font-bold">
                Aspek Pengetahuan CPL PSPPI Untirta
              </h4>
              <table className="table-auto w-full mb-24">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">No</th>
                    <th className="px-4 py-2 border">Capaian Pembelajaran</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center">1</td>
                    <td className="border px-4 py-2">
                      Memiliki pengetahuan terkait etika dan kode etik profesi
                      insinyur dan mampu mengidentifikasi teori-teori,
                      konsep-konsep, dan praktik dasar tentang etika dan kode
                      etik profesi insinyur
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">2</td>
                    <td className="border px-4 py-2">
                      Memiliki pengetahuan terkait keselamatan, kesehatan,
                      keamanan kerja dan lingkungan serta mampu menerapkan
                      pengetahuan dan pemahaman atas pengelolaan lingkungan,
                      termasuk analisis lingkungan, proses, prosedur, dan
                      praktik keamanan kerja yang efektif
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">3</td>
                    <td className="border px-4 py-2">
                      Memiliki pengetahuan matematika, sains, konsep keteknikan,
                      dan dasar-dasar komunikasi yang efektif serta mampu
                      memahamipengetahuan dasar untuk pengembangan karakter
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">4</td>
                    <td className="border px-4 py-2">
                      Mampu mengikuti perkembangan ilmu pengetahuan dan
                      teknologi yang berhubungan dengan bidang keinsinyuran
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">5</td>
                    <td className="border px-4 py-2">
                      Menguasai konsep umum, prinsip, dan teknik komunikasi
                      untuk menyampaikan hasil kegiatan/pekerjaan dalam bentuk
                      lisan maupun tulisan
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Tabel 3 */}
              <h4 className="mt-10 mb-2 font-bold">
                Aspek Keterampilan Umum CPL PSPPI Untirta
              </h4>
              <table className="table-auto w-full mb-24">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">No</th>
                    <th className="px-4 py-2 border">Capaian Pembelajaran</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center">1</td>
                    <td className="border px-4 py-2">
                      mampu bekerja di bidang keahlian pokok untuk jenis
                      pekerjaan yang spesifik dan memiliki kompetensi kerja yang
                      minimal setara dengan standar kompetensi kerja profesinya
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">2</td>
                    <td className="border px-4 py-2">
                      mampu membuat keputusan yang independen dalam menjalankan
                      pekerjaan profesinya berdasarkan pemikiran logis, kritis,
                      sistematis, dan kreatif
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">3</td>
                    <td className="border px-4 py-2">
                      mampu mengomunikasikan pemikiran/argumen atau karya
                      inovasi yang bermanfaat bagi pengembangan profesi dan
                      kewirausahaan, yang dapat dipertanggungjawabkan secara
                      ilmiah dan etika profesi, kepada masyarakat terutama
                      masyarakat profesinya
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">4</td>
                    <td className="border px-4 py-2">
                      mampu melakukan evaluasi secara kritis terhadap hasil
                      kerja dan keputusan yang dibuat dalam melaksanakan
                      pekerjaannya oleh dirinya sendiri dan oleh sejawat
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">5</td>
                    <td className="border px-4 py-2">
                      mampu meningkatkan keahlian keprofesiannya pada bidang
                      yang khusus melalui pelatihan dan pengalaman kerja
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">6</td>
                    <td className="border px-4 py-2">
                      mampu meningkatkan mutu sumber daya untuk pengembangan
                      program strategis organisasi
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">7</td>
                    <td className="border px-4 py-2">
                      mampu memimpin suatu tim kerja untuk memecahkan masalah
                      pada bidang profesinya
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">8</td>
                    <td className="border px-4 py-2">
                      mampu bekerja sama dengan profesi lain yang sebidang dalam
                      menyelesaikan masalah pekerjaan bidang profesinya
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">9</td>
                    <td className="border px-4 py-2">
                      mampu mengembangkan dan memelihara jaringan kerja dengan
                      masyarakat profesi dan kliennya
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">10</td>
                    <td className="border px-4 py-2">
                      mampu bertanggungjawab atas pekerjaan di bidang profesinya
                      sesuai dengan kode etik profesinya
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">11</td>
                    <td className="border px-4 py-2">
                      mampu meningkatkan kapasitas pembelajaran secara mandiri
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">12</td>
                    <td className="border px-4 py-2">
                      mampu berkontribusi dalam evaluasi atau pengembangan
                      kebijakan nasional dalam rangka peningkatan mutu
                      pendidikan profesi atau pengembangan kebijakan nasional
                      pada bidang profesinya
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">13</td>
                    <td className="border px-4 py-2">
                      mampu mendokumentasikan, menyimpan, mengaudit,
                      mengamankan, dan menemukan kembali data dan informasi
                      untuk keperluan pengembangan hasil kerja profesinya
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Tabel 4 */}
              <h4 className="mt-10 mb-2 font-bold">
                Aspek Keterampilan Khusus CPL PSPPI Untirta
              </h4>
              <table className="table-auto w-full mb-24">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">No</th>
                    <th className="px-4 py-2 border">Capaian Pembelajaran</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center">1</td>
                    <td className="border px-4 py-2">
                      Mampu melakukan praktik keinsinyuran secara professional
                      dan etis
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">2</td>
                    <td className="border px-4 py-2">
                      Mampu mengidentifikasi, memformulasikan, dan menyelesaikan
                      permasalahan di bidang keinsinyuran dengan menerapkan
                      pengetahuan matematika, sains, dan konsep keteknikan
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">3</td>
                    <td className="border px-4 py-2">
                      Mampu melakukan perancangan, eksperimen, termasuk analisis
                      dan interpretasi data sesuai bidang keinsinyurannya
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">4</td>
                    <td className="border px-4 py-2">
                      Mampu merancang sistem, komponen, atau proses untuk
                      memenuhi kebutuhan atau menyelesaikan permasalahan dalam
                      batasan-batasan yang realistis, misalnya batasan terkait
                      ekonomi, lingkungan, sosial, kesehatan, politik,
                      keselamatan, kesehatan, manufakturabilitas, dan
                      kelestarian berdasarkan standar-standar yang berlaku
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">5</td>
                    <td className="border px-4 py-2">
                      Mampu berkontribusi baik promotif maupun preventif dalam
                      menyelesaikan permasalahan lingkungan fisik masyarakat
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">6</td>
                    <td className="border px-4 py-2">
                      Mempunyai keterampilan organisasi dan mampu membangun
                      hubungan interpersonal dalam melakukan praktik
                      keinsinyuran
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
