import { createSlice } from "@reduxjs/toolkit";
import ParagraphJSON from "../../paragraph.json";
let parapgraphs = ParagraphJSON;
const initialState = {
  codeGame: "",
  paragraph: {
    wordsArray: [],
    word: "default",
    value: "",
    author: "",
    titleBook: "",
    numberChars: 0,
    numberWords: 0,
  },
  statsGame: {
    time: { seconds: 0, minutes: 0 },
    position: 1,
    pulsations: 0,
    ppm: 0,
    wpm: 0,
    errors: 0,
  },
  start: false,
  end: false,
  type: "practice",
};
const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    newGame: () => initialState,
    //setParagraph
    setParagraph: (state) => {
      const randIndex = Math.floor(Math.random() * parapgraphs.length);
      const p = parapgraphs[randIndex];
      console.log("elegido:", randIndex);
      state.paragraph.value = p.value;
      state.paragraph.author = p.author;
      state.paragraph.titleBook = p.titleBook;
      state.paragraph.numberWords = p.numberWords;
      state.paragraph.numberChars = p.numberChars;

      state.paragraph.wordsArray = state.paragraph.value.split(" ");
      state.paragraph.word = state.paragraph.wordsArray[0];
    },
    //updateStart
    changeStartState: (state, action) => {
      state.start = action.payload;
      console.log(state.start);
    },
    nextWord: (state, action) => {
      state.paragraph.word = action.payload;
    },
    setStats: (state, action) => {
      let time = "";
      time = time.concat(
        state.statsGame.time.minutes,
        ".",
        state.statsGame.time.seconds
      );
      parseFloat(time);
      const nwords = state.paragraph.numberWords;
      let wpm = Math.round(nwords / time);

      state.statsGame.errors = action.payload.errors;
      state.statsGame.pulsations = action.payload.pulsations;
      state.statsGame.position = action.payload.position;
      state.statsGame.wpm = wpm;
      state.statsGame.ppm = action.payload.ppm;
    },
    updateTimer: (state, action) => {
      state.statsGame.time.seconds = action.payload.seconds;
      state.statsGame.time.minutes = action.payload.minutes;
    },
    endGame: (state, action) => {
      state.end = action.payload;
    },
    //updateStats
    //setTypeGame
  },
});

export const {
  setParagraph,
  changeStartState,
  nextWord,
  setStats,
  updateTimer,
  endGame,
  newGame,
} = gameSlice.actions;
export default gameSlice.reducer;
