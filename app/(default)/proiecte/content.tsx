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
      const response = await fetch(
        "https://walrus-app-egm5v.ondigitalocean.app/api/example"
      );

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

  const [regiune, setRegiune] = useState<any>();

  const filteredPost = post.filter((item: any) =>
    regiune ? item.locatie.toLowerCase().includes(regiune.toLowerCase()) : true
  );
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-28 pb-12 md:pt-28 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-5 md:pb-50 text-center md:text-left">
            <h1 className="h1">Proiecte Fonduri</h1>
            <p className="text-xl text-gray-600">
              Fonduri nerambursabile pentru intreprinderi
            </p>
          </div>

          {/* Section tags */}
          <div className="border-b border-gray-300 pb-4 lg:mb-12"></div>

          {/* Articles list */}

          <div className="lg:grid lg:grid-cols-5 gap-4 p-4">
            <div className="lg:col-span-1  p-4 border-r border-gray-300">
              {/* Filters content goes here */}

              <div className="filter-item mb-4 p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold leading-snug tracking-tight">
                  Regiunea
                </h3>
                <div className="border-b border-gray-300 my-3" />

                <div className="flex flex-col items-center">
                  <button
                    className="text-lg font-medium leading-snug tracking-tight text-orange-500 hover:underline mt-3"
                    onClick={() => setRegiune(null)}
                  >
                    Toate
                  </button>

                  <button
                    className="text-lg font-medium leading-snug tracking-tight text-orange-500 hover:underline mt-3"
                    onClick={() => setRegiune("Regiunea Nord-Vest")}
                  >
                    Nord-Vest
                  </button>

                  <button
                    className="text-lg font-medium leading-snug tracking-tight text-orange-500 hover:underline mt-3"
                    onClick={() => setRegiune("Regiunea Nord-Est")}
                  >
                    Nord-Est
                  </button>

                  <button
                    className="text-lg font-medium leading-snug tracking-tight text-orange-500 hover:underline mt-3"
                    onClick={() => setRegiune("Regiunea Vest")}
                  >
                    Vest
                  </button>

                  <button
                    className="text-lg font-medium leading-snug tracking-tight text-orange-500 hover:underline mt-3"
                    onClick={() => setRegiune("Regiunea Sud-Vest")}
                  >
                    Sud-Vest
                  </button>

                  <button
                    className="text-lg font-medium leading-snug tracking-tight text-orange-500 hover:underline mt-3"
                    onClick={() => setRegiune("Regiunea Centru")}
                  >
                    Centru
                  </button>

                  <button
                    className="text-lg font-medium leading-snug tracking-tight text-orange-500 hover:underline mt-3"
                    onClick={() => setRegiune("Regiunea Sud-Muntenia")}
                  >
                    Sud-Muntenia
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-4">
              <div className="max-w-sm mx-auto md:max-w-none">
                {/* Articles container */}
                <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                  {filteredPost.map((card: any, index: any) => {
                    const imageSrc =
                      typeof card.imagine === "string" &&
                      card.imagine.trim() !== ""
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
        </div>
      </div>
    </section>
  );
}
