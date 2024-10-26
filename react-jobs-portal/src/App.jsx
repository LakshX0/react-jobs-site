import React from "react";

const App = () => {
  const name = "Lakshan";
  const x = 10;
  const y = 20;
  const names = ["Amal", "Kamal", "Supun", "Nisal"];

  return (
    <>
      <div className="text-5xl">App</div>
      <h1>Hello {name}</h1>
      <p>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
