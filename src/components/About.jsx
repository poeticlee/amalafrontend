import React from "react";

function About() {
  return (
    <section id="about" style={{ width: "100%", padding: "80px 24px", backgroundColor: "#ffffff", color: "#1f2937", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-6 bg-red-400 rounded-full px-6 py-2">
            About Us
          </h2>
        </div>
        <p className="text-lg leading-relaxed mb-6">
          <span className="font-semibold text-blue-600">Faaji Grills</span>{" "}
          is a vibrant catering outfit specializing in authentic eclectic cuisine, live grilling,
          and culinary experiences that delight the senses. We bring flavour and culture to your
          events — whether weddings, corporate gatherings, private parties, or festivals.
          At Faaji Grills, we don't just serve food; we serve memories.
        </p>
      </div>
    </section>
  );
}

export default About;
