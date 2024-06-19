const Person = ({ name, age, hobbies }) => (
  <div>
    <p>Learn some information about this person</p>
    <h3>{age >= 18 ? "please go vote!" : "you must be 18"}</h3>
    <p>{name > 8 ? name.slice(0, 7) : name}</p>
    <ul>
      {hobbies.map((hobby, idx) => (
        <li key={idx}>{hobby}</li>
      ))}
    </ul>
  </div>
);
