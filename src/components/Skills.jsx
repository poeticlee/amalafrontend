import React from "react";


const grills = [
  {
    id: 1,
    name: "Spicy Suya (Beef/Chicken)",
    image: "/assets/grills5.jpg", 
    price :"12sticks £65/2sticks £12"
  },
  {
    id: 2,
    name: "Asun(Spicy Goat Meat)",
    image: "/assets/asun.jpeg",
    price :"3liters £100/50cl £17"
  },
 
  {
    id: 3,
    name: "Grilled Fish (tilapia /croacker with plantain):",
    image: "/assets/grilledtilapia.jpeg",
    price :"3liters £100/50cl £18"
  },
  {
    id: 4,
    name: "Barbeque Chicken wings",
    image: "/assets/chickenwings.jpg",
    price :"3liters £60/50cl £12"
  },
  {
    id: 5,
    name: " Lamb Chops with Peppered or Mint Sauce",
    image: "/assets/lambchops.jpeg",
    price :"3liters £100/50cl £17"
  }

]
const smallchops= [

  {
    id: 1,
    name: "Soupreme Rols- spring roll filled with shrimps etc)  ",
    image: "/assets/springroll.jpeg",
    price :"20 fingers £40"
  },
  
  {
    id: 2,
    name: "Frosty puffs: sugar-free with Demerara &cinnamon",
    image: "/assets/puffpuff2.jpeg",
    price :"20 balls £35"
  }
  
]

const main = [


  {
    id: 1,
    name: "Jollof rice(Party Style)",
    image: "/assets/jollofrice.jpeg",
     price :"1/4 cooler £50/1/2 cooler £80"
   
  },
  {
    id: 2,
    name: "Fried rice",
    image: "/assets/friedrice.jpeg",
       price :"1/4 cooler £60/1/2 cooler £100"
  },
  {
    id: 3,
    name: "Ofada rice with Ayamase sauce",
    image: "/assets/ofadarice2.jpg", 
    price :"1/2 cooler £90/4liters £50" 
  },

  {
    id: 5,
    name: "Singaporean noodles",
    image: "/assets/singaporeannoodles.jpeg",
       price :"3liters £50"
  }
 
]



const soups = [
  {
    id: 1,
    name: "Faaji SoupA Pepper soup(contain ox-foot,offals and ox-tail", 
    image: "/assets/peppersoup.jpeg",
       price :"3liters £50"
  },
 {  id:2,
    name: "Chicken Cream soup(basil leaves garnishing)with potato, tofu & carrot",
    image: "/assets/creamsoup.jpeg",
       price :"3liters £50"
  },
]

  const cocktails = [
  {
    id: 1,
    name: "Strawberry Daiquiri",
    image: "/assets/daquiri.jpeg",
       price :"300ml £6/4liters £60"
    
  },
  {
    id: 2,
    name: "Mango passion fruit Cocktail",
    image: "/assets/mangopassion.jpeg",
      price :"300ml £6/4liters £60"
  },
  {
    id: 3,
    name: "Zobo Mojito",
    image: "/assets/zobomojito.jpeg",
      price :"300ml £5/4liters £50"
  },
  {
    id: 4,
    name: "Tamarind twist",
    image: "/assets/tamarind.jpeg",
      price :"300ml £6/4liters £55"
  },
  {
    id: 5,
    name: "Naija Sunrise (Orange-Pineapple-Vanilla)",
    image: "/assets/orangepine.jpeg",
      price :"300ml £6/4liters £55"
  },
  
 
  {
    id: 7,
    name: "Pina colada",
    image: "/assets/pinacolada.jpeg",
      price :"300ml £6/4liters £60"
  },
  {
    id: 8,
    name: "Peach Daiquiri",
    image: "/assets/peachdaqiri.jpeg",
      price :"300ml £8/4liters £75"
  },
  {
    id:9,
    name: "Caramandy(non-alcoholic beer with lemon&caramel)",
    image: "/assets/shandy.jpeg",
      price :"300ml £6/4liters £60"
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gray-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">
      <div className="flex justify-center">
  <h2 className="text-3xl text-white md:text-4xl font-bold mb-6 bg-red-400 rounded-4xl px-6 py-2 w-fit text-center">
    Our Menu
  </h2>
</div>
        <h3 className="text-3xl text-white md:text-4xl font-bold w-[120px] mb-6 bg-red-300">
          Grills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {grills.map((grill) => (
            <div
              key={grill.id}
              className="bg-white rounded-xl shadow p-4 font-semibold hover:shadow-lg transition flex flex-col items-center justify-between h-64"
            >
              <img
                src={grill.image}
                alt={grill.name}
                className="w-full h-45 object-cover rounded mb-2"
              />
              <p className="text-center text-sm">{grill.name}</p>
              <p className="text-center text-sm">{grill.price}</p>
            </div>
          ))}
        </div>
        <h3 className="text-3xl mt-10 text-white md:text-4xl font-bold w-[120px] mb-6 bg-red-300">
          Small Chops
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {smallchops.map((smallchop) => (
            <div
              key={smallchop.id}
              className="bg-white rounded-xl shadow p-4 font-semibold hover:shadow-lg transition flex flex-col items-center justify-between h-64"
            >
              <img
                src={smallchop.image}
                alt={smallchop.name}
                className="w-full h-45 object-cover rounded mb-2"
              />
              <p className="text-center text-sm">{smallchop.name}</p>
              <p className="text-center text-sm">{smallchop.price}</p>
            </div>
          ))}
        </div>
        <h3 className="text-3xl text-white md:text-4xl font-bold w-[120px] mt-10 mb-6 bg-red-300">
          Main Dishes
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {main.map((sill) => (
            <div
              key={sill.id}
              className="bg-white rounded-xl shadow p-4 font-semibold hover:shadow-lg transition flex flex-col items-center justify-between h-64"
            >
              <img
                src={sill.image}
                alt={sill.name}
                className="w-full h-45 object-cover rounded mb-2"
              />
              <p className="text-center text-sm">{sill.name}</p>
              <p className="text-center text-sm">{sill.price}</p>
            </div>
          ))}
        </div>
        <h3 className="text-3xl mt-10 text-white md:text-4xl font-bold w-[120px] mb-6 bg-red-300">
          Soups
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3   md:grid-cols-2 gap-6">
          {soups.map((soup) => (
            <div
              key={soup.id}
              className="bg-white rounded-xl shadow p-4 font-semibold hover:shadow-lg transition flex flex-col items-center justify-between h-64"
            >
              <img
                src={soup.image}
                alt={soup.name}
                className="w-full h-45 object-cover rounded mb-2"
              />
              <p className="text-center text-sm">{soup.name}</p>
              <p className="text-center text-sm">{soup.price}</p>
            </div>
          ))}
        </div>
        <h3 className="text-3xl mt-10 text-white md:text-4xl font-bold w-[170px] mb-6 bg-red-300">
          Cocktails
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {cocktails.map((cocktail) => (
            <div
              key={cocktail.id}
              className="bg-white rounded-xl shadow p-4 font-semibold hover:shadow-lg transition flex flex-col items-center justify-between h-64"
            >
              <img
                src={cocktail.image}
                alt={cocktail.name}
                className="w-full h-45 object-cover rounded mb-2"
              />
              <p className="text-center text-sm">{cocktail.name}</p>
              <p className="text-center text-sm">{cocktail.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
