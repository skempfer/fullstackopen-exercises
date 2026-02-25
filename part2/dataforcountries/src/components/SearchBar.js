const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <p>find a country</p>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBar;
