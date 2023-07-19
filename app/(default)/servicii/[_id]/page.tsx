import TutorialImage01 from "@/public/images/tutorial-01.jpg";
import Image from "next/image";


export const metadata = {
  title: 'Servicii',
  description: 'Page description',
}

async function getProiect(id: any) {
  const res = await fetch(`http://localhost:5080/servicii/${id}`);
  const data = await res.json();

  // console.log('data', data)
  // console.log('id', id)
  return data;
}

export default async function TutorialsContent({ params }: any) {
  const proiect: any = await getProiect(params._id);

  console.log("proiect", proiect);

  // imagine: TutorialImage04,
  // titlu: "Proiect 4",
  // beneficiari: "1",
  // valoare: "50-100",
  // cofinantare: "10%",
  // locatie: " vest",
  // proiect: "PNRR",
  // firma: "tractor",

  return (
    <div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-1 sm:px-1">
          <div className="pt-20 pb-12 md:pt-20 md:pb-5">
            {/* Page header */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                {/* grid 1 */}

                <div className="max-w-3xl pb-5 md:pb-5 text-center md:text-left">
                  <h1 className="h1">{proiect.titlu}</h1>

                  <p className="text-xl text-gray-600">{proiect.descriere}</p>
                  <br />

                  <div className="block mb-6" suppressHydrationWarning>
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image
                        className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                        src={TutorialImage01}
                        width={352}
                        height={198}
                        alt="imagine"
                      />
                    </figure>
                  </div>
                  <br />
                  <p>
                    {" "}
                    <b>Descrierea finantarii</b>
                  </p>
                  <p>{proiect.descriere}</p>

                  <br />

                  <p>
                    {" "}
                    <b>Beneficiari eligibili</b>
                  </p>
                  <p>{proiect.descriere}</p>

                  <br />
                  <p>
                    {" "}
                    <b>Locatie implementare</b>
                  </p>
                  <p>{proiect.locatie}</p>

                  <br />
                  <p>
                    {" "}
                    <b>Valoarea finantarii</b>
                  </p>
                  <p>Valoarea minima a finantarii: {proiect?.finantare?.min}</p>
                  <p>Valoarea maxima a finantarii: {proiect?.finantare?.max}</p>
                  <br />
                  <p>
                    Cuantum finantarii acordate:{" "}
                    {100 - Number(proiect.finantare)}%
                  </p>
                  <p>Cofinantare: {proiect.finantare}%</p>
                  <br />
                  <p>
                    {" "}
                    <b>Conditii de eligibilitate</b>
                  </p>
                  <p>{proiect.eligibilitate}</p>

                  <br />
                  <p>
                    {" "}
                    <b>Categorii de cheltuieli eligibile</b>
                  </p>
                  <p>{proiect.eligibilitate}</p>

                  <div className="border-b border-gray-300 pb-4 mt-5 mb-5" />

                  <br />
                  <p>
                    {" "}
                    <b>Date de Contact</b>
                    <br />
                    <br />
                    <p>
                      Nume: <b>Lelica Crisan</b>
                    </p>
                    <p>
                      Telefon:<b>0711111111</b>
                    </p>
                    <p>
                      Email: <b>consulting.staff@yahoo.com</b>
                    </p>
                  </p>
                </div>
              </div>

              {/* grid 2 */}
              <div className="md:col-span-1 ml-3">
                <div className="pt-5 flex justify-end">
                  <a href="/servicii" className="btn text-orange-600 border border-orange-600 hidden md:block">
                    Inapoi
                  </a>
                </div>
                <br />
                <div className="border border-gray-300 pb-4 mt-1 mb-5 flex flex-col justify-center items-center">
                    <br/>
                  <p>Suna un Consultant</p>
                  <br />
                  <p>
                    <b>07111111111</b>
                  </p>
                  <br />
                  <div className="border-b border-gray-300 " />
                  <p>Apasa aici</p>
                  <br />
                  Esti interesat de aceasta finantare?
                  <br />
                  <br />
                  <input
                    type="text"
                    placeholder="Nume"
                    className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
                  />
                  <input
                    type="text"
                    placeholder="Telefon"
                    className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
                  />
                  <input
                    type="text"
                    placeholder="CUI"
                    className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
                  />
                  <input
                    type="text"
                    placeholder="Nume Companie"
                    className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
                  />
                  <textarea
                    placeholder="Mesaj"
                    className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
                  />
                  <a
                    className="btn text-white bg-orange-600"
                    href="mailto:consulting.staff@yahoo.com"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
