import { Box } from "@mui/system";
import InputWrite from "../components/InputWrite";
import Paragraph from "../components/Paragraph";
import RaceTrack from "../components/RaceTrack";
import ToolbarInfo from "../components/ToolbarInfo";
import { deepPurple, grey } from "@mui/material/colors";
import { Container, Grid } from "@mui/material";
import CustomSettings from "../components/CustomSetting";
import ChatComponent from "../components/ChatComponent";
import Results from "../components/Results";

const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[600];
export default function MultiplayerPage() {
  return (
    <Container maxWidth="xl" sx={{ mt: 2, background: grey[300] }}>
      <ToolbarInfo></ToolbarInfo>
      <RaceTrack></RaceTrack>
      <Box>
        <Grid container>
          <Grid item lg={9} sx={{ background: " blue", p: 1 }}>
            <Results></Results>
          </Grid>
          <Grid
            item
            md={3}
            sx={{
              background: " red",
              p: 1,
              display: { xs: "none", lg: "block" },
            }}
          >
            <CustomSettings item></CustomSettings>
            <ChatComponent item></ChatComponent>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
