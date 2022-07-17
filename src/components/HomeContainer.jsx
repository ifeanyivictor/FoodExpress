import React from "react";
import Delivery from "../assets/delivery.png";
import HeroBg from "../assets/heroBg.png";
import { heroData } from "../utils/data";

export default function HomeContainer() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-[calc(100%-88px)]" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center bg-orange-100 px-4 py-1 rounded-full gap-2 justify-center"
        >
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem}">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] md:text-[5rem}">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%] ">
          Free delivery very where we operate. We are doing well with our
          services and expanding our network to reach out to more users
          globally. At Express delivery, we do everything good to please our
          customers.
        </p>
        <button
          type="button"
          className="mt-4 bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 relative">
        <img
          src={HeroBg}
          className="h-420 lg:w-auto w-full lg:h-650 ml-auto"
          alt="hero-bg"
        />
        <div className="lg:px-32 w-full h-full top-0 left-0 absolute flex items-center justify-center py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="flex flex-col items-center justify-center lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl drop-shadow-lg"
              >
                <img src={n.img} className="lg:w-40 w-20 lg:-mt-20 -mt-10" alt="" />
                <p className="lg:text-xl font-semibold text-textColor lg:mt-4 text-base mt-2">
                  {n.name}
                </p>
                <p className="lg:text-sm text-[12px] text-lighttextGray font-semibold lg:my-3 my-1">
                  {n.desc}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">N</span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
