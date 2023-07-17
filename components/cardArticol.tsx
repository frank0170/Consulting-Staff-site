'use client'

import Image from 'next/image'
   
  export default function CardArticle({imagine, titlu, beneficiari, valoare, cofinantare, locatie, proiect, firma}: any) {
    return (
    <article className="flex flex-col h-full shadow-lg rounded-xl" data-aos="zoom-y-out">
<header>
  <div className="block mb-6">
    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
      <Image className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src={imagine} width={352} height={198} alt="News 01" />
    </figure>
  </div>
  <div className="mb-3">
    <ul className="flex flex-wrap text-xs font-medium -m-1">
      <li className="m-1">
        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-orange-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">{proiect}</a>
      </li>
      <li className="m-1">
        <a className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-orange-100 hover:bg-blue-200 transition duration-150 ease-in-out" href="#0">proiect</a>
      </li>
      {/* <li className="m-1">
        <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">4 min read</span>
      </li> */}
    </ul>
  </div>
  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
    <p>{titlu}</p>
  </h3>
</header>
<p className="text-gray-600 grow"><b>Beneficiari:</b> {beneficiari}</p>
<p className="text-gray-600 grow"><b>Valoare:</b> {valoare}</p>
<p className="text-gray-600 grow"><b>Cofinantare:</b> {cofinantare}</p>
<p className="text-gray-600 grow"><b>Locatie:</b> {locatie}</p>

<footer className="text-sm flex items-center mt-4">
  {/* <div>
    <span className="text-gray-600">By </span>
    <a className="font-medium hover:underline" href="#0">Lisa Allison</a> & <a className="font-medium hover:underline" href="#0">Justin Park</a>
  </div> */}
</footer>
</article>
    );
  }