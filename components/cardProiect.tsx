"use client";

import Image from "next/image";
import TutorialImage01 from "@/public/images/group-1.png";

export default function CardArticle({
  imagine,
  titlu,
  intro,
  beneficiariIntro,
  valoare,
  cofinantare,
  locatie,
  proiect,
  activ,
  firma,
}: any) {
  return (
    <article
      className="flex flex-col h-full shadow-lg rounded-xl"
      data-aos="zoom-y-out"
    >
      <header>
        <div className="block mb-6" suppressHydrationWarning>
          <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
            <Image
              className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
              src={TutorialImage01}
              width={352}
              height={198}
              alt="imagine"
            />
            {activ ? (
              <svg
                className="absolute top-0 right-0 z-10"
                width="100"
                height="40"
                viewBox="0 0 240 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 20C0 8.95431 8.95431 0 20 0H240V92H20C8.9543 92 0 83.0457 0 72V20Z"
                  fill="#DD6B21"
                />
                <path
                  d="M48.0511 62H40.142L52.1932 27.0909H61.7045L73.7386 62H65.8295L57.0852 35.0682H56.8125L48.0511 62ZM47.5568 48.2784H66.2386V54.0398H47.5568V48.2784ZM107.101 39.3125H99.6349C99.4986 38.3466 99.2202 37.4886 98.7997 36.7386C98.3793 35.9773 97.8395 35.3295 97.1804 34.7955C96.5213 34.2614 95.7599 33.8523 94.8963 33.5682C94.044 33.2841 93.1179 33.142 92.1179 33.142C90.3111 33.142 88.7372 33.5909 87.3963 34.4886C86.0554 35.375 85.0156 36.6705 84.277 38.375C83.5384 40.0682 83.169 42.125 83.169 44.5455C83.169 47.0341 83.5384 49.125 84.277 50.8182C85.027 52.5114 86.0724 53.7898 87.4134 54.6534C88.7543 55.517 90.3054 55.9489 92.0668 55.9489C93.0554 55.9489 93.9702 55.8182 94.8111 55.5568C95.6634 55.2955 96.419 54.9148 97.0781 54.4148C97.7372 53.9034 98.2827 53.2841 98.7145 52.5568C99.1577 51.8295 99.4645 51 99.6349 50.0682L107.101 50.1023C106.908 51.7045 106.425 53.25 105.652 54.7386C104.891 56.2159 103.862 57.5398 102.567 58.7102C101.283 59.8693 99.7486 60.7898 97.9645 61.4716C96.1918 62.142 94.1861 62.4773 91.9474 62.4773C88.8338 62.4773 86.0497 61.7727 83.5952 60.3636C81.152 58.9545 79.2202 56.9148 77.7997 54.2443C76.3906 51.5739 75.6861 48.3409 75.6861 44.5455C75.6861 40.7386 76.402 37.5 77.8338 34.8295C79.2656 32.1591 81.2088 30.125 83.6634 28.7273C86.1179 27.3182 88.8793 26.6136 91.9474 26.6136C93.9702 26.6136 95.8452 26.8977 97.5724 27.4659C99.3111 28.0341 100.851 28.8636 102.192 29.9545C103.533 31.0341 104.624 32.358 105.464 33.9261C106.317 35.4943 106.862 37.2898 107.101 39.3125ZM111.064 33.1761V27.0909H139.734V33.1761H129.047V62H121.751V33.1761H111.064ZM151.837 27.0909V62H144.456V27.0909H151.837ZM164.216 27.0909L172.653 53.6136H172.977L181.432 27.0909H189.614L177.58 62H168.068L156.017 27.0909H164.216Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
              className="absolute top-0 right-0 z-10"
                width="100"
                height="40"
                viewBox="0 0 240 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 20C0 8.95431 8.95431 0 20 0H240V92H20C8.9543 92 0 83.0457 0 72V20Z"
                  fill="#DD6B21"
                />
                <path
                  d="M31.4148 27.0909V62H24.0341V27.0909H31.4148ZM66.6861 27.0909V62H60.3111L45.1236 40.0284H44.8679V62H37.4872V27.0909H43.9645L59.0327 49.0455H59.3395V27.0909H66.6861ZM78.8011 62H70.892L82.9432 27.0909H92.4545L104.489 62H96.5795L87.8352 35.0682H87.5625L78.8011 62ZM78.3068 48.2784H96.9886V54.0398H78.3068V48.2784ZM137.851 39.3125H130.385C130.249 38.3466 129.97 37.4886 129.55 36.7386C129.129 35.9773 128.589 35.3295 127.93 34.7955C127.271 34.2614 126.51 33.8523 125.646 33.5682C124.794 33.2841 123.868 33.142 122.868 33.142C121.061 33.142 119.487 33.5909 118.146 34.4886C116.805 35.375 115.766 36.6705 115.027 38.375C114.288 40.0682 113.919 42.125 113.919 44.5455C113.919 47.0341 114.288 49.125 115.027 50.8182C115.777 52.5114 116.822 53.7898 118.163 54.6534C119.504 55.517 121.055 55.9489 122.817 55.9489C123.805 55.9489 124.72 55.8182 125.561 55.5568C126.413 55.2955 127.169 54.9148 127.828 54.4148C128.487 53.9034 129.033 53.2841 129.464 52.5568C129.908 51.8295 130.214 51 130.385 50.0682L137.851 50.1023C137.658 51.7045 137.175 53.25 136.402 54.7386C135.641 56.2159 134.612 57.5398 133.317 58.7102C132.033 59.8693 130.499 60.7898 128.714 61.4716C126.942 62.142 124.936 62.4773 122.697 62.4773C119.584 62.4773 116.8 61.7727 114.345 60.3636C111.902 58.9545 109.97 56.9148 108.55 54.2443C107.141 51.5739 106.436 48.3409 106.436 44.5455C106.436 40.7386 107.152 37.5 108.584 34.8295C110.016 32.1591 111.959 30.125 114.413 28.7273C116.868 27.3182 119.629 26.6136 122.697 26.6136C124.72 26.6136 126.595 26.8977 128.322 27.4659C130.061 28.0341 131.601 28.8636 132.942 29.9545C134.283 31.0341 135.374 32.358 136.214 33.9261C137.067 35.4943 137.612 37.2898 137.851 39.3125ZM141.814 33.1761V27.0909H170.484V33.1761H159.797V62H152.501V33.1761H141.814ZM182.587 27.0909V62H175.206V27.0909H182.587ZM194.966 27.0909L203.403 53.6136H203.727L212.182 27.0909H220.364L208.33 62H198.818L186.767 27.0909H194.966Z"
                  fill="white"
                />
              </svg>
            )}
          </figure>
        </div>
        <div className="mb-3">
          <ul className="flex flex-wrap text-xs font-medium -m-1">
            <li className="m-1">
              <a
                className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-orange-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                href="#0"
              >
                Nerambursabil
              </a>
            </li>
            <li className="m-1">
              <a
                className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-orange-100 hover:bg-blue-200 transition duration-150 ease-in-out"
                href="#0"
              >
                PNRR
              </a>
            </li>
            {/* <li className="m-1">
        <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">4 min read</span>
      </li> */}
          </ul>
        </div>
        <h3 className="text-xl font-bold leading-snug tracking-tight">
          <p>{titlu}</p>
        </h3>
        <p className="text-gray-600">{intro}</p>
      </header>
      <br />
      <p className="text-gray-600 grow">
        <b>Beneficiari:</b> {beneficiariIntro}
      </p>
      <p className="text-gray-600 grow">
        <b>Valoare:</b> {valoare}
      </p>
      <p className="text-gray-600 grow">
        <b>Cofinantare:</b> {cofinantare}
      </p>
      <p className="text-gray-600 grow">
        <b>Locatie:</b> {locatie}
      </p>

      <footer className="text-sm flex items-center mt-4">
        {/* <div>
    <span className="text-gray-600">By </span>
    <a className="font-medium hover:underline" href="#0">Lisa Allison</a> & <a className="font-medium hover:underline" href="#0">Justin Park</a>
  </div> */}
      </footer>
    </article>
  );
}
