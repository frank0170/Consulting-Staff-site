"use client";

import { use, useState } from "react";

const page = () => {
  const [titlu, setTitlu] = useState<any>();
  const [intro, setIntro] = useState<any>();
  const [desc, setDesc] = useState<any>();
  const [ben, setBen] = useState<any>();
  const [val, setVal] = useState<any>();
  const [finMin, setFinMin] = useState<any>();
  const [finMax, setFinMax] = useState<any>();
  const [coPro, setCoPro] = useState<any>();
  const [coNr, SetCoNr] = useState<any>();
  const [loc, setLoc] = useState<any>();
  const [locDesc, SetLocDesc] = useState<any>();
  const [elgb, setElgb] = useState<any>();
  const [cost, setCost] = useState<any>();

  const createProiect = async () => {
    const supplierData = {
      titlu,
      intro,
      descriere: desc,
      beneficiariIntro: ben,
      beneficiari: ben,
      valoare: Number(val),
      finantareMin: finMin,
      finantareMax: finMax,
      finantareCo: coPro,
      cofinantare: Number(coNr),
      locatie: loc,
      locatieDesc: locDesc,
      eligibilitate: elgb,
      cheltuieliEligibile: cost,
    };

    try {
      const response = await fetch(
        `http://localhost:5050/api/example`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(supplierData),
        }
      );

      if (response.ok) {
        console.log("Supplier created successfully");
      } else {
        console.error("Failed to create supplier");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (

    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 sm:mt-20">
        <div className="pt-30 pb-12 md:pt-28 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-15">
            <h1 className="h1">Adauga un Proiect</h1>
            <br />

            <textarea
              className="form-input w-full text-gray-800"
              placeholder="Titlu"
              onChange={(e) => setTitlu(e.target.value)}
              required
            />
            <textarea
              className="form-input w-full text-gray-800"
              placeholder="Intro"
              onChange={(e) => setIntro(e.target.value)}
              required
            />
                        <textarea
              className="form-input w-full text-gray-800"
              placeholder="Descriere"
              onChange={(e) => setDesc(e.target.value)}
              required
            />
            <textarea
              className="form-input w-full text-gray-800"
              placeholder="Beneficiari"
              onChange={(e) => setBen(e.target.value)}
              required
            />
            <textarea
              className="form-input w-full text-gray-800"
              placeholder="Valoare"
              onChange={(e) => setVal(e.target.value)}
              required
            />
            <textarea
              className="form-input w-full text-gray-800"
              placeholder="Finantare minima"
              onChange={(e) => setFinMin(e.target.value)}
              required
            />
            <textarea
              className="form-input w-full text-gray-800"
              placeholder="Finantare maxima"
              onChange={(e) => setFinMax(e.target.value)}
              required
            />
            <textarea
              className="form-input w-full text-gray-800"
              placeholder="Finantare cota-parte numar"
              onChange={(e) => SetCoNr(e.target.value)}
              required
            />
            <textarea
              className="form-input w-full text-gray-800"
              placeholder="Finantare cota-parte procent"
              onChange={(e) => setCoPro(e.target.value)}
              required
            />
            <textarea
              className="form-input w-full text-gray-800"
              placeholder="Locatie"
              onChange={(e) => setLoc(e.target.value)}
              required
            />
            <textarea
              className="form-input w-full text-gray-800"
              placeholder="Locatie Descriere"
              onChange={(e) => SetLocDesc(e.target.value)}
              required
            />
            <textarea
              className="form-input w-full text-gray-800"
              placeholder="Descriere Eligibilitate"
              onChange={(e) => setElgb(e.target.value)}
              required
            />
            <textarea
              className="form-input w-full text-gray-800"
              placeholder="Cheltuieli Eligibile"
              onChange={(e) => setCost(e.target.value)}
              required
            />
            <br />
            <br />
            <button className="btn text-white bg-orange-600 hover:bg-orange-700 w-full" onClick={() => createProiect()}>
              Adauga proiect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
