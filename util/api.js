export const fectchGameListData = async (url) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}${url}`);
  return response.json();
};
