import TutorialImage01 from "@/public/images/consult-main.jpg";
import Image from "next/image";
import ContactForm from "./contactForm";
import { afacere1 } from "@/content/afaceri";
import connectDb from "@/components/utils/cacheddb";

export const metadata = {
  title: "Afaceri",
  description: "Page description",
};

async function fetchData() {
  try {
    const db = await connectDb();
    const collectionName = "Afaceri";
    const collection = db.collection(collectionName);
    const results = await collection.find({}).toArray();
    console.log(results);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
  }
}

export default async function TutorialsContent({ params }: any) {
  // const proiect: any = await getProiect(params._id);

  fetchData();

  const proiect = afacere1;

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
                        src={TutorialImage01}
                        width={352}
                        height={198}
                        alt="imagine"
                      />
                    </figure>
                  </div>
                  <br />

                  <div className="border border-gray-300 p-4 mt-1 mb-5 flex flex-row justify-around items-center rounded-lg flex-wrap gap-5">
                    <div className="flex flex-col items-center justify-center">
                      <p className="sm:text-sm">Localitate</p>
                      <p className="sm:text-sm">
                        <b>{proiect.locatie}</b>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="sm:text-sm">Vechime</p>
                      <p className="sm:text-sm">
                        <b>{proiect.vechime}</b>
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <p className="sm:text-sm">Pret</p>
                      <p className="sm:text-sm">
                        <b>{proiect.pret}</b>
                      </p>
                    </div>

                    {/* <div className="flex flex-col items-center justify-center">
                      <p>Cod Caen</p>
                      <p>
                        <b>{proiect.caen}</b>
                      </p>
                    </div> */}
                    <div className="flex flex-col items-center justify-center sm:align-start sm:item-start">
                      <p className="sm:text-sm">CUI</p>
                      <p className=" text-base sm:text-sm">
                        <b>{proiect.cui}</b>
                      </p>
                    </div>
                  </div>
                  <br />

                  <p className="text-orange-600 text-xl">
                    <b className="text-orange-600 text-xl">
                      Descrierea afacerii
                    </b>
                  </p>
                  <br />
                  <p>{proiect.descriere}</p>

                  <br />

                  <div className="border-b border-gray-300 pb-4 mt-5 mb-5" />

                  <br />
                  <p className="text-orange-600 text-lg">
                    <b>Date de Contact</b>
                  </p>
                  <br />
                  <p className="mb-2">
                    Nume: <b>Lelica Crisan</b>
                  </p>
                  <p className="mb-2">
                    Telefon:<b>0711111111</b>
                  </p>
                  <p className="mb-2">
                    Email: <b>consulting.staff@yahoo.com</b>
                  </p>
                </div>
              </div>

              {/* grid 2 */}
              <ContactForm firma={proiect.titlu} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
