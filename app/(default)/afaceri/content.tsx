import TutorialImage01 from "@/public/images/tutorial-01.jpg";
import TutorialImage02 from "@/public/images/tutorial-02.jpg";
import TutorialImage03 from "@/public/images/tutorial-03.jpg";
import TutorialImage04 from "@/public/images/tutorial-04.jpg";
import CardArticle from "@/components/cardAfaceri";

export default function TutorialsContent() {


  const postari = [
    {
      imagine: TutorialImage01,
      titlu: "Afacere 1",
      descriere: "o afacere prospera",
      pret: "6.000 Euro",
      proiect: "proiect",
      locatie: " vest",
    },
    {
      imagine: TutorialImage01,
      titlu: "Afacere 2",
      descriere: "o afacere prospera",
      pret: "3.000 Euro",
      proiect: "proiect",
      locatie: " vest",
    },
    {
      imagine: TutorialImage01,
      titlu: "Afacere 3",
      descriere: "o afacere prospera",
      pret: "5.000 Euro",
      proiect: "proiect",
      locatie: " vest",
    },
    {
      imagine: TutorialImage01,
      titlu: "Afacere 4",
      descriere: "o afacere prospera",
      pret: "10.000 Euro",
      proiect: "proiect",
      locatie: " vest",
    },
  ];

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
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
              {postari.map((card, index) => {
                return (
                  <a href={`${'/'}${'proiecte'}${'/'}${card.titlu}`} key={index}>
                    <CardArticle
                      imagine={card.imagine}
                      titlu={card.titlu}
                      descriere={card.descriere}
                      locatie={card.locatie}
                      proiect={card.proiect}
                      pret={card.pret}
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
