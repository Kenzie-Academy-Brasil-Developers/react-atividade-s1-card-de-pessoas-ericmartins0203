import "./styles.css";

function Age({ age }) {
  return (
    <div className="App">
      <label className="age"> Idade : {age} </label>
    </div>
  );
}

export default Age;
