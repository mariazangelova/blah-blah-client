const axios = require("axios");

export const randomWord = (word) => ({
  type: "RANDOM_WORD",
  payload: word,
});
export const wordHints = (hints) => ({
  type: "HINTS",
  payload: hints,
});

export const fetchRandomWord = () => {
  return async (dispatch, getState) => {
    axios({
      method: "GET",
      url: "https://wordsapiv1.p.rapidapi.com/words/",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": "e008de5f08msha5e70305e5f10dep1a4fc5jsn84abd9a232bc",
      },
      params: {
        random: "true",
      },
    })
      .then((response) => {
        if (response.data.results === undefined) {
          dispatch(fetchRandomWord());
        }
        //console.log("result", response.data.results);
        console.log(response.data);
        dispatch(randomWord(response.data.word));
        dispatch(wordHints(response.data.results[0]));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const wordSynonyms = (synonyms) => ({
  type: "SYNONYMS",
  payload: synonyms,
});

export const fetchSynomyms = (word) => {
  return async (dispatch, getState) => {
    //console.log("word", word);
    axios({
      method: "GET",
      url: `https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": "e008de5f08msha5e70305e5f10dep1a4fc5jsn84abd9a232bc",
      },
    })
      .then((response) => {
        //console.log(response);
        dispatch(wordSynonyms(response.data.synonyms));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
