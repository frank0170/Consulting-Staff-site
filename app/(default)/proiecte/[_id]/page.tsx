"use client";

import TutorialImage01 from "@/public/images/default.png";
import Image from "next/image";
import { proiecte } from "@/content/proiecte";
import ContactForm from "./contactForm";
import React, { useState } from "react";

async function getProiect(id: any) {
  const res = await fetch(
    `https://lelica-crisan.ro/.netlify/functions/getProjectById/${id}`
  );
  const data = await res.json();

  // console.log('data', data)
  // console.log('id', id)
  return data;
}

export default async function TutorialsContent({ params }: any) {
  const proiect2: any = await getProiect(params._id);

  // console.log("proiect", proiect);

  const [proiect, setProiect] = useState<any>([]);

  setProiect(proiect2);

  return (
    <div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-5 mx-5 sm:px-5">
          <div className="pt-20 pb-12 md:pt-20 md:pb-5">
            {/* Page header */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                {/* grid 1 */}

                <div className="max-w-3xl pb-5 md:pb-5 text-center md:text-left">
                  <h1 className="h2 mt-10">{proiect?.titlu}</h1>

                  <p className="text-xl text-gray-600">{proiect?.intro}</p>
                  <br />

                  <div className="block mb-6" suppressHydrationWarning>
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image
                        className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                        src={proiect?.imagine || TutorialImage01}
                        width={352}
                        height={198}
                        alt="imagine"
                      />
                    </figure>
                  </div>
                  <br />
                  <p className="mb-2">
                    {" "}
                    <b>Descrierea finantarii</b>
                  </p>
                  <p>{proiect?.descriere}</p>

                  <br />

                  <p className="mb-2">
                    {" "}
                    <b>Beneficiari eligibili</b>
                  </p>
                  <p>{proiect?.beneficiari}</p>

                  <br />
                  <p className="mb-2">
                    {" "}
                    <b>Locatie implementare</b>
                  </p>
                  <p>{proiect?.locatieDesc}</p>

                  <br />
                  <p className="mb-2">
                    {" "}
                    <b>Valoarea finantarii</b>
                  </p>
                  <p>Valoarea minima a finantarii: {proiect?.finantareMin}</p>
                  <p>Valoarea maxima a finantarii: {proiect?.finantareMax}</p>
                  <br />
                  <p>
                    Cuantum finantarii acordate:{" "}
                    {100 - Number(proiect?.finantareCo)}%
                  </p>
                  <p>Cofinantare: {Number(proiect?.finantareCo)}%</p>
                  <br />
                  <p className="mb-2">
                    {" "}
                    <b>Conditii de eligibilitate</b>
                  </p>
                  <p>
                    {" "}
                    {proiect?.eligibilitate
                      .split("\n")
                      .map((item: any, index: any) => (
                        <p key={index} className="text-left mb-2">
                          {item}
                        </p>
                      ))}
                  </p>

                  <br />
                  <p className="mb-2">
                    {" "}
                    <b>Categorii de cheltuieli eligibile</b>
                  </p>
                  <p>
                    {" "}
                    {proiect?.cheltuieliEligibile
                      .split("\n")
                      .map((item: any, index: any) => (
                        <p key={index} className="text-left mb-2">
                          {item}
                        </p>
                      ))}
                  </p>

                  <div className="border-b border-gray-300 pb-4 mt-5 mb-5" />

                  <br />
                  <div>
                    {" "}
                    <b style={{ fontSize: "25px" }}>Date de Contact</b>
                    <br />
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      Nume: <b className="text-orange-700">Lelica Crisan</b>
                    </p>
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      Telefon: <b className="text-orange-700">0744 506 685</b>
                    </p>
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      Email:{" "}
                      <b className="text-orange-700">
                        consulting.staff@yahoo.com
                      </b>
                    </p>
                  </div>
                </div>
              </div>

              {/* grid 2 */}
              <div className="md:col-span-1 ml-0 sm:ml-3">
                <div className="pt-5 flex justify-end">
                  <a
                    href="/proiecte"
                    className="btn text-orange-600 border border-orange-600 hidden md:block"
                  >
                    Inapoi
                  </a>
                </div>
                <br />
                <ContactForm firma={proiect?.titlu} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
