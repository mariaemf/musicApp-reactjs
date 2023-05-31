import React from "react";
import CenterMenu from "./CenterMenu";

export default function Header() {
  return (
    <div className="header">
      <img src={require("../img/MuzicLogo.png")} alt="" />
      <CenterMenu />
      <div className="buttons">
        <button>Sing up</button>
        <button>Log in</button>
      </div>
    </div>
  );
}
