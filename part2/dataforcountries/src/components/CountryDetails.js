import WeatherDetails from './WeatherDetails';

const CountryDetails = ({ country }) => {
  const capital = country.capital?.[0];

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital?.[0] || 'N/A'}</p>
      <p>Área: {country.area} km²</p>
      <h3>Idiomas:</h3>
      <ul>
        {country.languages &&
          Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
      </ul>
      <img src={country.flags.png} alt={`Bandeira de ${country.name.common}`} width="200" />
      <WeatherDetails capital={capital} />
    </div>
  );
};

export default CountryDetails;
