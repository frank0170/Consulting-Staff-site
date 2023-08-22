"use client";

import { use, useEffect, useState } from "react";

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

  const [parola, setParola] = useState("");
  const [keyCheck, setKeyCheck] = useState("");
  const [keyData, setKeyData] = useState('')

  // Define a state variable to hold the selected option
  const [selectedOption, setSelectedOption] = useState("/images/default.png");

  // Function to handle changes in the select element
  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const createProiect = async () => {

    const keysLock = localStorage.getItem('tokenKey')

    if (keysLock) {
      setKeyData(keysLock)
    }

    const supplierData = {
      imagine: selectedOption,
      titlu,
      intro,
      descriere: desc,
      beneficiariIntro: ben,
      beneficiari: ben,
      valoare: val,
      finantareMin: finMin,
      finantareMax: finMax,
      finantareCo: Number(coNr),
      cofinantare: Number(coNr),
      locatie: loc,
      locatieDesc: locDesc,
      eligibilitate: elgb,
      cheltuieliEligibile: cost,
      token: keyData
    };

    try {
      const response = await fetch(`https://consult-basics-test-1aea35fb0e5c.herokuapp.com/api/example`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(supplierData),
      });

      if (response.ok) {
        console.log("Supplier created successfully");
        alert("Proiect adaugat cu success!");
        setTitlu("");
        setIntro("");
        setDesc("");
        setBen("");
        setVal("");
        setFinMax("");
        setFinMin("");
        setCoPro("");
        SetCoNr("");
        setLoc("");
        SetLocDesc("");
        setElgb("");
        setCost("");
        window.location.reload();
      } else {
        alert("Verifica campurile si incearca din nou!");

        console.error("Failed to create supplier");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  const parolaCheck = () => {
    if (parola === "NuStiuParola1234") {
      localStorage.setItem("key", "1234ghj");
      localStorage.setItem("tokenKey", 'Jwt678')


      window.location.reload();
    } else {
      alert("Mai incearca");
    }
  };

  useEffect(() => {
    const tryKey = localStorage.getItem("key");

    if (tryKey) {
      setKeyCheck(tryKey);
    }
  }, [parolaCheck]);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 sm:mt-20">
        <div className="pt-30 pb-12 md:pt-28 md:pb-20">
          {keyCheck === "1234ghj" ? (
            <div className="max-w-3xl mx-auto text-center pb-10 md:pb-15">
              <h1 className="h1">Adauga un Proiect</h1>
              <br />
              <label className="block font-bold mb-2">
                Selecteaza regiunea:
              </label>
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="block border rounded-md py-2 px-3 w-full"
              >
                <option value="/images/default.png">Toata Romania</option>
                <option value="/images/group-6.png">Nord-Vest</option>
                <option value="/images/group-5.png">Vest</option>
                <option value="/images/group-11.png">Sud-Vest</option>
                <option value="/images/group-1.png">Centru</option>
                <option value="/images/groupe-3.png">Sud-Muntenia</option>
                <option value="/images/group-8.png">Nord-Est</option>
              </select>

              <br />

              <textarea
                className="form-input w-full text-gray-800"
                placeholder="Titlu (Text) (Ex. Program Regiunea Centru)"
                onChange={(e) => setTitlu(e.target.value)}
                required
              />
              <textarea
                className="form-input w-full text-gray-800"
                placeholder="Intro (Text) (Ex. 25.000 – 200.000 euro - Scale up pentru start-up-uri și microîntreprinder)"
                onChange={(e) => setIntro(e.target.value)}
                required
              />
              <textarea
                className="form-input w-full text-gray-800"
                placeholder="Descriere (Text) (Ex. Întreprinderile trebuie să fie non agricole din mediul...)"
                onChange={(e) => setDesc(e.target.value)}
                required
              />
              <textarea
                className="form-input w-full text-gray-800"
                placeholder="Beneficiari (Text) (Ex.Microîntreprinderi, Intreprinderi mici,...)"
                onChange={(e) => setBen(e.target.value)}
                required
              />
              <textarea
                className="form-input w-full text-gray-800"
                placeholder="Valoare (Text) (Ex. 50.000 - 200.000 euro)"
                onChange={(e) => setVal(e.target.value)}
                required
              />
              <textarea
                className="form-input w-full text-gray-800"
                placeholder="Finantare minima (Text) (Ex. 50.000 Euro)"
                onChange={(e) => setFinMin(e.target.value)}
                required
              />
              <textarea
                className="form-input w-full text-gray-800"
                placeholder="Finantare maxima (Text) (Ex. 200.000 Euro)"
                onChange={(e) => setFinMax(e.target.value)}
                required
              />
              <textarea
                className="form-input w-full text-gray-800"
                placeholder="Finantare cota-parte numar (Numar) (Ex. 10)"
                onChange={(e) => SetCoNr(e.target.value)}
                required
              />

              <textarea
                className="form-input w-full text-gray-800"
                placeholder="Locatie (Text) (Ex. Regiunea Sud-Muntenia)"
                onChange={(e) => setLoc(e.target.value)}
                required
              />
              <textarea
                className="form-input w-full text-gray-800"
                placeholder="Locatie Descriere (Text) (Ex. Regiunea Centru, România (județele Alba, Brașov, Covasna, Harghita, Mureș, Sibiu), în mediul urban)"
                onChange={(e) => SetLocDesc(e.target.value)}
                required
              />
              <textarea
                className="form-input w-full text-gray-800"
                placeholder={`Descriere Eligibilitate (Text) (Ex. "Solicitantul a înregistrat"  se adauga datele si se apasa Space pentru randu nou)`}
                onChange={(e) => setElgb(e.target.value)}
                required
              />
              <textarea
                className="form-input w-full text-gray-800"
                placeholder={`Cheltuieli Eligibilile (Text) (Ex. "Lucrări de construire, Echipamente etc"  se adauga datele si se apasa Space pentru randu nou)`}
                onChange={(e) => setCost(e.target.value)}
                required
              />
              <br />
              <br />
              <button
                className="btn text-white bg-orange-600 hover:bg-orange-700 w-full"
                onClick={() => createProiect()}
              >
                Adauga proiect
              </button>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto text-center pb-10 md:pb-15">
              <input
                className="form-input w-full text-gray-800"
                placeholder="Bun venit!"
                onChange={(e) => setParola(e.target.value)}
                required
              />
              <br />
              <br />

              <button
                onClick={() => parolaCheck()}
                className="btn text-white bg-orange-600 hover:bg-orange-700"
              >
                Intra
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
