import "./styles.css";

function Country({ country }) {
  return (
    <div className="App">
      <label className="pais"> País : {country} </label>
    </div>
  );
}

export default Country;
