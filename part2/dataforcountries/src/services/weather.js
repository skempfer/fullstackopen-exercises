const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getByCity = async (city, apiKey) => {
  const url = `${baseUrl}?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Weather request failed');
  }

  return await response.json();
};

export default { getByCity };
