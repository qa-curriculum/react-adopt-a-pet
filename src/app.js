const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-not-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Monster",
    }),
    React.createElement(Pet, {
      name: "Jagger",
      animal: "Dog",
      breed: "Shepard",
    }),
    React.createElement(Pet, { name: "Turbo", animal: "Cat", breed: "Mixed" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
