import React, { useEffect, useRef } from "react";
//comopnents
import InputWrite from "../components/InputWrite";
import Paragraph from "../components/Paragraph";
import RaceTrack from "../components/RaceTrack";
import Results from "../components/Results";
import ToolbarInfo from "../components/ToolbarInfo";
import CustomSettings from "../components/CustomSetting";
import ChatComponent from "../components/ChatComponent";
//mui components
import { deepPurple, grey } from "@mui/material/colors";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
//Store
import { setParagraph, changeStartState } from "../store/game/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import Timer from "../components/Timer";

const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[600];
export default function PracticePage() {
  const dispatch = useDispatch();
  const end = useSelector((state) => state.game.end);

  //functions

  useEffect(() => {
    dispatch(setParagraph());
    dispatch(changeStartState(false));
  }, []);
  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Box>
        {" "}
        <ToolbarInfo></ToolbarInfo>
      </Box>

      <Grid container spacing={1}>
        <Grid item lg={9} md={12} xs={12} sm={12} sx={{}}>
          <RaceTrack></RaceTrack>
        </Grid>

        <Grid
          item
          lg={3}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        >
          {<CustomSettings item></CustomSettings>}
          <ChatComponent item></ChatComponent>
        </Grid>
      </Grid>

      <Box sx={{ pb: 1 }}>
        {end === false ? (
          <Box>
            <Paragraph></Paragraph>
            <Box sx={{ display: "flex", width: "100%" }}>
              <InputWrite></InputWrite>

              <Timer></Timer>
            </Box>
          </Box>
        ) : (
          <Results></Results>
        )}
      </Box>
    </Container>
  );
}
