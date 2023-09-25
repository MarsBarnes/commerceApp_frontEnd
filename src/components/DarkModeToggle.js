import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const element = document.body;
    element.dataset.bsTheme = darkMode ? "dark" : "light";
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
