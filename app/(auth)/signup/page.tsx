"use client";

import React, { useState } from "react";

import Link from "next/link";

export default function SignUp() {
  const [name, setName] = useState<any>();
  const [telefon, setTelefon] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [mesaj, setMesaj] = useState<any>();
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-30 pb-12 md:pt-28 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-15">
            <h1 className="h1">
              Bine ati venit. Suntem aici pentru a face antreprenoriatul mai
              usor.
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-800 text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Nume <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="form-input w-full text-gray-800"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Introduceți-vă numele"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-800 text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="form-input w-full text-gray-800"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Introduceți-vă adresa de email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-800 text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Telefon <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="form-input w-full text-gray-800"
                  onChange={(e) => setTelefon(e.target.value)}
                  placeholder="Introduceți-vă numărul de telefon"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-800 text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Mesaj <span className="text-red-600">*</span>
                </label>
                <textarea
                  className="form-input w-full text-gray-800"
                  onChange={(e) => setMesaj(e.target.value)}
                  placeholder="Mesaj"
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3 flex justify-center">
                <a
                  className="btn text-white bg-orange-600 hover:bg-orange-700"
                  href={`mailto:consulting.staff@yahoo.com?subject=Contact&body=Nume:%20${name}%0A%0AEmail:%20${email}%0A%0ATelefon:%20${telefon}%0A%0AMesaj:%20${mesaj}`}
                >
                    Contacteaza-ne
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
