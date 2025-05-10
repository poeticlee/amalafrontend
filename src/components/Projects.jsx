import React from "react";

// Project data
const projects = [
  {
    title: "Flexilearn App",
    image: "/assets/IMG_1286.JPG",
  },
  {
    title: "Bulk SMS Platform 1",
    image:  "/assets/IMG_1289.JPG",
  },
  {
    title: "Bulk SMS Platform 2",
    image:  "/assets/IMG_1253.JPG",
  },
  {
    title: "Bulk SMS Platform 3",
    image: "/assets/IMG_1254.JPG",
  },
  {
    title: "Bulk SMS Platform 4",
    image:  "/assets/IMG_1255.JPG",
  },
  {
    title: "Bulk SMS Platform 5",
    image:  "/assets/IMG_1257.JPG",
  },
  {
    title: "Bulk SMS Platform 5",
    image:  "//assets/IMG_1258.JPG",
  },
  {
    title: "Bulk SMS Platform 5",
    image:  "/assets/IMG_1259.JPG",
  },
  {
    title: "Bulk SMS Platform 5",
    image:  "/assets/IMG_1260.JPG",
  },
  {
    title: "Bulk SMS Platform 5",
    image:  "/assets/food6.jpeg",
  },
  {
    title: "Bulk SMS Platform 5",
    image:  "/assets/food7.jpeg",
  },
  {
    title: "Bulk SMS Platform 5",
    image:  "/assets/food8.jpeg",
  },
  {
    title: "Bulk SMS Platform 5",
    image:  "/assets/food9.jpeg",
  },
  {
    title: "Bulk SMS Platform 5",
    image:  "/assets/IMG_1251.JPG",
  },
  {
    title: "Bulk SMS Platform 5",
    image:  "/assets/IMG_1252.JPG",
  },
  {
    title: "Bulk SMS Platform 5",
    image:  "/assets/cheque.jpeg",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
      <div className="flex justify-center">
  <h2 className="text-3xl text-white md:text-4xl font-bold mb-6 bg-red-400 rounded-4xl px-6 py-2 w-fit text-center">
    Ita Faaji
  </h2>
</div>

        <h3 className="text-xl font-semibold mb-2 text-red-500">Ita Faaji - Giving Back with Flavour</h3>

        <p className="mb-10">
          Ita Faaji is our annual end-of-summer charity event designed to blend fun with purpose.
          It's a celebration of food, music, and community—dedicated to supporting the Royal
          National Institute of Blind People (RNIB). The event features entertainment and fundraising
          initiatives aimed at creating rosty puffs—sugar-free opportunities and awareness for the
          visually impaired. Ita Faaji reflects our commitment to social impact and inclusivity.
        </p>
        <h3 className="text-red-500 text-2xl mb-1.5">Gallery</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover object-top"
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
