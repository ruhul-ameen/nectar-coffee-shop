import React from "react";

const About = () => {
  return (
    <section className="my-20">
      <h1 className="text-3xl font-bold uppercase text-center">About us</h1>
      <div className="flex flex-col md:flex-row items-center gap-10 my-10">
        <div className="w-2/4 h-auto flex items-center justify-center ">
          <img
            src="/images/logo-gif.gif"
            alt="logo-gif"
            className=" w-72 h-auto rounded-full"
          />
        </div>
        <div className="w-2/4">
          <p className="text-lg text-center font-semibold md:text-left">
            "Born out of a passion for exceptional coffee, our coffee shop is a
            haven where every cup tells a story of quality and craftsmanship.
            Our purpose is to create a warm and inviting space where people can
            connect over expertly brewed coffee, fostering community and shared
            moments of delight."
          </p>
          <button className="border rounded-sm px-4 py-2 text-white hover:text-[#361500] hover:bg-white font-semibold mt-10">
            Taste Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
