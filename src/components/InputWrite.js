import {
  Card,
  TextField,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Box,
  FormHelperText,
} from "@mui/material";
import * as React from "react";
import { deepPurple, grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { nextWord, endGame } from "../store/game/gameSlice";
const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[100];



export default function InputWrite() {
  const [error,setError] =React.useState(false);
  const [complete,setComplete] =React.useState(false);
  const [textValue,setTextValue] =React.useState('');
 
  const end = useSelector((state) => state.game.end);
  const start = useSelector((state) => state.game.start);
  const  word = useSelector((state) => state.game.paragraph.word);
  const wordsArray = useSelector((state) => state.game.paragraph.wordsArray)
  const dispatch = useDispatch();

  ///
  const  comparation = (e) =>{
    setTextValue(e.target.value)
    //console.log('Nro de veces llamados',error);

    let wInput = e.target.value;
    let wChars = word.split('')
    let wInputChars  = e.target.value.split('');
        console.log(wInputChars)
    
    if(wInputChars[wInputChars.length-1] === ' '  && complete === true){
      
      changeNextWord();
      setComplete(false);
                setTextValue('')
      console.log("vacio?salto")
    }else{
      //palabra incompleta
      if(wInput.length <= word.length){
        //console.log('el input es menorIgual')
        if( wInput === word ){
          //console.log('el input es igual a word',{wInput,word})
          setComplete(true);
          setError(false)
        }else{
          //
          //console.log('el input no es igual')
            let i = 0;
            let previusError=false;
            for( let wic of wInput ){
              //console.log('entro a for =>', i)
              let wChar = wChars[i]
              if(previusError ===true){break}
              if(wic === wChars[i]){
                console.log('OK :> ',{wic,wChar,error });  
                setError(false);
                setComplete(false);
              }else{
                //console.log('antes:',error) 
                previusError=true;   
                setError(true);           
               console.log('Hay error!!!!! ',{wic,wChar,error });
              }
              i++;
            }
        }
      }else{
        //word complete but without space " ": word: "Hello" => "Hellox"
        //lo correcto debia ser: "Hello "
        setComplete(false);
        setError(true);
      }
    }
    //if(textValue===''){setError(false)}
}
const [index,setIndex] = React.useState(1)

function changeNextWord(){
  setIndex(index+1)
  if(index < wordsArray.length){
    let newWord = wordsArray[index]
    dispatch(nextWord(newWord));
  }else{
    dispatch(endGame(true))
  }
}
  return (
    <Container sx={{ mt: 1}} disableGutters>
      <Card
        sx={{
          minHeight: 80,
          color: textColor,
          display: "flex",
          p:1,

        }}
      >
        <Box sx={{ width: "100%", display: "flex", mt:1,ml:1}}  >
              <TextField
              helperText={error? 'Escriba correctamente la palabra: '+ word:''}
              disabled={end}
              error={error}
              label="Escriba la palabra en azul."
              type="text"
              fullWidth
              variant="outlined"
              sx={{fontSize:'30ch'}}
              fontSize='30ch'
              value={textValue}
              onChange={comparation}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{style:{fontSize:20}}}
              FormHelperTextProps={{style:{fontSize:16,fontWeight:'700'}}}
            />
          <Box
            sx={{
              display: "block",
              width: "30%",
              ml: 2,
              color: deepPurple[700],
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
              123 p.p.m
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
              10% : Errors
            </Typography>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
