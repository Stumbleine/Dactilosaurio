import { configureStore } from "@reduxjs/toolkit";
import gameReducer from './game/gameSlice'
export default  configureStore({
    reducer:{
        game: gameReducer
    }
})

/* 
Datos a almacenar
start boolean (necesario para inciar la carrera)



*/