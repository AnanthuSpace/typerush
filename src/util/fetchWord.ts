import axios from "axios";

export const fetchWord = async (difficulty) => {
  let url = "https://random-word-api.herokuapp.com/word";

  if (difficulty === "easy") {
    url = "https://random-word-api.herokuapp.com/word?length=4";
  } else if (difficulty === "hard") {
    url = "https://random-word-api.herokuapp.com/word?length=8";
  }

  try {
    const response = await axios.get(url);
    return response.data[0];
  } catch (error) {
    console.error("Error fetching word:", error);
    return "example"; // Fallback word
  }
};
