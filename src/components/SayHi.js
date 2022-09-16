import React from "react";

function SayHi() {
  return (
    <footer className="info">
      <p>Hi, {localStorage.getItem("user")}</p>
    </footer>
  );
}

export default SayHi;
