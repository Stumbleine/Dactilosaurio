import React, { useEffect, useRef } from "react";
//comopnents
import InputWrite from "../components/InputWrite";
import Paragraph from "../components/Paragraph";
import RaceTrack from "../components/RaceTrack";
import Results from "../components/Results";
import ToolbarInfo from "../components/ToolbarInfo";
import CustomSettings from "../components/CustomSetting";
import ChatComponent from "../components/ChatComponent"
//mui components
import { deepPurple, grey } from "@mui/material/colors";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
//Store 
import { setParagraph,changeStartState } from "../store/game/gameSlice";
import { useDispatch, useSelector } from "react-redux";

const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[600];
export default function PracticePage() {
    const dispatch = useDispatch();
  const end = useSelector((state) => state.game.end);
    const resultRef = useRef();
    const [height, setHeight] = React.useState();
    const getHeight = () => {
      const newHeight = resultRef.current.clientHeight;
      setHeight(newHeight);
    };
  
    //functions
    useEffect(() => {

      if(end){getHeight()}
    }, [end]);
    useEffect(() => {
    dispatch(setParagraph());
    dispatch(changeStartState(false));
  }, []);
  return (
    <Container maxWidth="xl" sx={{ mt: 2, background: grey[300] }}>
      <ToolbarInfo></ToolbarInfo>

      <Box>
        <Grid container>
                        <Grid item lg={9} md={12} xs={12} sm={12} sx={{ background: " blue", p: 1 }}>
                          <RaceTrack></RaceTrack>
                        </Grid>

          <Grid
            item
            lg={3}
            sx={{
              background: " red",
              p: 1,
              display: { xs: "none", lg: "block" },
            }}
          >
            {!end?(<CustomSettings item></CustomSettings>):''}
            <ChatComponent item defaultHeight={height}></ChatComponent>
          </Grid>
        </Grid>
      </Box>
            <Box>
                {end===false?
              <Box>
                <Paragraph></Paragraph>
                <InputWrite></InputWrite>
              </Box>

            :


                  <Results></Results>
          }
            </Box>
    </Container>
  );
}
