import React from "react";

function Footer() {
  return (
    <footer className="bg-red-600 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Faaji Grills. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
