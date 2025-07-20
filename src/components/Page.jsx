import React, { Component } from "react";
import NewLine from "./NewLine";
import Ls from "./Ls";
import Cat from "./Cat";
import "./style.css";
import TerminalHeader from "./TerminalHeader/Terminal";
import Profile from "./Profile/Profiles";

export class Page extends Component {
  terminalEndRef = React.createRef();
  inputRef = React.createRef();
  state = {
    numberOfLine: 0,
    displayEverything: [{ value: "", id: 0, displayInput: true, type: "line" }]
  };

  information = {
    commands: [
      { id: 10, type: "ls:~(to list the option)" },
      { id: 11, type: "cat:~(to access the option'eg: cat about.txt')" },
      { id: 12, type: "clear:~(to clear the page )" },
      { id: 13, type: "cmd:~(to help)" }
    ],
    subDir: [
      { id: 14, type: "About.txt" },
      { id: 15, type: "Education.txt" },
       { id:17, type:"Skill.txt" },
      { id: 16, type: "Projects.txt"},
     { id: 18, type: "Social.txt" },
     
    ]
  };

  componentDidMount() {
 
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }

  componentWillUnmount() {
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
  }

  handleVisibilityChange = () => {
    if (document.visibilityState === "visible") {
      this.inputRef.current?.focus();
    }
  };

  render() {
    return (
      <div className="container">
        <TerminalHeader />
        <Profile />
        <div className="terminal-wrapper">
          <div className="terminal">
            <p className="prompt">
              root@bickson:~% You’re inside a dev terminal. Run 'cmd' for help..
            </p>

            {this.state.displayEverything.map((l) => {
              if (l.type === "line") {
                return (
                  <NewLine
                    key={l.id}
                    handelWhatever={this.handelWhatever}
                    line={l}
                    displayInput={l.displayInput}
                    inputRef={l.displayInput ? this.inputRef : null} // 🔹 Pass ref only to active input
                  />
                );
              } else if (l.type === "ls") {
                return <Ls key={l.id} line={l} subDir={this.information.subDir} />;
              } else if (l.type === "cmd") {
                return <Ls key={l.id} line={l} subDir={this.information.commands} />;
              } else if (l.type === "cat") {
                return <Cat key={l.id} line={l} />;
              }
              return null;
            })}

            {/* Auto-scroll anchor */}
            <div ref={this.terminalEndRef} />
          </div>
        </div>
      </div>
    );
  }

  handelWhatever = (string_value, Tid) => {
    const res = string_value.split(" ");
    if (res[0] === "clear") {
      this.setState({
        numberOfLine: 0,
        displayEverything: [{ value: "", id: 0, displayInput: true, type: "line" }]
      });
    } else {
      this.setState(
        {
          displayEverything: [
            ...this.state.displayEverything.filter((l) => l.id !== Tid),
            {
              ...this.state.displayEverything.find((l) => l.id === Tid),
              value: string_value,
              type: res[0]
            }
          ]
        },
        () => this.handleClick()
      );
    }
  };

  handleClick = () => {
    const num = this.state.displayEverything.length + 1;
    this.setState(
      {
        numberOfLine: this.state.numberOfLine + 1,
        displayEverything: [
          ...this.state.displayEverything,
          { value: "", id: num, displayInput: true, type: "line" }
        ]
      },
      () => {
        // Auto-scroll to latest command
        this.terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
        this.inputRef.current?.focus(); // 🔹 Focus new input
      }
    );
  };
}

export default Page;
