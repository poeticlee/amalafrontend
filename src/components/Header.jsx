import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, width: "100%",
      backgroundColor: "#dc2626",
      borderBottom: "3px solid #b91c1c",
      zIndex: 50,
    }}>
      {/* Main bar */}
      <div style={{
        width: "100%", padding: "12px 32px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        boxSizing: "border-box",
      }}>
        {/* Logo + brand name */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <img
            src="/assets/logos.jpeg"
            alt="Faaji Grills Logo"
            style={{ height: "52px", width: "52px", borderRadius: "50%", objectFit: "cover", border: "2px solid #fff" }}
          />
          <span style={{ color: "#fff", fontWeight: "800", fontSize: "22px", letterSpacing: "0.5px" }}>
            Faaji Grills
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "8px" }} className="hidden md:flex">
          {["About Us|#about", "Our Menu|#skills", "Ita Faaji|#projects", "Contact|#contact"].map((item) => {
            const [label, href] = item.split("|");
            return (
              <a
                key={href}
                href={href}
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "15px",
                  padding: "8px 18px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  transition: "background-color 0.2s",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={e => e.target.style.backgroundColor = "#b91c1c"}
                onMouseLeave={e => e.target.style.backgroundColor = "transparent"}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", color: "#fff" }}
          >
            {isOpen ? <XMarkIcon style={{ width: "28px", height: "28px" }} /> : <Bars3Icon style={{ width: "28px", height: "28px" }} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div style={{
          width: "100%", backgroundColor: "#b91c1c",
          padding: "12px 32px 20px", boxSizing: "border-box",
          borderTop: "1px solid rgba(255,255,255,0.2)",
        }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {[["About Us", "#about"], ["Our Menu", "#skills"], ["Ita Faaji", "#projects"], ["Contact", "#contact"]].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={toggleMenu}
                style={{
                  color: "#fff", fontWeight: "600", fontSize: "16px",
                  padding: "10px 16px", borderRadius: "8px",
                  textDecoration: "none", display: "block",
                }}
                onMouseEnter={e => e.target.style.backgroundColor = "rgba(255,255,255,0.15)"}
                onMouseLeave={e => e.target.style.backgroundColor = "transparent"}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
