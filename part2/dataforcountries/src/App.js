import { useState } from 'react';
import CountryDetails from './components/CountryDetails';
import CountryList from './components/CountryList';
import SearchBar from './components/SearchBar';
import countriesService from './services/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSelectedCountry(null);

    if (value.length > 0) {
      countriesService.getByName(value).then((data) => setCountries(data));
    } else {
      setCountries([]);
    }
  };

  const handleShowCountry = (country) => {
    setSelectedCountry(country);
  };

  const renderCountries = () => {
    if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (countries.length > 1 && countries.length <= 10) {
      return (
        <div>
          <CountryList countries={countries} onShow={handleShowCountry} />
          {selectedCountry && <CountryDetails country={selectedCountry} />}
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
      <SearchBar value={search} onChange={handleSearchChange} />
      <div>
        {renderCountries()}
      </div>
    </div>
  );
}

export default App;
