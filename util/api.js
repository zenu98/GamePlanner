export const fetchData = async () => {
  try {
    const initialUrl = `http://192.168.0.55:3001/ListOfGames`;
    const response = await fetch(initialUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Optional: Re-throw the error to be caught by the calling code
  }
};
