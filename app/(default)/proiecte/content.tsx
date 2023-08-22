"use client";

import TutorialImage01 from "@/public/images/default.png";
import TutorialImage02 from "@/public/images/tutorial-02.jpg";
import TutorialImage03 from "@/public/images/tutorial-03.jpg";
import TutorialImage04 from "@/public/images/tutorial-04.jpg";
import CardArticle from "@/components/cardProiect";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { proiecte } from "@/content/proiecte";

export default function TutorialsContent() {
  const [post, setPost] = useState<any>([]);

  const postari = [
    {
      imagine: TutorialImage01,
      titlu: "Proiect 1",
      beneficiari: "1",
      valoare: "50-100",
      cofinantare: "10%",
      locatie: " vest",
      proiect: "PNRR",
      firma: "tractor",
    },
    {
      imagine: TutorialImage02,
      titlu: "Proiect 2",
      beneficiari: "1",
      valoare: "50-100",
      cofinantare: "10%",
      locatie: " vest",
      proiect: "PNRR",
      firma: "tractor",
    },
    {
      imagine: TutorialImage03,
      titlu: "Proiect 3",
      beneficiari: "1",
      valoare: "50-100",
      cofinantare: "10%",
      locatie: " vest",
      proiect: "PNRR",
      firma: "tractor",
    },
    {
      imagine: TutorialImage04,
      titlu: "Proiect 4",
      beneficiari: "1",
      valoare: "50-100",
      cofinantare: "10%",
      locatie: " vest",
      proiect: "PNRR",
      firma: "tractor",
    },
  ];

  const data = proiecte;

  useEffect(() => {
    async function getProiecte() {
      const response = await fetch("https://consult-basics-test-1aea35fb0e5c.herokuapp.com/api/example", {
        cache: "no-store",
      });

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      console.log(records);

      setPost(records.reverse());
      records.forEach((item: any) => data.push(item));
    }

    getProiecte();
  }, []);

  console.log(data);
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-28 pb-12 md:pt-28 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-5 md:pb-50 text-center md:text-left">
            <h1 className="h1">Proiecte Fonduri</h1>
            <p className="text-xl text-gray-600">
              Fonduri nerambursabile pentru intreprinderi
            </p>
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
                const imageSrc =
                  typeof card.imagine === "string" && card.imagine.trim() !== ""
                    ? card.imagine
                    : TutorialImage01;
                return (
                  <Link href={`/proiecte/${card._id}`} key={index}>
                    <CardArticle
                      imagine={imageSrc}
                      titlu={card.titlu}
                      intro={card.intro}
                      activ={card.activ}
                      beneficiariIntro={card.beneficiariIntro}
                      valoare={card.valoare}
                      cofinantare={card.cofinantare}
                      locatie={card.locatie}
                      proiect={card.proiect}
                      firma={card.firma}
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
