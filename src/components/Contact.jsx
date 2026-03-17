import React from "react";

function Contact() {
  return (
    <section id="contact" style={{ width: "100%", padding: "80px 24px", backgroundColor: "#f9fafb", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", backgroundColor: "#fef3c7", borderRadius: "16px", padding: "40px 32px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-6 bg-red-400 rounded-full px-6 py-2 w-fit">
            Contact Us
          </h2>
        </div>
        <p style={{ marginBottom: "20px", fontSize: "22px", fontWeight: "600" }}>
          For your events, parties and joyful gatherings.
        </p>
        <p style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "600" }}>
          Email:{" "}
          <a href="mailto:info@faajigrills.co.uk" style={{ color: "#000", textDecoration: "underline" }}>
            info@faajigrills.co.uk
          </a>
        </p>
        <p style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "600" }}>
          Telephone:{" "}
          <a href="tel:+442080448299" style={{ color: "#000" }}>
            +442080448299
          </a>
        </p>
        <p style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
          Facebook:{" "}
          <a href="https://www.facebook.com/faajigrills" target="_blank" rel="noopener noreferrer" style={{ color: "#000", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none" }}>
            <img src="/assets/facebook1.jpeg" alt="Facebook" style={{ width: "20px", height: "20px", objectFit: "cover", borderRadius: "4px" }} />
            <span>Faajigrills</span>
          </a>
        </p>
        <p style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
          Instagram:{" "}
          <a href="https://www.instagram.com/faajigrills" target="_blank" rel="noopener noreferrer" style={{ color: "#000", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none" }}>
            <img src="/assets/instagram1.jpeg" alt="Instagram" style={{ width: "20px", height: "20px", objectFit: "cover", borderRadius: "4px" }} />
            <span>Faajigrills</span>
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
