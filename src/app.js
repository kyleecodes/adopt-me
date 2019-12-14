const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h3", {}, breed)
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Yodie",
            animal: "cat",
            breed: "Devon Rex"
        }),
        React.createElement(Pet, {
            name: "Dusty",
            animal: "cat",
            breed: "Tabby"
        }),
        React.createElement(Pet, {
            name: "Misa",
            animal: "cat",
            breed: "Old"
        }),
        React.createElement(Pet, {
            name: "Cheese",
            animal: "Cat",
            breed: "Orange"
        })
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));