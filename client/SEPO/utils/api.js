
const MAPQUEST_API_KEY = 'YShBjYux21G3IIZulMOwJ1UqYpLaPAdx'; 

// Function to get MapQuest data based on location
export const getMapQuestData = async (location) => {
  try {
    const response = await fetch(
      `https://www.mapquestapi.com/search/v4/place?location=${location}&key=${MAPQUEST_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Error fetching MapQuest data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// export default api;