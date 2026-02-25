import {useState} from "react";

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital?.[0] || 'N/A'}</p>
      <p>Área: {country.area} km²</p>
      <h3>Idiomas:</h3>
      <ul>
        {country.languages && Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`Bandeira de ${country.name.common}`} width="200" />
    </div>
  );
};

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    
    if (value.length > 0) {
      fetch(`https://restcountries.com/v3.1/name/${value}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return [];
        })
        .then((data) => setCountries(data))
        .catch(() => setCountries([]));
    } else {
      setCountries([]);
    }
  };

  const renderCountries = () => {
    if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (countries.length > 1 && countries.length <= 10) {
      return (
        <div>
          {countries.map((country) => (
            <p key={country.cca3}>{country.name.common}</p>
          ))}
        </div>
      );
    } else if (countries.length === 1) {
      return <CountryDetails country={countries[0]} />;
    }
    return null;
  };

  return (
    <div className="App">
      <h1>Data for Countries</h1>
      <div>
        <p>find a country</p>
        <input 
          type="text" 
          value={search}
          onChange={handleSearchChange} 
        />
      </div>
      <div>
        {renderCountries()}
      </div>
    </div>
  );
}

export default App;
