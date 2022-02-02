import { Card, TextField, Container, Typography, Box } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { deepPurple, grey, red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { nextWord, endGame, setStats } from "../store/game/gameSlice";
import { AccessTime } from "@mui/icons-material";
import Timer from "./Timer";
const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[100];

export default function InputWrite() {
  const [error, setError] = React.useState(false);
  const [complete, setComplete] = React.useState(false);
  const [textValue, setTextValue] = React.useState("");
  const [keyCode, setKeyCode] = React.useState("");
  const [statsGame, setStatsGame] = React.useState({
    position: 1,
    pulsations: 0,
    ppm: 0,
    wpm: 0,
    errors: 0,
  });

  //selector store states
  const minutes = useSelector((state) => state.game.statsGame.time.minutes);
  const seconds = useSelector((state) => state.game.statsGame.time.seconds);
  const end = useSelector((state) => state.game.end);
  const start = useSelector((state) => state.game.start);
  const paragraph = useSelector((state) => state.game.paragraph);
  const wordsArray = useSelector((state) => state.game.paragraph.wordsArray);
  const dispatch = useDispatch();

  ///functions timer
  //typing functrions
  const onKey = (e) => {
    setKeyCode(e.key);
    setStatsGame({ ...statsGame, pulsations: statsGame.pulsations + 1 });
  };
  const comparation = (e) => {
    setTextValue(e.target.value);
    //console.log('Nro de veces llamados',error);
    let wInput = e.target.value;
    let wChars = paragraph.word.split("");
    let wInputChars = e.target.value.split("");
    //console.log(wInputChars);

    if (wInputChars[wInputChars.length - 1] === " " && complete === true) {
      changeNextWord();
      setComplete(false);
      setTextValue("");
      console.log("vacio?salto");
    } else {
      //palabra incompleta
      if (wInput.length <= paragraph.word.length) {
        //console.log('el input es menorIgual')
        if (wInput === paragraph.word) {
          //console.log('el input es igual a word',{wInput,word})
          setComplete(true);
          setError(false);
        } else {
          //
          //console.log('el input no es igual')
          let i = 0;
          let previusError = false;
          for (let wic of wInput) {
            //console.log('entro a for =>', i)
            let wChar = wChars[i];
            if (previusError === true) {
              break;
            }
            if (wic === wChars[i]) {
              //console.log("OK :> ", { wic, wChar, error });
              setError(false);
              setComplete(false);
            } else {
              //console.log('antes:',error)
              previusError = true;
              setError(true);
              if (keyCode !== "Backspace") {
                setStatsGame({ ...statsGame, errors: statsGame.errors + 1 });
              }
            }
            i++;
          }
        }
      } else {
        //word complete but without space " ": word: "Hello" => "Hellox"
        //lo correcto debia ser: "Hello "
        setComplete(false);
        setError(true);
        if (keyCode !== "Backspace") {
          setStatsGame({ ...statsGame, errors: statsGame.errors + 1 });
        }
      }
    }
    //if(textValue===''){setError(false)}
  };
  const [index, setIndex] = React.useState(1);

  function changeNextWord() {
    let countChars = 0;
    for (let i = 0; i < index; i++) {
      let cad = wordsArray[i];
      countChars = countChars + cad.length;
    }
    setIndex(index + 1);
    let time = "";
    time = time.concat(minutes, ".", seconds);
    parseFloat(time);
    if (index < wordsArray.length) {
      let newWord = wordsArray[index];
      dispatch(nextWord(newWord));

      let ppm = Math.round(countChars / time);
      setStatsGame({ ...statsGame, ppm: ppm });
    } else {
      dispatch(setStats(statsGame));
      dispatch(endGame(true));
    }
  }
  //render
  return (
    <Container sx={{ mt: 1, width: "100%" }} disableGutters>
      <Card
        sx={{
          color: textColor,
          display: "flex",
          minHeight: 62,
          p: 1,
        }}
      >
        <Box sx={{ width: "100%", display: "flex", ml: 1 }}>
          <TextField
            helperText={
              error ? "Escriba correctamente la palabra: " + paragraph.word : ""
            }
            disabled={end}
            error={error}
            label="Escriba la palabra en azul."
            type="text"
            fullWidth
            variant="outlined"
            value={textValue}
            onChange={comparation}
            onKeyUp={onKey}
            InputProps={{ style: { fontSize: 20 } }}
            InputLabelProps={{ style: { fontSize: 20 } }}
            FormHelperTextProps={{ style: { fontSize: 16, fontWeight: "700" } }}
          />
          <Box
            sx={{
              display: "block",
              minWidth: 140,
              ml: 2,
              color: deepPurple[700],
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
              {statsGame.ppm} p.p.m
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
              {statsGame.errors} : Errors
            </Typography>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
