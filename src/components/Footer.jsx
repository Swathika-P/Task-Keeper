import React from "react";

// Footer component to display the copyright year
function Footer() {
  // Get the current year
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Display the copyright symbol and the current year */}
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
