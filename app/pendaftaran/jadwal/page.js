import Header_one from "../../components/Header_one";
import Header_two from "../../components/Header_two";
import Footer from "../../components/Footer";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

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
              <h1 className="text-sm font-bold ml-1 mt-1">
                Jadwal Pendaftaran
              </h1>
            </div>

            <h1 className={"text-3xl font-bold mb-16 " + montserrat.className}>
              Jadwal Pendaftaran
            </h1>

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

            <h1 className={"text-3xl font-bold mb-16 " + montserrat.className}>
              Biaya Pendaftaran
            </h1>

            <table className="table-auto w-full mb-16">
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Pendaftaran</td>
                  <td className="border px-4 py-2">Rp. 500.000,00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    SPP per Semester Kelas PSPPI
                  </td>
                  <td className="border px-4 py-2">Rp. 8.500.000,00</td>
                </tr>
                {/* <tr>
                  <td className="border px-4 py-2">SPP per Semester Program RPL</td>
                  <td className="border px-4 py-2">Rp. 8.000.000,00</td>
                </tr> */}
                {/* <tr>
                  <td className="border px-4 py-2">Jaket Almamater, Kartu Perpustakaan</td>
                  <td className="border px-4 py-2">Rp. 550.000,00</td>
                </tr> */}
              </tbody>
            </table>

            <p className="mb-2 font-bold">Pendaftaran:</p>
            <p>Untuk melakukan pendaftaran, silahkan tekan link berikut.</p>
            <a
              className="text-blue-800 hover:text-black underline hover:no-underline"
              href="https://penerimaan.untirta.ac.id"
              target="_blank"
            >
              Daftar Sekarang
            </a>

            {/* <p className="mb-2 font-bold">Pengumuman Hasil Seleksi:</p>

            <p className="mb-2">
              Hasil seleksi diumumkan pada tanggal 31 Juli 2019 di Website
              Seleksi Masuk Untirta (SMITS){" "}
              <a href="https://untirta.ac.id/" style={{ color: "blue" }}>
                https://untirta.ac.id/
              </a>
            </p>

            <p className="mb-2 ">Melakukan Pembayaran SPP</p>

            <p className="mb-2 font-bold">
              Pendaftaran Ulang dan Penerimaan Mahasiswa
            </p>

            <p className="mb-2">
              Peserta yang dinyatakan lulus ujian masuk diwajibkan melakukan
              kegiatan berikut:
            </p>

            <table className="border-collapse w-full mb-2">
              <tbody>
                <tr>
                  <td className="border p-2 font-bold" colSpan="3">
                    Pengisian data secara online
                  </td>
                </tr>                
                <tr>
                  <td className="border p-2 font-bold">Tanggal</td>
                  <td className="border p-2">:</td>
                  <td className="border p-2">
                    <br />
                    2– 4 Agustus 2019
                  </td>
                </tr>

                <tr>
                  <td className="border p-2 font-bold" colSpan="3">
                    Bayar SPP (Pembayaran Biaya Pendidikan Semester)
                  </td>
                </tr>

                <tr>
                  <td className="border p-2 font-bold">Tanggal</td>
                  <td className="border p-2">:</td>
                  <td className="border p-2">
                    <br />
                    6-9 Agustus 2019
                  </td>
                </tr>

                
                <tr>
                  <td className="border p-2 font-bold" colSpan="3">
                    Verifikasi biodata (secara online dan harus datang ke BAKPM)
                  </td>
                </tr>

                
                <tr>
                  <td className="border p-2 font-bold">Tanggal</td>
                  <td className="border p-2">:</td>
                  <td className="border p-2">
                    <br />
                    6-11 Agustus 2019
                  </td>
                </tr>

                
                <tr>
                  <td className="border p-2 font-bold" colSpan="3">
                    Perwalian Mahasiswa (FRS Online)
                  </td>
                </tr>

                
                <tr>
                  <td className="border p-2 font-bold">Tanggal</td>
                  <td className="border p-2">:</td>
                  <td className="border p-2">
                    <br />
                    19-23 Agustus 2019
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mb-2 font-bold"> Biaya Pendidikan</p>

            <p className="mb-3">
              Setelah dinyatakan diterima, calon mahasiswa diwajibkan membayar
              biaya Program Profesi Insinyur (PPI) sebesar Rp. 12.500.000,- (dua
              belas juta lima ratus ribu rupiah). Biaya PPI sudah termasuk biaya
              pendaftaran keanggotaan PII (Persatuan Insinyur Indonesia) dan
              iuran tahun pertama. Biaya Sertifikasi Insinyur Profesional
              Pratama (IPP), Sertifikasi Insinyur Profesional Madya (IPM) atau
              Sertifikasi Insinyur Profesional Utama ditanggung sendiri oleh
              mahasiswa dengan besaran mengacu pada biaya di Persatuaan Insinyur
              Indonesia (PII), yang dibayarkan jika mahasiswa mengajukan dan
              lolos IPP/IPM/IPU dan dibayar sendiri oleh mahasiswa ke PII.
            </p> */}
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
