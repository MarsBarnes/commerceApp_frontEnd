import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   const element = document.body;
  //   element.dataset.bsTheme = darkMode ? "light" : "dark";
  // }, [darkMode]);

  useEffect(() => {
    const element = document.body;

    if (darkMode) {
      // Dark mode styles
      element.dataset.bsTheme = "dark";
      element.style.backgroundColor = "#212529";
      // You can set dark mode styles here
    } else {
      // Light mode styles
      element.dataset.bsTheme = "light";
      // Change the body background color to #FF0000 for the light theme
      element.style.backgroundColor = "#4D5256";
      // You can set other light mode styles here
    }
  }, [darkMode]);

  function toggle() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className="form-check form-switch mx-4">
      <input
        className="form-check-input p-2"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        checked={darkMode}
        onChange={toggle}
      />
    </div>
  );
};

export default DarkModeToggle;
