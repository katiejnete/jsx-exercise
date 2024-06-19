const people = [
  {
    id: 1,
    name: "miffy",
    age: 4,
    hobbies: ["gardening", "painting", "riding balloons"],
  },
  {
    id: 2,
    name: "kate",
    age: 27,
    hobbies: ["designing clothes", "baking", "crochet"],
  },
  {
    id: 3,
    name: "random",
    age: 21,
    hobbies: ["shopping", "skating", "finding new music"],
  },
];

const App = () => (
  <div>
    {people.map(({ id, name, age, hobbies }) => (
      <Person key={id} name={name} age={age} hobbies={hobbies} />
    ))}
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
