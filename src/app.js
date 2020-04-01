import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-not-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Monster"
    }),
    React.createElement(Pet, {
      name: "Jagger",
      animal: "Dog",
      breed: "Shepard"
    }),
    React.createElement(Pet, { name: "Turbo", animal: "Cat", breed: "Mixed" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
