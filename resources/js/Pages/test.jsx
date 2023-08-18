import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import React from "react";

//------------------------------------------------//
import Footerz from "@/Components/Footerz";
import NavBar from "@/Components/NavBar";
import Quotes from "@/Components/Quotes";
import WebCreateWith from "@/Components/WebCreateWith";
import Modalz from "@/Components/Modalz";
import CTA from "@/Components/CTA";
//------------------------------------------------//

import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";
import { useEffect } from "react";
import { Head } from "@inertiajs/react";

const features = [
    {
        name: "Push to deploy.",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: CloudArrowUpIcon,
    },
    {
        name: "SSL certificates.",
        description:
            "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
        icon: LockClosedIcon,
    },
    {
        name: "Database backups.",
        description:
            "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: ServerIcon,
    },
];

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

// Navbar Jika Di Scroll Hilang
// let prevScrollPos = window.pageYOffset;

// window.addEventListener('scroll', () => {
//     let currentScrollPos = window.pageYOffset;

//     if (prevScrollPos > currentScrollPos) {
//         document.querySelector('.scroll-navbar').classList.remove('hidden');
//     } else {
//         document.querySelector('.scroll-navbar').classList.add('hidden');
//     }

//     prevScrollPos = currentScrollPos;
// });

const AnimationTest = () => {
    useEffect(() => {
        Aos.init({});
    });
};

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Head title="Homepage" />

            <div className="bg">
                <Modalz />

                <NavBar />
                {/* <div className="hero min-h-screen" style={{backgroundImage: 'url(http://dayy4site.my.id//gambar/background_1691080663_ezgif-1-eb64444a4b.gif)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-white">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}

                <div
                    className="relative isolate px-6 p-hero lg:px-8"
                    data-aos="zoom-out"
                >
                    {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 txt2 ring-1 ring-white/10 hover:ring-white/20">
                                Lorem ipsum dolor sit amet consectetur.{" "}
                                <a
                                    href="#"
                                    className="font-semibold text-indigo-600"
                                >
                                    <span
                                        className="absolute inset-0"
                                        aria-hidden="true"
                                    />
                                    Read more{" "}
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight txt sm:text-6xl">
                                いらっしゃいませ。
                            </h1>
                            <p className="mt-6 text-lg leading-8 txt2">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit impedit at iure
                                facilis asperiores assumenda illo nam natus
                                incidunt quisquam.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                                <a
                                    href="#"
                                    className="text-sm font-semibold leading-6 txt"
                                >
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                </div>

                <WebCreateWith />

                {/*  */}
                <div data-aos="slide-up">
                    <CTA />
                </div>
                {/*  */}

                <div data-aos="">
                    <img
                        className="mx-auto h-12"
                        src="https://i.ibb.co/82rytKV/20230813-210230.png"
                        alt="QUOTES"
                        data-aos="zoom-in"
                    />
                    <section className="relative overflow-hidden bg px-6 py-2 sm:py-2 lg:px-8">
                        <Quotes />
                    </section>
                </div>

                <Footerz />
            </div>
        </>
    );
}
