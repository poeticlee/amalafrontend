import React from "react";

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
      <div className="flex justify-center">
  <h2 className="text-3xl text-white md:text-4xl font-bold mb-6 bg-red-400 rounded-4xl px-6 py-2 w-fit text-center">
    About Us
  </h2>
</div>
        <p className="text-lg leading-relaxed mb-6">
       < span className="font-semibold text-blue-600">Faaji Grills</span>{" "}is a vibrant catering outfit specializing in 
          authentic eclectic cuisine, live grilling, and culinary experiences
          that delight the senses. We bring flavour and culture to your 
          events—whether weddings, corporate gatherings, private parties, 
          or festivals. At Faaji Grills, we don't just serve food; we serve 
          memories.
        </p>

        
      
      </div>
    </section>
  );
}

export default About;
