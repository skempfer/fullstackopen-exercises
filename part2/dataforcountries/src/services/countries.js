const baseUrl = 'https://restcountries.com/v3.1/name';

const getByName = async (name) => {
  if (!name) {
    return [];
  }

  try {
    const response = await fetch(`${baseUrl}/${encodeURIComponent(name)}`);
    if (!response.ok) {
      return [];
    }
    return await response.json();
  } catch (error) {
    return [];
  }
};

export default { getByName };
