import React from "react";

const grills = [
  { id: 1, name: "Spicy Suya (Beef/Chicken)", image: "/assets/grills5.jpg", price: "12sticks £65 / 2sticks £12" },
  { id: 2, name: "Asun (Spicy Goat Meat)", image: "/assets/asun.jpeg", price: "3liters £100 / 50cl £17" },
  { id: 3, name: "Grilled Fish (Tilapia/Croacker with Plantain)", image: "/assets/grilledtilapia.jpeg", price: "3liters £100 / 50cl £18" },
  { id: 4, name: "Barbeque Chicken Wings", image: "/assets/chickenwings.jpg", price: "3liters £60 / 50cl £12" },
  { id: 5, name: "Lamb Chops with Peppered or Mint Sauce", image: "/assets/lambchops.jpeg", price: "3liters £100 / 50cl £17" },
];

const smallchops = [
  { id: 1, name: "Soupreme Rolls (spring roll filled with shrimps etc)", image: "/assets/springroll.jpeg", price: "20 fingers £40" },
  { id: 2, name: "Frosty Puffs: sugar-free with Demerara & cinnamon", image: "/assets/puffpuff2.jpeg", price: "20 balls £35" },
];

const main = [
  { id: 1, name: "Jollof Rice (Party Style)", image: "/assets/jollofrice.jpeg", price: "1/4 cooler £50 / 1/2 cooler £80" },
  { id: 2, name: "Fried Rice", image: "/assets/friedrice.jpeg", price: "1/4 cooler £60 / 1/2 cooler £100" },
  { id: 3, name: "Ofada Rice with Ayamase Sauce", image: "/assets/ofadarice2.jpg", price: "1/2 cooler £90 / 4liters £50" },
  { id: 5, name: "Singaporean Noodles", image: "/assets/singaporeannoodles.jpeg", price: "3liters £50" },
];

const soups = [
  { id: 1, name: "Faaji Pepper Soup (ox-foot, offals & ox-tail)", image: "/assets/peppersoup.jpeg", price: "3liters £50" },
  { id: 2, name: "Chicken Cream Soup with potato, tofu & carrot", image: "/assets/creamsoup.jpeg", price: "3liters £50" },
];

const cocktails = [
  { id: 1, name: "Strawberry Daiquiri", image: "/assets/daquiri.jpeg", price: "300ml £6 / 4liters £60" },
  { id: 2, name: "Mango Passion Fruit Cocktail", image: "/assets/mangopassion.jpeg", price: "300ml £6 / 4liters £60" },
  { id: 3, name: "Zobo Mojito", image: "/assets/zobomojito.jpeg", price: "300ml £5 / 4liters £50" },
  { id: 4, name: "Tamarind Twist", image: "/assets/tamarind.jpeg", price: "300ml £6 / 4liters £55" },
  { id: 5, name: "Naija Sunrise (Orange-Pineapple-Vanilla)", image: "/assets/orangepine.jpeg", price: "300ml £6 / 4liters £55" },
  { id: 7, name: "Pina Colada", image: "/assets/pinacolada.jpeg", price: "300ml £6 / 4liters £60" },
  { id: 8, name: "Peach Daiquiri", image: "/assets/peachdaqiri.jpeg", price: "300ml £8 / 4liters £75" },
  { id: 9, name: "Caramandy (non-alcoholic beer with lemon & caramel)", image: "/assets/shandy.jpeg", price: "300ml £6 / 4liters £60" },
];

function MenuCard({ item }) {
  return (
    <div style={{ backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.1)", padding: "16px", display: "flex", flexDirection: "column", alignItems: "center", height: "260px" }}>
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        decoding="async"
        style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "8px", marginBottom: "8px" }}
      />
      <p style={{ textAlign: "center", fontSize: "14px", fontWeight: "600", marginTop: "4px" }}>{item.name}</p>
      <p style={{ textAlign: "center", fontSize: "14px", color: "#ef4444", fontWeight: "500", marginTop: "4px" }}>{item.price}</p>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "40px", marginBottom: "24px" }}>
      <h3 style={{ fontSize: "24px", color: "#fff", fontWeight: "700", backgroundColor: "#fca5a5", borderRadius: "999px", padding: "4px 24px", display: "inline-block" }}>
        {children}
      </h3>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ width: "100%", padding: "80px 24px", backgroundColor: "#f9fafb", boxSizing: "border-box" }}>
      <div style={{ width: "100%", maxWidth: "1152px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-6 bg-red-400 rounded-full px-6 py-2 w-fit">
            Our Menu
          </h2>
        </div>

        <SectionTitle>Grills</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {grills.map((item) => <MenuCard key={item.id} item={item} />)}
        </div>

        <SectionTitle>Small Chops</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {smallchops.map((item) => <MenuCard key={item.id} item={item} />)}
        </div>

        <SectionTitle>Main Dishes</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {main.map((item) => <MenuCard key={item.id} item={item} />)}
        </div>

        <SectionTitle>Soups</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {soups.map((item) => <MenuCard key={item.id} item={item} />)}
        </div>

        <SectionTitle>Cocktails</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {cocktails.map((item) => <MenuCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
