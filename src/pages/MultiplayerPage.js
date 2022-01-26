import { Box } from "@mui/system";
import InputWrite from "../components/InputWrite";
import Paragraph from "../components/Paragraph";
import RaceTrack from "../components/RaceTrack";
import ToolbarInfo from "../components/ToolbarInfo";
import { deepPurple, grey } from "@mui/material/colors";
import { Container, Grid, Typography } from "@mui/material";
import CustomSettings from "../components/CustomSetting";
import ChatComponent from "../components/ChatComponent";
import Results from "../components/Results";
import { useState, useEffect, useRef } from "react";
const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[600];
export default function MultiplayerPage() {
  const resultRef = useRef();
  const [height, setHeight] = useState();
  const getHeight = () => {
    const newHeight = resultRef.current.clientHeight;
    setHeight(newHeight);
  };
  useEffect(() => {
    getHeight();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 2, background: grey[300] }}>
      <ToolbarInfo></ToolbarInfo>
      <RaceTrack></RaceTrack>
      <Box>
        <Grid container>
          <Grid item md={8} xs={12} sx={{ background: " blue", p: 1 }}>
            <div ref={resultRef}>
              <Results id="container"></Results>
            </div>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              background: " red",
              p: 1,
              display: { md: "block", sm: "none" },
            }}
          >
            <ChatComponent defaultHeight={height}></ChatComponent>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
