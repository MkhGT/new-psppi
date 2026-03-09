"use client";
import Header_one from "./components/Header_one";
import Header_two from "./components/Header_two";
import Footer from "./components/Footer";
import { Nunito_Sans } from "next/font/google";

import { FaFolderOpen } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { IoIosPricetag } from "react-icons/io";

import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative, Navigation } from "swiper/modules";

import { Suspense, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

register();

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export default function Home() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/local-data/data.json`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <main className="flex flex-col justify-center w-[100%]">
      <Header_one />
      <div className="flex flex-row justify-center">
        <div className="lg:w-[1024px] w-[100%] flex flex-col justify-center">
          <Suspense>
            <Header_two />
          </Suspense>
          <div className={"bg-white " + nunitoSans.className}>
            <Swiper
              className="swiper"
              effect="creative"
              direction={"horizontal"}
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, EffectCreative, Navigation]}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-20%", 0, -1],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              navigation={true}
              height={500}
            >
              <SwiperSlide>
                <div className="flex text-right">
                  <Image
                    alt=""
                    src="/images/vt1.jpg"
                    className="object-cover w-[50%] h-[300px] object-right"
                    width={1920}
                    height={1080}
                  />
                  <div className="self-center p-3 w-1/2 h-[300px]">
                    <h1 className="text-2xl font-bold text-amber-700 text-center h-[30%]">
                      Program Studi
                      <br /> Program Profesi Insinyur
                    </h1>
                    <p className="text-base text-center h-[70%]">
                      Untuk memenuhi kebutuhan jumlah insinyur di masa sekarang
                      ini, maka Pemerintah Republik Indonesia melalui Direktur
                      Jenderal Kelembagaan Ilmu Pengetahuan Teknologi dan
                      Pendidikan Tinggi yang berada di bawah Kementerian Riset,
                      Teknologi dan Pendidikan Tinggi memberikan mandat kepada
                      40 perguruan tinggi baik negeri maupun swasta untuk
                      menyelenggarakan Program Profesi Insinyur.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex text-right">
                  <Image
                    alt=""
                    src="/images/vt2.jpg"
                    className="object-cover w-[50%] h-[300px] object-left"
                    width={1920}
                    height={1080}
                  />
                  <div className="self-center p-3 w-1/2 h-[300px]">
                    <h1 className="text-2xl font-bold text-amber-700 text-center h-[30%]">
                      Program Studi
                      <br /> Program Profesi Insinyur
                    </h1>
                    <p className="text-base text-center h-[70%]">
                      Program Studi Program Profesi Insinyur (PSPPI) sebagai
                      lingkup dari amanat Undang-Undang Nomor 11 Tahun 2014
                      tentang Keinsinyuran merupakan upaya pemerintah
                      mempercepat terciptanya tenaga insinyur Indonesia yang
                      mandiri, bertanggung jawab, dan memiliki etika profesi
                      serta kualifikasi sesuai standar sertifikasi dalam waktu
                      yang mendesak.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex text-right">
                  <Image
                    alt=""
                    src="/images/vt4.jpg"
                    className="object-cover w-[50%] h-[300px] object-left"
                    width={1920}
                    height={1080}
                  />
                  <div className="self-center p-3 w-1/2 h-[300px]">
                    <h1 className="text-2xl font-bold text-amber-700 text-center h-[30%]">
                      Program Studi
                      <br /> Program Profesi Insinyur
                    </h1>
                    <p className="text-base text-center h-[70%]">
                      Para sarjana teknik/teknik terapan/sains yang mengikuti
                      PSPPI ini akan memperoleh sertifikat profesi Insinyur dan
                      berhak menggunakan gelar Insinyur (Ir.).
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex text-right">
                  <Image
                    alt=""
                    src="/images/vt3.jpg"
                    className="object-cover w-[50%] h-[300px] object-right"
                    width={1920}
                    height={1080}
                  />
                  <div className="self-center p-3 w-1/2 h-[300px]">
                    <h1 className="text-2xl font-bold text-amber-700 text-center h-[30%]">
                      Program Studi
                      <br /> Program Profesi Insinyur
                    </h1>
                    <p className="text-base text-center h-[70%]">
                      Program Pendidikan Reguler dan Program Rekognisi
                      Pembelajaran Lampau (RPL), dengan demikian UNTIRTA
                      <br />
                      memiliki wewenang memberikan Gelar Insinyur (Ir.) bagi
                      lulusan PSPPI. Pengelolaan PSPPI UNTIRTA dilaksanakan
                      <br />
                      di bawah Rektor UNTIRTA dan Wakil Rektor UNTIRTA.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex text-right">
                  <Image
                    alt=""
                    src="/images/vt5.jpg"
                    className="object-cover w-[50%] h-[300px] object-right"
                    width={1920}
                    height={1080}
                  />
                  <div className="self-center p-3 w-1/2 h-[300px]">
                    <h1 className="text-2xl font-bold text-amber-700 text-center h-[30%]">
                      Program Studi
                      <br /> Program Profesi Insinyur
                    </h1>
                    <p className="text-base text-center h-[70%]">
                      Untuk memenuhi kebutuhan jumlah insinyur di masa sekarang
                      ini, maka Pemerintah Republik Indonesia melalui Direktur
                      Jenderal Kelembagaan Ilmu Pengetahuan Teknologi dan
                      Pendidikan Tinggi yang berada di bawah Kementerian Riset,
                      Teknologi dan Pendidikan Tinggi memberikan mandat kepada
                      40 perguruan tinggi baik negeri maupun swasta untuk
                      menyelenggarakan Program Profesi Insinyur.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="mt-5 mb-5 flex flex-row justify-center">
              <ul className="flex flex-col lg:flex-row lg:justify-around lg:w-[100%]">
                <li>
                  <div className="text-center">
                    <div className="w-[180px] h-[180px] shadow-3xl rounded-full justify-center flex items-center hover:bg-blue-500 duration-500 mt-3 mx-auto">
                      <a href="/profil/about">
                        <Image
                          alt=""
                          src="/images/image1.jpg"
                          className="object-cover rounded-full w-[150px] h-[150px]"
                          width={200}
                          height={200}
                        />
                      </a>
                    </div>
                    <h3 className="text-amber-700 text-xl mt-2 hover:text-amber-950 duration-500">
                      <a href="/profil/about">Tentang PS PPI</a>
                    </h3>
                    <p href="/profil/about" className="w-[200px]">
                      Apa itu PS PPI?
                    </p>
                  </div>
                </li>
                <li>
                  <div className="text-center">
                    <div className="w-[180px] h-[180px] shadow-3xl rounded-full justify-center flex items-center hover:bg-blue-500 duration-500 mt-3 mx-auto">
                      <a href="/sistem-perkuliahan">
                        <Image
                          alt=""
                          src="/images/image2.jpg"
                          className="object-cover rounded-full w-[150px] h-[150px]"
                          width={200}
                          height={200}
                        />
                      </a>
                    </div>
                    <h3 className="text-amber-700 text-xl mt-2 hover:text-amber-950 duration-500">
                      <a href="/sistem-perkuliahan">PSPPI UNTIRTA</a>
                    </h3>
                    <p href="/sistem-perkuliahan" className="w-[200px]">
                      Penjelasan Kelas PSPPI UNTIRTA
                    </p>
                  </div>
                </li>
                {/* <li>
                  <div className="text-center">
                    <div className="w-[180px] h-[180px] shadow-3xl rounded-full justify-center flex items-center hover:bg-blue-500 duration-500 mt-3 mx-auto">
                      <a href="/sistem-perkuliahan">
                        <Image alt="" src="/images/image3.png" className="object-cover rounded-full w-[150px] h-[150px]" width={200} height={200} />
                      </a>
                    </div>
                    <h3 className="text-amber-700 text-xl mt-2 hover:text-amber-950 duration-500">
                      <a href="/sistem-perkuliahan">Program RPL</a>
                    </h3>
                    <p href="/sistem-perkuliahan" className="w-[200px]">Penjelasan Program Rekognisi Pembelajaran Lampau</p>
                  </div>
                </li> */}
                <li>
                  <div className="text-center">
                    <div className="w-[180px] h-[180px] shadow-3xl rounded-full justify-center flex items-center hover:bg-blue-500 duration-500 mt-3 mx-auto">
                      <a
                        target="_blank"
                        href="https://pmb.untirta.ac.id/pascasarjana-2024/"
                      >
                        <Image
                          alt=""
                          src="/images/image4.jpg"
                          className="object-cover rounded-full w-[150px] h-[150px]"
                          width={200}
                          height={200}
                        />
                      </a>
                    </div>
                    <h3 className="text-amber-700 text-xl mt-2 hover:text-amber-950 duration-500">
                      <a
                        target="_blank"
                        href="https://pmb.untirta.ac.id/pascasarjana-2024/"
                      >
                        Admisi
                      </a>
                    </h3>
                    <p
                      target="_blank"
                      href="https://pmb.untirta.ac.id/pascasarjana-2024/"
                      className="w-[200px]"
                    >
                      Penjelasan pendaftaran PS PPI
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Bagian Postingan */}
            <div className="grid md:grid-cols-2 grid-cols-1 mb-14">
              {post?.data.map((item, index) => {
                if (index === 0) {
                  return (
                    <div key={index} className="p-5">
                      <h2 className="text-xl font-bold border-b border-black mb-2">
                        Sekilas Prodi Program Profesi Insinyur Untirta
                      </h2>
                      <Image
                        alt=""
                        src="/images/article1.png"
                        className="object-cover w-[100%] h-[130px] border-4 mb-3"
                        width={1920}
                        height={1080}
                      />
                      <p className="mb-5 text-sm">
                        Untuk memenuhi kebutuhan jumlah insinyur di masa
                        sekarang ini, maka Pemerintah Republik Indonesia melalui
                        Direktur Jenderal Kelembagaan Ilmu Pengetahuan Teknologi
                        dan Pendidikan Tinggi yang berada di bawah Kementerian
                        Riset, Teknologi dan Pendidikan Tinggi memberikan mandat
                        kepada 40 perguruan tinggi baik negeri maupun swasta
                        untuk menyelenggarakan Program Profesi Insinyur. Program
                        Studi Program Profesi Insinyur (PSPPI) sebagai lingkup
                        dari amanat Undang-Undang Nomor 11 Tahun 2014 tentang
                        Keinsinyuran merupakan upaya pemerintah mempercepat
                        terciptanya tenaga insinyur Indonesia yang mandiri,
                        bertanggung jawab, dan memiliki etika profesi serta
                        kualifikasi sesuai standar sertifikasi dalam waktu yang
                        mendesak.
                      </p>
                      <a
                        href="/post/1"
                        className="bg-gray-300 p-2 border-b border-black rounded-md hover:bg-gray-400 active:bg-gray-500 active:text-white duration-200"
                      >
                        Continue Reading
                      </a>
                      <div className="mt-5">
                        <div className="flex">
                          <FaClock className="mt-[2px] mr-2" />
                          <p className="text-sm mr-7">12 February 2024</p>
                          <FaFolderOpen className="mt-[2px] mr-2" />
                          <p className="text-sm">
                            <a href="#" className="text-blue-950">
                              info
                            </a>
                          </p>
                        </div>
                        <div className="flex mt-3">
                          <IoIosPricetag className="mt-[2px] mr-1" size={30} />
                          <p className="text-sm mr-7">
                            <a
                              href="#"
                              className="text-blue-800 hover:text-blue-950"
                            >
                              prodi profesi insinyur
                            </a>
                            ,
                            <a
                              href="#"
                              className="text-blue-800 hover:text-blue-950"
                            >
                              Untirta
                            </a>
                            ,
                            <a
                              href="#"
                              className="text-blue-800 hover:text-blue-950"
                            >
                              Profesi Insinyur
                            </a>
                            ,
                            <a
                              href="#"
                              className="text-blue-800 hover:text-blue-950"
                            >
                              PS PPI
                            </a>
                            ,
                            <a
                              href="#"
                              className="text-blue-800 hover:text-blue-950"
                            >
                              PS PPI - Untirta
                            </a>
                            ,
                            <a
                              href="#"
                              className="text-blue-800 hover:text-blue-950"
                            >
                              PSPPI
                            </a>
                            ,
                            <a
                              href="#"
                              className="text-blue-800 hover:text-blue-950"
                            >
                              PSPPI-Untirta
                            </a>
                            ,
                            <a
                              href="#"
                              className="text-blue-800 hover:text-blue-950"
                            >
                              Cilegon
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="p-5">
                      <h2 className="text-xl font-bold border-b border-black mb-2">
                        {item.title}
                      </h2>
                      <Image
                        alt=""
                        src={item.img}
                        className="object-cover w-[100%] h-[250px] border-4 mb-3"
                        width={1920}
                        height={1080}
                      />
                      <p className="mb-5 text-sm">
                        {item.content.slice(0, 200) + "..."}
                      </p>
                      <a
                        href={"/post/" + (index + 1)}
                        className="bg-gray-300 p-2 border-b border-black rounded-md hover:bg-gray-400 active:bg-gray-500 active:text-white duration-200"
                      >
                        Continue Reading
                      </a>
                      <div className="mt-5">
                        <div className="flex">
                          <FaClock className="mt-[2px] mr-2" />
                          <p className="text-sm mr-7">{item.date}</p>
                          <FaFolderOpen className="mt-[2px] mr-2" />
                          <p className="text-sm">
                            <a href="#" className="text-blue-950">
                              {item.category}
                            </a>
                          </p>
                        </div>
                        <div className="flex mt-3">
                          <IoIosPricetag className="mt-[2px] mr-1" size={30} />
                          <p className="text-sm mr-7">
                            {item.tags.map((tag, index) => {
                              if (index === item.tags.length - 1) {
                                return (
                                  <a
                                    key={index}
                                    href="#"
                                    className="text-blue-800 hover:text-blue-950"
                                  >
                                    {tag}
                                  </a>
                                );
                              } else {
                                return (
                                  <a
                                    key={index}
                                    href="#"
                                    className="text-blue-800 hover:text-blue-950"
                                  >
                                    {tag},
                                  </a>
                                );
                              }
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            {/* Akhir Postingan */}
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
