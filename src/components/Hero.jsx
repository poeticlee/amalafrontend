import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen w-screen mx-auto flex flex-col justify-center items-center text-center bg-[url('/assets/food5.jpeg')] bg-cover bg-center bg bg-gray-100 px-4 mt-20 "

    >
      <h1 className="text-5xl text-white md:text-6xl font-bold mb-4">
        Welcome to <span className="text-red-600 bg-amber-50 rounded-4xl p-2 mt-10 sm:mt-10 pt-0">
  Faaji Grills
</span>

      </h1>
      <p className="text-2xl font-bold text-shadow-black text-white mb-6">
      ...bringing african culinary delights to life
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-red-600 text-white rounded-full  transition duration-300"
      >
        View our Ita Faaji annual event gallery
      </a>
    </section>
  );
}

export default Hero;

  
