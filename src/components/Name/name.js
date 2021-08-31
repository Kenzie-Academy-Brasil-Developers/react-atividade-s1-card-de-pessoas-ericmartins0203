import "./styles.css";

function Name({ nome }) {
  return (
    <div className="App">
      <label className="nome"> Dev : {nome} </label>
    </div>
  );
}

export default Name;
