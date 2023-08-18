import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Quotes() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        
            <>
            <div className="mx-auto max-w-2xl lg:max-w-4xl pb-16" data-aos="zoom-out">
                
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 txt sm:text-2xl sm:leading-9">
                        <p>
                        "Jika orang belum menertawakan mimpimu, <br></br>maka mimpimu belum cukup besar."
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                            className="mx-auto h-10 w-10 rounded-full"
                            src="https://w0.peakpx.com/wallpaper/18/435/HD-wallpaper-one-piece-monkey-d-luffy-gear-5-one-piece.jpg"
                            alt=""
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-white">
                                Monkey D. Luffy
                            </div>
                            <svg
                                viewBox="0 0 2 2"
                                width={3}
                                height={3}
                                aria-hidden="true"
                                className="fill-white"
                            >
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="txt">
                                Straw Hat Pirate
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            {/*  */}
            <div className="mx-auto max-w-2xl lg:max-w-4xl pb-16" data-aos="zoom-out">
                
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 txt sm:text-2xl sm:leading-9">
                        <p>
                            “Jika keajaiban itu tidak berpihak pada kita, <br></br>maka kita sendiri yang akan membuat keajaiban itu.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                            className="mx-auto h-10 w-10 rounded-full"
                            src="https://cdnwpseller.gramedia.net/wp-content/uploads/2023/02/zoroo-1-300x183.jpg"
                            alt=""
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-white">
                                Roronoa Zoro
                            </div>
                            <svg
                                viewBox="0 0 2 2"
                                width={3}
                                height={3}
                                aria-hidden="true"
                                className="fill-white"
                            >
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="txt">
                            Sword Warrior
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            {/*  */}
        </>
    );
}
