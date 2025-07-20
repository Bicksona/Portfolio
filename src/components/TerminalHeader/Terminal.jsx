import React from "react";
import "./Terminal.css";
import Folder from "../../assets/folder.png"; // Make sure image exists

const TerminalHeader = () => {
  return (
    <div className="terminal-header">
      <div className="traffic-lights">
        <span className="btn red" />
        <span className="btn yellow" />
        <span className="btn green" />
      </div>

      <div className="terminal-center">
        <div className="folder">
          <img src={Folder} alt="Folder Icon" />
        </div>
        <div className="terminal-title">-Portfolio-.zsh--80x25</div>
      </div>
    </div>
  );
};

export default TerminalHeader;