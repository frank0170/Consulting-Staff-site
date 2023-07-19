'use client'

import TutorialImage01 from "@/public/images/tutorial-01.jpg";
import TutorialImage02 from "@/public/images/tutorial-02.jpg";
import TutorialImage03 from "@/public/images/tutorial-03.jpg";
import TutorialImage04 from "@/public/images/tutorial-04.jpg";
import CardArticle from "@/components/cardAfaceri";
import Link from "next/link";


import React, {useState, useEffect} from "react";

export default function TutorialsContent() {

  const [post, setPost] = useState<any>([])

  useEffect(() => {
    async function getProiecte() {
      const response = await fetch("http://localhost:5080/afaceri");

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      console.log(records)
      setPost(records);
    }

    getProiecte();
  }, []);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-28 pb-12 md:pt-28 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-5 md:pb-50 text-center md:text-left">
            <h1 className="h1">Afaceri de Vanzare</h1>
            <p className="text-xl text-gray-600">Caută o afacere cu potențial de dezvoltare</p>

          </div>

          {/* Section tags */}
          <div className="border-b border-gray-300 pb-4 mb-12">
            {/* <ul className="flex flex-wrap justify-center md:justify-start font-medium -mx-5 -my-1">
              <li className="mx-5 my-1">
                <a className="text-blue-600" href="#0">
                  All
                </a>
              </li>
              <li className="mx-5 my-1">
                <a className="text-gray-800 hover:underline" href="#0">
                  Tutorials
                </a>
              </li>
              <li className="mx-5 my-1">
                <a className="text-gray-800 hover:underline" href="#0">
                  Tips & Tricks
                </a>
              </li>
              <li className="mx-5 my-1">
                <a className="text-gray-800 hover:underline" href="#0">
                  Free ebooks
                </a>
              </li>
              <li className="mx-5 my-1">
                <a className="text-gray-800 hover:underline" href="#0">
                  Guides
                </a>
              </li>
            </ul> */}
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            {/* Articles container */}
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
              {post.map((card: any, index: any) => {
                const imageSrc = typeof card.imagine === 'string' && card.imagine.trim() !== '' ? card.imagine : TutorialImage01;
                return (
                  <Link href={`/afaceri/${card._id}`} key={index}>
                    <CardArticle
                      imagine={imageSrc}
                      titlu={card.titlu}
                      descriere={card.descriere}
                      locatie={card.locatie}
                      proiect={card.proiect}
                      pret={card.pret}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
