'use client'

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";

const StartUp = () => {

    const [active, setActive] = useState<number>(0);
    const [autorotate, setAutorotate] = useState<boolean>(true);
    const [autorotateTiming] = useState<number>(7000);
  
    interface Item {
      img?: StaticImageData;
      alt: string;
      quote: string;
      name: string;
      role: string;
      href: string;
      team: string;
      link: string;
    }
  
    const items: Item[] = [
      {
        // img: UserImage01,
        alt: "Testimonial 01",
        quote: `Cu bucurie și mândrie vă împărtășesc vestea că proiectul nostru de finanțare pentru sala noastră de evenimente a fost implementat cu succes! Acest succes nu ar fi fost posibil fără efortul și sprijinul vostru necondiționat. Vreau să vă mulțumesc din suflet pentru susținerea și încrederea acordată echipei noastre.
  
        Cu această finanțare, am putut să modernizăm și să extindem facilitățile noastre, oferind astfel o experiență mai bună și mai memorabilă clienților noștri. Am investit în echipamente de ultimă generație și am îmbunătățit serviciile noastre, asigurându-ne că fiecare eveniment găzduit în sala noastră va fi un succes garantat.
        
        Succesul proiectului nu a fost doar o realizare financiară, ci și o dovadă a capacității noastre de a inova și de a ne adapta la cerințele din ce în ce mai exigente ale industriei evenimentelor. Suntem mândri că putem oferi acum o locație de top, potrivită pentru orice tip de eveniment, de la conferințe și seminarii la nunți și petreceri private.`,
        name: "Zetu Dana",
        role: "CEO",
        href: "#0",
        team: "@ Valery Evenimente SRL",
        link: "#0",
      },
      {
        // img: UserImage02,
        alt: "Testimonial 02",
        quote: `Mă bucur să vă împărtășesc vestea cu privire la un proiect de finanțare implementat cu succes în cadrul companiei noastre de catering! Datorită eforturilor dedicate și pasiunii echipei noastre, am reușit să aducem la îndeplinire acest proiect, consolidând poziția noastră pe piață și sporind calitatea serviciilor oferite.
  
        Este o realizare mândră pentru noi, deoarece acest proiect ne-a permis să extindem oferta de meniuri și să investim în echipamente moderne, sporind astfel eficiența și profesionalismul nostru. În plus, am consolidat parteneriatele noastre strategice și am dezvoltat o rețea de clienți fideli, ceea ce ne motivează să continuăm să excelăm în domeniul cateringului.`,
        name: "Zetu Cristian",
        role: "CEO",
        href: "#0",
        team: "@ Valery Events SRL",
        link: "#0",
      },
      {
        // img: UserImage03,
        alt: "Testimonial 03",
        quote: `Cu bucurie și mândrie, vă adresez acest feedback pentru a împărtăși succesul extraordinar al proiectului nostru de finanțare implementat cu succes. Acest proiect a reprezentat o provocare majoră pentru întreaga echipă, iar rezultatele obținute demonstrează angajamentul nostru ferm pentru excelență și inovație.
  
        Prin efortul colectiv, am reușit să obținem finanțarea necesară pentru a duce la îndeplinire planurile noastre ambițioase de extindere și dezvoltare. Astăzi, suntem mândri să vă anunțăm că am reușit să consolidezăm poziția companiei noastre pe piață și să livrăm proiecte de construcții remarcabile, care aduc plus valoare comunităților în care activăm.`,
        name: "Jude Radu",
        role: "CEO",
        href: "#0",
        team: "@ Jude Construct SRL",
        link: "#0",
      },
    ];
  
    const testimonials = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (!autorotate) return;
      const interval = setInterval(() => {
        setActive(active + 1 === items.length ? 0 : (active) => active + 1);
      }, autorotateTiming);
      return () => clearInterval(interval);
    }, [active, autorotate]);
  
    const heightFix = () => {
      if (testimonials.current && testimonials.current.parentElement)
        testimonials.current.parentElement.style.height = `${testimonials.current.clientHeight}px`;
    };
  
    useEffect(() => {
      heightFix();
    }, []);

  return (
    <div>
    <div className="ml-5">
      <svg
        width="262"
        height="35"
        viewBox="0 0 262 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.26 28.54C8.07333 28.54 6.96 28.46 5.92 28.3C4.89333 28.1533 3.95333 27.96 3.1 27.72C2.26 27.4667 1.52 27.2067 0.88 26.94L0.34 21.18C1.39333 21.6733 2.64 22.1333 4.08 22.56C5.52 22.9733 7.04667 23.18 8.66 23.18C10.22 23.18 11.3267 22.9867 11.98 22.6C12.6467 22.2 12.98 21.58 12.98 20.74V20.6C12.98 20.04 12.8267 19.5867 12.52 19.24C12.2267 18.88 11.7267 18.5533 11.02 18.26C10.3267 17.9533 9.38667 17.6267 8.2 17.28C6.41333 16.7467 4.92 16.1533 3.72 15.5C2.53333 14.8467 1.64667 14.0333 1.06 13.06C0.473333 12.0733 0.18 10.8267 0.18 9.32V9.06C0.18 6.74 0.966667 4.96667 2.54 3.74C4.12667 2.51333 6.45333 1.9 9.52 1.9C11.36 1.9 12.9467 2.06 14.28 2.38C15.6267 2.7 16.7667 3.08 17.7 3.52L18.24 8.88C17.2133 8.38667 16.0467 7.97333 14.74 7.64C13.4467 7.29333 12.06 7.12 10.58 7.12C9.54 7.12 8.72 7.20667 8.12 7.38C7.53333 7.55333 7.12 7.80667 6.88 8.14C6.64 8.46 6.52 8.85333 6.52 9.32V9.4C6.52 9.88 6.65333 10.3 6.92 10.66C7.2 11.02 7.69333 11.3667 8.4 11.7C9.12 12.0333 10.14 12.3933 11.46 12.78C13.2333 13.3 14.7 13.86 15.86 14.46C17.0333 15.0467 17.9067 15.8133 18.48 16.76C19.0667 17.6933 19.36 18.94 19.36 20.5V20.82C19.36 23.3933 18.5267 25.3267 16.86 26.62C15.1933 27.9 12.66 28.54 9.26 28.54ZM29.9 28.44C28.1533 28.44 26.76 28.18 25.72 27.66C24.6933 27.1267 23.9533 26.3333 23.5 25.28C23.0467 24.2267 22.82 22.9267 22.82 21.38V10.4H28.9V20.4C28.9 21.36 29.1133 22.0667 29.54 22.52C29.98 22.96 30.7933 23.18 31.98 23.18C32.6333 23.18 33.28 23.1067 33.92 22.96C34.56 22.8133 35.14 22.6267 35.66 22.4L35.14 27.46C34.46 27.7533 33.6733 27.9867 32.78 28.16C31.9 28.3467 30.94 28.44 29.9 28.44ZM20.18 13.22V8.42H35.48L34.94 13.22H20.18ZM22.9 8.86L22.88 3.78L28.94 3.2L28.72 8.86H22.9ZM49.4953 28L49.6753 23.08L49.5353 22.78V16.64L49.4953 15.84C49.4953 14.7467 49.1753 13.94 48.5353 13.42C47.8953 12.9 46.822 12.64 45.3153 12.64C43.9953 12.64 42.742 12.8067 41.5553 13.14C40.3686 13.4733 39.2486 13.8533 38.1953 14.28L38.7153 9.54C39.342 9.24667 40.042 8.97333 40.8153 8.72C41.602 8.45333 42.4686 8.24 43.4153 8.08C44.362 7.92 45.3753 7.84 46.4553 7.84C48.1753 7.84 49.6153 8.04 50.7753 8.44C51.9353 8.84 52.862 9.40667 53.5553 10.14C54.2486 10.8733 54.7486 11.7533 55.0553 12.78C55.362 13.7933 55.5153 14.9133 55.5153 16.14V28H49.4953ZM43.2353 28.46C41.2753 28.46 39.7886 27.9667 38.7753 26.98C37.762 25.9933 37.2553 24.5867 37.2553 22.76V22.22C37.2553 20.2867 37.8486 18.86 39.0353 17.94C40.2353 17.0067 42.1353 16.3733 44.7353 16.04L50.0153 15.34L50.3753 19.02L45.6953 19.7C44.7486 19.82 44.082 20.04 43.6953 20.36C43.3086 20.68 43.1153 21.1533 43.1153 21.78V21.92C43.1153 22.52 43.3086 23 43.6953 23.36C44.082 23.7067 44.702 23.88 45.5553 23.88C46.302 23.88 46.942 23.7667 47.4753 23.54C48.022 23.3133 48.4686 23.02 48.8153 22.66C49.162 22.2867 49.422 21.8733 49.5953 21.42L50.4553 23.9H49.4553C49.242 24.7533 48.9086 25.5267 48.4553 26.22C48.0153 26.9133 47.3753 27.46 46.5353 27.86C45.6953 28.26 44.5953 28.46 43.2353 28.46ZM65.0791 16.96L63.3991 13.24H64.8391C65.1591 11.6133 65.7791 10.34 66.6991 9.42C67.6324 8.48667 68.9457 8.02 70.6391 8.02C70.9324 8.02 71.1991 8.04 71.4391 8.08C71.6924 8.12 71.9324 8.16667 72.1591 8.22L72.4591 14.4C72.1791 14.32 71.8524 14.2667 71.4791 14.24C71.1057 14.2 70.7257 14.18 70.3391 14.18C69.0324 14.18 67.9324 14.4267 67.0391 14.92C66.1457 15.4 65.4924 16.08 65.0791 16.96ZM59.0791 28V8.34H64.8391L64.5791 14.62L65.1991 14.7V28H59.0791ZM83.3297 28.44C81.583 28.44 80.1897 28.18 79.1497 27.66C78.123 27.1267 77.383 26.3333 76.9297 25.28C76.4764 24.2267 76.2497 22.9267 76.2497 21.38V10.4H82.3297V20.4C82.3297 21.36 82.543 22.0667 82.9697 22.52C83.4097 22.96 84.223 23.18 85.4097 23.18C86.063 23.18 86.7097 23.1067 87.3497 22.96C87.9897 22.8133 88.5697 22.6267 89.0897 22.4L88.5697 27.46C87.8897 27.7533 87.103 27.9867 86.2097 28.16C85.3297 28.3467 84.3697 28.44 83.3297 28.44ZM73.6097 13.22V8.42H88.9097L88.3697 13.22H73.6097ZM76.3297 8.86L76.3097 3.78L82.3697 3.2L82.1497 8.86H76.3297ZM102.251 28.62C98.5973 28.62 95.8906 27.74 94.1306 25.98C92.384 24.2067 91.5106 21.6133 91.5106 18.2V2.44H97.7906V18.32C97.7906 19.9733 98.144 21.2267 98.8506 22.08C99.5706 22.92 100.704 23.34 102.251 23.34C103.811 23.34 104.944 22.92 105.651 22.08C106.357 21.2267 106.711 19.9733 106.711 18.32V2.44H112.991V18.2C112.991 21.6133 112.117 24.2067 110.371 25.98C108.637 27.74 105.931 28.62 102.251 28.62ZM128.748 28.46C127.574 28.46 126.588 28.2667 125.788 27.88C124.988 27.4933 124.348 26.9467 123.868 26.24C123.401 25.52 123.068 24.6867 122.868 23.74H121.288L122.728 19.62C122.754 20.4333 122.908 21.12 123.188 21.68C123.481 22.24 123.894 22.6733 124.428 22.98C124.974 23.2733 125.621 23.42 126.368 23.42C127.488 23.42 128.334 23.0933 128.908 22.44C129.494 21.7733 129.788 20.7867 129.788 19.48V16.68C129.788 15.3733 129.501 14.3933 128.928 13.74C128.368 13.0867 127.528 12.76 126.408 12.76C125.781 12.76 125.208 12.88 124.688 13.12C124.181 13.36 123.748 13.68 123.388 14.08C123.041 14.4667 122.788 14.9133 122.628 15.42L121.228 12.6H122.848C123.048 11.72 123.381 10.9267 123.848 10.22C124.314 9.5 124.961 8.93333 125.788 8.52C126.614 8.09333 127.668 7.88 128.948 7.88C131.241 7.88 132.974 8.63333 134.148 10.14C135.334 11.6333 135.928 13.88 135.928 16.88V19.28C135.928 22.3067 135.334 24.5933 134.148 26.14C132.974 27.6867 131.174 28.46 128.748 28.46ZM116.728 34.88V8.34H122.808L122.608 13.64L122.728 14.34V21.9L122.648 22.94L122.808 28.2V34.88H116.728ZM157.315 2.42L164.235 21.18H164.515L164.235 10.38V2.42H170.195V28H161.815L154.635 8.82H154.375L154.655 19.86V28H148.695V2.42H157.315ZM185.519 28L185.699 23.08L185.559 22.78V16.64L185.519 15.84C185.519 14.7467 185.199 13.94 184.559 13.42C183.919 12.9 182.845 12.64 181.339 12.64C180.019 12.64 178.765 12.8067 177.579 13.14C176.392 13.4733 175.272 13.8533 174.219 14.28L174.739 9.54C175.365 9.24667 176.065 8.97333 176.839 8.72C177.625 8.45333 178.492 8.24 179.439 8.08C180.385 7.92 181.399 7.84 182.479 7.84C184.199 7.84 185.639 8.04 186.799 8.44C187.959 8.84 188.885 9.40667 189.579 10.14C190.272 10.8733 190.772 11.7533 191.079 12.78C191.385 13.7933 191.539 14.9133 191.539 16.14V28H185.519ZM179.259 28.46C177.299 28.46 175.812 27.9667 174.799 26.98C173.785 25.9933 173.279 24.5867 173.279 22.76V22.22C173.279 20.2867 173.872 18.86 175.059 17.94C176.259 17.0067 178.159 16.3733 180.759 16.04L186.039 15.34L186.399 19.02L181.719 19.7C180.772 19.82 180.105 20.04 179.719 20.36C179.332 20.68 179.139 21.1533 179.139 21.78V21.92C179.139 22.52 179.332 23 179.719 23.36C180.105 23.7067 180.725 23.88 181.579 23.88C182.325 23.88 182.965 23.7667 183.499 23.54C184.045 23.3133 184.492 23.02 184.839 22.66C185.185 22.2867 185.445 21.8733 185.619 21.42L186.479 23.9H185.479C185.265 24.7533 184.932 25.5267 184.479 26.22C184.039 26.9133 183.399 27.46 182.559 27.86C181.719 28.26 180.619 28.46 179.259 28.46ZM202.728 28.44C200.981 28.44 199.588 28.18 198.548 27.66C197.521 27.1267 196.781 26.3333 196.328 25.28C195.875 24.2267 195.648 22.9267 195.648 21.38V10.4H201.728V20.4C201.728 21.36 201.941 22.0667 202.368 22.52C202.808 22.96 203.621 23.18 204.808 23.18C205.461 23.18 206.108 23.1067 206.748 22.96C207.388 22.8133 207.968 22.6267 208.488 22.4L207.968 27.46C207.288 27.7533 206.501 27.9867 205.608 28.16C204.728 28.3467 203.768 28.44 202.728 28.44ZM193.008 13.22V8.42H208.308L207.768 13.22H193.008ZM195.728 8.86L195.708 3.78L201.768 3.2L201.548 8.86H195.728ZM210.849 28V8.34H216.969V28H210.849ZM213.909 6.48C212.762 6.48 211.929 6.22 211.409 5.7C210.889 5.16667 210.629 4.45333 210.629 3.56V3.42C210.629 2.52667 210.889 1.82 211.409 1.3C211.929 0.779999 212.762 0.519999 213.909 0.519999C215.029 0.519999 215.849 0.779999 216.369 1.3C216.902 1.82 217.169 2.52667 217.169 3.42V3.56C217.169 4.46667 216.902 5.18 216.369 5.7C215.849 6.22 215.029 6.48 213.909 6.48ZM229.713 28.56C226.54 28.56 224.14 27.7733 222.513 26.2C220.9 24.6133 220.093 22.3867 220.093 19.52V16.94C220.093 14.0333 220.907 11.78 222.533 10.18C224.16 8.56667 226.553 7.76 229.713 7.76C232.873 7.76 235.26 8.56667 236.873 10.18C238.5 11.78 239.313 14.0333 239.313 16.94V19.52C239.313 22.3867 238.507 24.6133 236.893 26.2C235.28 27.7733 232.887 28.56 229.713 28.56ZM229.713 23.74C230.847 23.74 231.707 23.4 232.293 22.72C232.893 22.0267 233.193 21.0467 233.193 19.78V16.68C233.193 15.3467 232.893 14.3333 232.293 13.64C231.707 12.9467 230.847 12.6 229.713 12.6C228.58 12.6 227.713 12.9467 227.113 13.64C226.527 14.3333 226.233 15.3467 226.233 16.68V19.78C226.233 21.0467 226.527 22.0267 227.113 22.72C227.713 23.4 228.58 23.74 229.713 23.74ZM255.078 28V16.44C255.078 15.72 254.985 15.1 254.798 14.58C254.612 14.0467 254.298 13.64 253.858 13.36C253.418 13.08 252.818 12.94 252.058 12.94C251.432 12.94 250.878 13.0533 250.398 13.28C249.918 13.4933 249.512 13.7933 249.178 14.18C248.858 14.5533 248.618 14.98 248.458 15.46L247.518 12.6H248.558C248.772 11.7067 249.118 10.9067 249.598 10.2C250.092 9.49333 250.765 8.93333 251.618 8.52C252.472 8.09333 253.552 7.88 254.858 7.88C256.325 7.88 257.525 8.16667 258.458 8.74C259.392 9.3 260.078 10.14 260.518 11.26C260.972 12.38 261.198 13.78 261.198 15.46V28H255.078ZM242.438 28V8.34H248.518L248.318 13.26L248.558 13.84V28H242.438Z"
          fill="#7B7A7A"
        />
      </svg>
    </div>
    {/* Carousel area */}
    <div className="max-w-3xl mx-auto">
      {/* Carousel */}
      <div className="relative mt-10" data-aos="zoom-y-out">
        {/* Testimonials */}
        <div className="transition-all border-2 border-gray-200 rounded bg-white">
          <div
            className="relative flex flex-col items-start z-10"
            ref={testimonials}
          >
            {items.map((item, index) => (
              <Transition
                key={index}
                show={active === index}
                className="w-full text-center px-12 py-8 pt-20 mx-4 md:mx-0"
                enter="transition ease-in-out duration-700 transform order-first"
                enterFrom="opacity-0 -translate-y-8"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-8"
                beforeEnter={() => heightFix()}
                unmount={false}
              >
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg
                    className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-orange-600"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  {/* <Image className="relative rounded-full" src={item.img} width={96} height={96} alt={item.alt} /> */}
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  {item.quote}
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  {item.name}
                </cite>
                <div className="text-gray-600">
                  <span>{item.role}</span>{" "}
                  <a
                    className="text-orange-600 hover:underline"
                    href={item.href}
                  >
                    {item.team}
                  </a>
                </div>
              </Transition>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute inset-0 flex items-center justify-between">
          <button
            className="relative z-20 w-16 h-16 p-1 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-md hover:shadow-lg transform -translate-x-2 md:-translate-x-1/2"
            onClick={() => {
              setActive(active === 0 ? items.length - 1 : active - 1);
              setAutorotate(false);
            }}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-4 h-4 fill-current text-gray-500"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
            </svg>
          </button>
          <button
            className="relative z-20 w-16 h-16 p-1 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-md hover:shadow-lg transform translate-x-2 md:translate-x-1/2"
            onClick={() => {
              setActive(active === items.length - 1 ? 0 : active + 1);
              setAutorotate(false);
            }}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-4 h-4 fill-current text-gray-500"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StartUp