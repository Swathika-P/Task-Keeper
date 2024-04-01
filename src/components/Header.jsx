import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

// Header component to display the app name
function Header() {
  return (
    <header>
      {/* Display the app icon and name */}
      <h1>
        <HighlightIcon />
        Task Keeper
      </h1>
    </header>
  );
}

export default Header;
