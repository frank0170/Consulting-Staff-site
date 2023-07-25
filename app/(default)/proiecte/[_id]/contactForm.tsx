"use client";

import React, { useState } from "react";

const ContactForm = ({ firma }: any) => {
  const [name, setName] = useState<any>();
  const [telefon, setTelefon] = useState<any>();
  const [cui, setCui] = useState<any>();
  const [numeFirma, setNumeFirma] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [mesaj, setMesaj] = useState<any>();

  return (
    <div className="md:col-span-1 ml-3">
      <div className="border border-gray-300 pb-4 mt-1 mb-5 flex flex-col justify-center items-center">
        <br />
        Esti interesat de aceasta finantare?
        <br />
        <br />
        <input
          type="text"
          placeholder="Nume"
          required
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
        />
        <input
          type="text"
          placeholder="Telefon"
          onChange={(e) => setTelefon(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
        />
        <input
          type="text"
          placeholder="CUI"
          onChange={(e) => setCui(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
        />
        <input
          type="text"
          placeholder="Nume Companie"
          onChange={(e) => setNumeFirma(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
        />
        <textarea
          placeholder="Mesaj"
          onChange={(e) => setMesaj(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 mb-3"
        />
        <a
          className="btn text-white bg-orange-600"
          href={`mailto:consulting.staff@yahoo.com?subject=Programe%20Fonduri%20-%20${firma}&body=Nume:%20${name}%0A%0AEmail:%20${email}%0A%0ATelefon:%20${telefon}%0A%0ACUI:%20${cui}%0A%0ACompanie:%20${numeFirma}%0A%0AMesaj:%20${mesaj}`}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
