import Name from "./Name/name.js";
import Age from "./Age/age.js";
import Country from "./Country/country.js";

function PersonalInfo() {
  const obj = {
    nome1: "Eric",
    age1: 28,
    country1: "Brasil",
    nome2: "Gustavo",
    age2: 19,
    country2: "Brasil",
    nome3: "Igor",
    age3: 20,
    country3: "Brasil",
  };

  return (
    <div className="App">
      <div className="folder">
        <Name nome={obj.nome1} />
        <Age age={obj.age1} />
        <Country country={obj.country1} />
      </div>
      <div className="folder">
        <Name nome={obj.nome2} />
        <Age age={obj.age2} />
        <Country country={obj.country2} />
      </div>
      <div className="folder">
        <Name nome={obj.nome3} />
        <Age age={obj.age3} />
        <Country country={obj.country3} />
      </div>
    </div>
  );
}

export default PersonalInfo;
