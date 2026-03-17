import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url('/assets/food5.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "80px",
        paddingLeft: "16px",
        paddingRight: "16px",
        boxSizing: "border-box",
      }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
        Welcome to{" "}
        <span className="text-red-600 bg-amber-50 rounded-full px-4 py-1">
          Faaji Grills
        </span>
      </h1>
      <p className="text-2xl font-bold text-white mb-8" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
        ...bringing african culinary delights to life
      </p>
    <a
  href="#projects"
  className="px-6 py-3 bg-red-600 text-white text-2xl rounded-full font-semibold hover:bg-red-700 transition-colors"
>
  View our Ita Faaji annual event gallery
</a>
    </section>
  );
}

export default Hero;
