import React from "react";

const ToggleBar = ({ active, onClick }) => {
  const toggleBar = active ? "toggle-bar toggle-bar-opened" : "toggle-bar";

  return (
    <button className={toggleBar} onClick={onClick}>
      <span className="toggle-bar-top"></span>
      <span className="toggle-bar-middle"></span>
      <span className="toggle-bar-bottom"></span>
    </button>
  );
};

export default ToggleBar;
