const CountryList = ({ countries, onShow }) => {
  return (
    <div>
      {countries.map((country) => (
        <p key={country.cca3}>
          {country.name.common}{' '}
          <button type="button" onClick={() => onShow(country)}>
            show
          </button>
        </p>
      ))}
    </div>
  );
};

export default CountryList;
