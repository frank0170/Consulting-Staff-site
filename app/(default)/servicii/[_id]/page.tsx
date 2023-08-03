import TutorialImage01 from "@/public/images/tutorial-01.jpg";
import Image from "next/image";
import { servicii } from "@/content/servicii";
import ContactForm from "./contactForm";

export const metadata = {
  title: 'Servicii',
  description: 'Page description',
}

// export const metadata = {
//   title: 'Servicii',
//   description: 'Page description',
// }

// async function getProiect(id: any) {
//   const res = await fetch(`http://localhost:5080/servicii/${id}`);
//   const data = await res.json();

//   // console.log('data', data)
//   // console.log('id', id)
//   return data;
// }

export default async function TutorialsContent({ params }: any) {
  console.log("yo", params);

  // const proiect: any = await getProiect(params._id);

  // console.log("proiect", proiect);

  const proiect: any = servicii[params._id];

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

                  <p className="text-xl text-gray-600">{proiect.intro}</p>
                  <br />

                  <div className="block mb-6" suppressHydrationWarning>
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image
                        className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                        src={proiect.imagine}
                        width={352}
                        height={198}
                        alt="imagine"
                      />
                    </figure>
                  </div>
                  <br />
                  <p className='mb-2'>
                    {" "}
                    <b>Prezentare</b>
                  </p>
                  {proiect.prezentare
                    .split("\n")
                    .map((item: any, index: any) => (
                      <p key={index}>{item}</p>
                    ))}

                  <br />

                  {proiect.cuprins ? (
                    <>
                      {" "}
                      <p className='mb-2'>
                        <b>Cuprins</b>
                        
                      </p>
                      {proiect.cuprins
                        .split("\n")
                        .map((item: any, index: any) => (
                          <p key={index}>{item}</p>
                        ))}
                      <br />
                    </>
                  ) : null}

                  <div className="border-b border-gray-300 pb-4 mt-5 mb-5" />

                  <br />
                  <div>
                    {" "}
                    <b style={{fontSize: '25px'}}>Date de Contact</b>
                    <br />
                    <br />
                    <p style={{fontSize: '22px'}}>
                      Nume:  <b className="text-orange-700">Lelica Crisan</b>
                    </p>
                    <br/>
                    <p style={{fontSize: '22px'}}>
                      Telefon:  <b className="text-orange-700">0744 506 685</b>
                    </p>
                    <br/>

                    <p style={{fontSize: '22px'}}>
                      Email: <b className="text-orange-700">consulting.staff@yahoo.com</b>
                    </p>
                  </div>
                </div>
              </div>

              {/* grid 2 */}
              <ContactForm serviciu={proiect.titlu} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
