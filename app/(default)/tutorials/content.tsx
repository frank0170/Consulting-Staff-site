import Image from "next/image";
import TutorialImage01 from "@/public/images/tutorial-01.jpg";
import TutorialImage02 from "@/public/images/tutorial-02.jpg";
import TutorialImage03 from "@/public/images/tutorial-03.jpg";
import TutorialImage04 from "@/public/images/tutorial-04.jpg";
import TutorialImage05 from "@/public/images/tutorial-05.jpg";
import TutorialImage06 from "@/public/images/tutorial-06.jpg";
import TutorialImage07 from "@/public/images/tutorial-07.jpg";
import TutorialImage08 from "@/public/images/tutorial-08.jpg";
import TutorialImage09 from "@/public/images/tutorial-09.jpg";
import NewsAuthor01 from "@/public/images/news-author-01.jpg";
import NewsAuthor02 from "@/public/images/news-author-02.jpg";
import NewsAuthor03 from "@/public/images/news-author-03.jpg";
import NewsAuthor04 from "@/public/images/news-author-04.jpg";
import NewsAuthor05 from "@/public/images/news-author-05.jpg";
import NewsAuthor06 from "@/public/images/news-author-06.jpg";
import CardArticle from "@/components/cardArticol";

export default function TutorialsContent() {
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

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
            <h1 className="h1">Proiecte Fonduri</h1>
            <p className="text-xl text-gray-600">Fonduri nerambursabile pentru intreprinderi</p>

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
              {postari.map((card) => {
                return (
                  <a href={`${'/'}${'tutorials'}${'/'}${card.titlu}`}>
                    <CardArticle
                      imagine={card.imagine}
                      titlu={card.titlu}
                      beneficiari={card.beneficiari}
                      valoare={card.valoare}
                      cofinantare={card.cofinantare}
                      locatie={card.locatie}
                      proiect={card.proiect}
                      firma={card.firma}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
