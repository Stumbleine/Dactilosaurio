import { createSlice } from "@reduxjs/toolkit";
import ParagraphJSON from "../../paragraph.json";
let parapgraphs = ParagraphJSON;
const initialState = {
    codeGame: '',
    paragraph:{
        wordsArray:[],
        word:'default',
        value:'',
        author:'',
        titleBook:'',
        nCharactaers:null,
    },
    statsGame:{
        time:5,
        position:1,
        pulsations:null,
        ppm:null,
        wpm:null,
        errors:null
    },
    start: false,
    end: false,
    type: 'practice'
}
const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers:{
        //setParagraph
        setParagraph:(state) =>{
            const randIndex = Math.floor(Math.random() * parapgraphs.length)
            const p = parapgraphs[randIndex]
            console.log("elegido:",p)
            state.paragraph.value = p.value;
            state.paragraph.author = p.author;
            state.paragraph.titleBook = p.titleBook;
            state.paragraph.wordsArray = state.paragraph.value.split(" ");
            state.paragraph.word = state.paragraph.wordsArray[0];
            console.log(state.paragraph.wordsArray)
        },
        //updateStart
        changeStartState:(state,action)=>{
            state.start = action.payload;
            console.log(state.start )
        },
        nextWord:(state,action)=>{
            state.paragraph.word = action.payload;
        },
        endGame:(state,action) => {
            state.end = action.payload;
        }
        //updateStats   
        //setTypeGame
    }
})

export const { setParagraph, changeStartState, nextWord, endGame } = gameSlice.actions;
export default gameSlice.reducer;