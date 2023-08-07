'use client'

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";

const M2Capital = () => {

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
    <div className="ml-5 mt-10">
      <svg
        width="340"
        height="35"
        viewBox="0 0 340 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.0400001 28L0.84 2.44H9.56L13.78 17.68H14.04L18.26 2.44H26.98L27.78 28H21.72L21.54 19.62L21.36 9.42H21.06L16.68 25H11.12L6.74 9.42H6.42L6.26 19.64L6.1 28H0.0400001ZM30.6859 28V22.36L36.9459 16.92C37.9993 16 38.8659 15.1933 39.5459 14.5C40.2393 13.8067 40.7593 13.1467 41.1059 12.52C41.4526 11.8933 41.6259 11.2333 41.6259 10.54V10.36C41.6259 9.73333 41.4926 9.19333 41.2259 8.74C40.9593 8.27333 40.5126 7.91333 39.8859 7.66C39.2726 7.40667 38.4526 7.28 37.4259 7.28C36.1593 7.28 34.9659 7.46667 33.8459 7.84C32.7259 8.2 31.7326 8.6 30.8659 9.04L31.4059 3.64C31.9793 3.33333 32.6393 3.05333 33.3859 2.8C34.1459 2.53333 34.9926 2.32 35.9259 2.16C36.8726 2 37.8993 1.92 39.0059 1.92C41.9926 1.92 44.2393 2.58667 45.7459 3.92C47.2526 5.25333 48.0059 7.12 48.0059 9.52V9.8C48.0059 11.0533 47.8126 12.18 47.4259 13.18C47.0393 14.18 46.4393 15.1533 45.6259 16.1C44.8259 17.0333 43.7926 18.0533 42.5259 19.16L38.7459 22.52V23.66L36.0659 22.74H48.2659V28H30.6859ZM70.8009 28.56C67.1609 28.56 64.4476 27.6 62.6609 25.68C60.8876 23.7467 60.0009 20.9933 60.0009 17.42V12.88C60.0009 9.37333 60.8943 6.66667 62.6809 4.76C64.4676 2.84 67.1609 1.88 70.7609 1.88C71.7209 1.88 72.6076 1.95333 73.4209 2.1C74.2343 2.24667 74.9743 2.44667 75.6409 2.7C76.3076 2.94 76.8943 3.21333 77.4009 3.52L77.8609 8.88C77.0743 8.46667 76.2076 8.10667 75.2609 7.8C74.3276 7.48 73.2409 7.32 72.0009 7.32C70.0943 7.32 68.6809 7.83333 67.7609 8.86C66.8543 9.87333 66.4009 11.3 66.4009 13.14V17.18C66.4009 19.0067 66.8609 20.4333 67.7809 21.46C68.7143 22.4867 70.2009 23 72.2409 23C73.4409 23 74.5143 22.84 75.4609 22.52C76.4076 22.2 77.2743 21.8133 78.0609 21.36L77.6009 26.84C77.0943 27.1467 76.5009 27.4333 75.8209 27.7C75.1409 27.9533 74.3809 28.16 73.5409 28.32C72.7143 28.48 71.8009 28.56 70.8009 28.56ZM92.2922 28L92.4722 23.08L92.3322 22.78V16.64L92.2922 15.84C92.2922 14.7467 91.9722 13.94 91.3322 13.42C90.6922 12.9 89.6189 12.64 88.1122 12.64C86.7922 12.64 85.5389 12.8067 84.3522 13.14C83.1655 13.4733 82.0455 13.8533 80.9922 14.28L81.5122 9.54C82.1389 9.24667 82.8389 8.97333 83.6122 8.72C84.3989 8.45333 85.2655 8.24 86.2122 8.08C87.1589 7.92 88.1722 7.84 89.2522 7.84C90.9722 7.84 92.4122 8.04 93.5722 8.44C94.7322 8.84 95.6589 9.40667 96.3522 10.14C97.0455 10.8733 97.5455 11.7533 97.8522 12.78C98.1589 13.7933 98.3122 14.9133 98.3122 16.14V28H92.2922ZM86.0322 28.46C84.0722 28.46 82.5855 27.9667 81.5722 26.98C80.5589 25.9933 80.0522 24.5867 80.0522 22.76V22.22C80.0522 20.2867 80.6455 18.86 81.8322 17.94C83.0322 17.0067 84.9322 16.3733 87.5322 16.04L92.8122 15.34L93.1722 19.02L88.4922 19.7C87.5455 19.82 86.8789 20.04 86.4922 20.36C86.1055 20.68 85.9122 21.1533 85.9122 21.78V21.92C85.9122 22.52 86.1055 23 86.4922 23.36C86.8789 23.7067 87.4989 23.88 88.3522 23.88C89.0989 23.88 89.7389 23.7667 90.2722 23.54C90.8189 23.3133 91.2655 23.02 91.6122 22.66C91.9589 22.2867 92.2189 21.8733 92.3922 21.42L93.2522 23.9H92.2522C92.0389 24.7533 91.7055 25.5267 91.2522 26.22C90.8122 26.9133 90.1722 27.46 89.3322 27.86C88.4922 28.26 87.3922 28.46 86.0322 28.46ZM113.896 28.46C112.723 28.46 111.736 28.2667 110.936 27.88C110.136 27.4933 109.496 26.9467 109.016 26.24C108.549 25.52 108.216 24.6867 108.016 23.74H106.436L107.876 19.62C107.903 20.4333 108.056 21.12 108.336 21.68C108.629 22.24 109.043 22.6733 109.576 22.98C110.123 23.2733 110.769 23.42 111.516 23.42C112.636 23.42 113.483 23.0933 114.056 22.44C114.643 21.7733 114.936 20.7867 114.936 19.48V16.68C114.936 15.3733 114.649 14.3933 114.076 13.74C113.516 13.0867 112.676 12.76 111.556 12.76C110.929 12.76 110.356 12.88 109.836 13.12C109.329 13.36 108.896 13.68 108.536 14.08C108.189 14.4667 107.936 14.9133 107.776 15.42L106.376 12.6H107.996C108.196 11.72 108.529 10.9267 108.996 10.22C109.463 9.5 110.109 8.93333 110.936 8.52C111.763 8.09333 112.816 7.88 114.096 7.88C116.389 7.88 118.123 8.63333 119.296 10.14C120.483 11.6333 121.076 13.88 121.076 16.88V19.28C121.076 22.3067 120.483 24.5933 119.296 26.14C118.123 27.6867 116.323 28.46 113.896 28.46ZM101.876 34.88V8.34H107.956L107.756 13.64L107.876 14.34V21.9L107.796 22.94L107.956 28.2V34.88H101.876ZM124.302 28V8.34H130.422V28H124.302ZM127.362 6.48C126.216 6.48 125.382 6.22 124.862 5.7C124.342 5.16667 124.082 4.45333 124.082 3.56V3.42C124.082 2.52667 124.342 1.82 124.862 1.3C125.382 0.779999 126.216 0.519999 127.362 0.519999C128.482 0.519999 129.302 0.779999 129.822 1.3C130.356 1.82 130.622 2.52667 130.622 3.42V3.56C130.622 4.46667 130.356 5.18 129.822 5.7C129.302 6.22 128.482 6.48 127.362 6.48ZM142.127 28.44C140.38 28.44 138.987 28.18 137.947 27.66C136.92 27.1267 136.18 26.3333 135.727 25.28C135.273 24.2267 135.047 22.9267 135.047 21.38V10.4H141.127V20.4C141.127 21.36 141.34 22.0667 141.767 22.52C142.207 22.96 143.02 23.18 144.207 23.18C144.86 23.18 145.507 23.1067 146.147 22.96C146.787 22.8133 147.367 22.6267 147.887 22.4L147.367 27.46C146.687 27.7533 145.9 27.9867 145.007 28.16C144.127 28.3467 143.167 28.44 142.127 28.44ZM132.407 13.22V8.42H147.707L147.167 13.22H132.407ZM135.127 8.86L135.107 3.78L141.167 3.2L140.947 8.86H135.127ZM161.722 28L161.902 23.08L161.762 22.78V16.64L161.722 15.84C161.722 14.7467 161.402 13.94 160.762 13.42C160.122 12.9 159.049 12.64 157.542 12.64C156.222 12.64 154.969 12.8067 153.782 13.14C152.595 13.4733 151.475 13.8533 150.422 14.28L150.942 9.54C151.569 9.24667 152.269 8.97333 153.042 8.72C153.829 8.45333 154.695 8.24 155.642 8.08C156.589 7.92 157.602 7.84 158.682 7.84C160.402 7.84 161.842 8.04 163.002 8.44C164.162 8.84 165.089 9.40667 165.782 10.14C166.475 10.8733 166.975 11.7533 167.282 12.78C167.589 13.7933 167.742 14.9133 167.742 16.14V28H161.722ZM155.462 28.46C153.502 28.46 152.015 27.9667 151.002 26.98C149.989 25.9933 149.482 24.5867 149.482 22.76V22.22C149.482 20.2867 150.075 18.86 151.262 17.94C152.462 17.0067 154.362 16.3733 156.962 16.04L162.242 15.34L162.602 19.02L157.922 19.7C156.975 19.82 156.309 20.04 155.922 20.36C155.535 20.68 155.342 21.1533 155.342 21.78V21.92C155.342 22.52 155.535 23 155.922 23.36C156.309 23.7067 156.929 23.88 157.782 23.88C158.529 23.88 159.169 23.7667 159.702 23.54C160.249 23.3133 160.695 23.02 161.042 22.66C161.389 22.2867 161.649 21.8733 161.822 21.42L162.682 23.9H161.682C161.469 24.7533 161.135 25.5267 160.682 26.22C160.242 26.9133 159.602 27.46 158.762 27.86C157.922 28.26 156.822 28.46 155.462 28.46ZM171.326 28V1.58H177.446V28H171.326ZM195.231 28V22.76H200.811C202.411 22.76 203.611 22.3267 204.411 21.46C205.211 20.5933 205.611 19.3533 205.611 17.74V12.62C205.611 11.0067 205.211 9.77333 204.411 8.92C203.611 8.05333 202.411 7.62 200.811 7.62H195.211V2.44H201.031C204.671 2.44 207.391 3.32 209.191 5.08C211.005 6.82667 211.911 9.34 211.911 12.62V17.76C211.911 21.0533 211.011 23.5867 209.211 25.36C207.411 27.12 204.685 28 201.031 28H195.231ZM190.851 28V2.44H197.011V28H190.851ZM224.964 28.5C221.391 28.5 218.751 27.7067 217.044 26.12C215.337 24.52 214.484 22.1933 214.484 19.14V17.1C214.484 14.0867 215.284 11.78 216.884 10.18C218.484 8.56667 220.811 7.76 223.864 7.76C225.917 7.76 227.624 8.11333 228.984 8.82C230.357 9.51333 231.384 10.5067 232.064 11.8C232.757 13.0933 233.104 14.6467 233.104 16.46V17.12C233.104 17.6267 233.077 18.1467 233.024 18.68C232.984 19.2 232.924 19.6867 232.844 20.14H227.324C227.377 19.3667 227.411 18.64 227.424 17.96C227.437 17.2667 227.444 16.64 227.444 16.08C227.444 15.2667 227.317 14.5867 227.064 14.04C226.811 13.48 226.417 13.0533 225.884 12.76C225.364 12.4667 224.691 12.32 223.864 12.32C222.637 12.32 221.737 12.6533 221.164 13.32C220.604 13.9733 220.324 14.9067 220.324 16.12V17.92L220.364 18.58V19.98C220.364 20.4867 220.444 20.9667 220.604 21.42C220.777 21.8733 221.071 22.2733 221.484 22.62C221.911 22.9533 222.491 23.22 223.224 23.42C223.971 23.6067 224.917 23.7 226.064 23.7C227.277 23.7 228.444 23.5867 229.564 23.36C230.684 23.12 231.757 22.8 232.784 22.4L232.284 27C231.377 27.4667 230.304 27.8333 229.064 28.1C227.824 28.3667 226.457 28.5 224.964 28.5ZM217.724 20.14V16.36H231.604V20.14H217.724ZM251.986 28H245.726V2.44H251.986V28ZM249.286 22.74H262.646V28H249.286V22.74ZM270.98 8.34V19.9C270.98 20.62 271.073 21.2467 271.26 21.78C271.447 22.3 271.76 22.7067 272.2 23C272.64 23.28 273.24 23.42 274 23.42C274.64 23.42 275.193 23.3067 275.66 23.08C276.14 22.8533 276.54 22.5467 276.86 22.16C277.193 21.7733 277.44 21.3467 277.6 20.88L278.54 23.74H277.5C277.287 24.62 276.933 25.42 276.44 26.14C275.96 26.86 275.293 27.4267 274.44 27.84C273.6 28.2533 272.52 28.46 271.2 28.46C269.747 28.46 268.547 28.18 267.6 27.62C266.667 27.0467 265.973 26.2 265.52 25.08C265.08 23.96 264.86 22.56 264.86 20.88V8.34H270.98ZM283.62 8.34V28H277.54L277.74 23.08L277.5 22.52V8.34H283.62ZM295.926 28.52C292.806 28.52 290.493 27.7 288.986 26.06C287.48 24.42 286.726 22.1133 286.726 19.14V17.1C286.726 14.18 287.48 11.9 288.986 10.26C290.493 8.62 292.8 7.8 295.906 7.8C296.706 7.8 297.453 7.86 298.146 7.98C298.84 8.08667 299.48 8.24 300.066 8.44C300.653 8.64 301.166 8.85333 301.606 9.08L302.106 14.14C301.453 13.7667 300.733 13.46 299.946 13.22C299.16 12.9667 298.273 12.84 297.286 12.84C295.74 12.84 294.62 13.2133 293.926 13.96C293.233 14.7067 292.886 15.7867 292.886 17.2V18.9C292.886 20.34 293.253 21.4467 293.986 22.22C294.72 22.9933 295.866 23.38 297.426 23.38C298.4 23.38 299.273 23.2667 300.046 23.04C300.833 22.8 301.58 22.4933 302.286 22.12L301.806 27.2C301.113 27.5733 300.26 27.8867 299.246 28.14C298.233 28.3933 297.126 28.52 295.926 28.52ZM311.087 16.96L309.407 13.24H310.847C311.167 11.6133 311.787 10.34 312.707 9.42C313.64 8.48667 314.954 8.02 316.647 8.02C316.94 8.02 317.207 8.04 317.447 8.08C317.7 8.12 317.94 8.16667 318.167 8.22L318.467 14.4C318.187 14.32 317.86 14.2667 317.487 14.24C317.114 14.2 316.734 14.18 316.347 14.18C315.04 14.18 313.94 14.4267 313.047 14.92C312.154 15.4 311.5 16.08 311.087 16.96ZM305.087 28V8.34H310.847L310.587 14.62L311.207 14.7V28H305.087ZM326.636 8.34V19.9C326.636 20.62 326.73 21.2467 326.916 21.78C327.103 22.3 327.416 22.7067 327.856 23C328.296 23.28 328.896 23.42 329.656 23.42C330.296 23.42 330.85 23.3067 331.316 23.08C331.796 22.8533 332.196 22.5467 332.516 22.16C332.85 21.7733 333.096 21.3467 333.256 20.88L334.196 23.74H333.156C332.943 24.62 332.59 25.42 332.096 26.14C331.616 26.86 330.95 27.4267 330.096 27.84C329.256 28.2533 328.176 28.46 326.856 28.46C325.403 28.46 324.203 28.18 323.256 27.62C322.323 27.0467 321.63 26.2 321.176 25.08C320.736 23.96 320.516 22.56 320.516 20.88V8.34H326.636ZM339.276 8.34V28H333.196L333.396 23.08L333.156 22.52V8.34H339.276Z"
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

export default M2Capital