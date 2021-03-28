import API from "../API";

export const fetchStarships = async () => {
  return await API.get(`starships`)
    .then((results) => {
      return results.data;
    })
    .catch((err) => console.log("Error", err));
};
