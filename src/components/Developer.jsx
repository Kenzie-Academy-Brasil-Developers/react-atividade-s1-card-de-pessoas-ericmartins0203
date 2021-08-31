import Name from "./Name/name.js";
import Age from "./Age/age.js";
import Country from "./Country/country.js";

function PersonalInfo() {
  const obj = {
    nome1: "eric",
    age1: 28,
    country1: "brasil",
    nome2: "gustavo",
    age: 19,
    country: "brasil",
    name3: "igor",
    age3: 20,
    country3: "brasil",
  };

  return (
    <div className="App">
      <div>
        <Name nome={obj.nome1} />
        <Age age={obj.age1} />
        <Country country={obj.country1} />
      </div>
      <div>
        <Name nome={obj.nome2} />
        <Age age={obj.age2} />
        <Country country={obj.country2} />
      </div>
      <div>
        <Name nome={obj.nome3} />
        <Age age={obj.age3} />
        <Country country={obj.country3} />
      </div>
    </div>
  );
}

export default PersonalInfo;
