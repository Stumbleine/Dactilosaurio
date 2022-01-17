import {
  DarkMode,
  Lightbulb,
  Settings,
  ContentCopy,
} from "@mui/icons-material";
import {
  Card,
  CardContent,
  Divider,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import {
  deepPurple,
  deepOrange,
  grey,
  teal,
  orange,
  amber,
  brown,
} from "@mui/material/colors";
import { Box } from "@mui/system";
const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[600];
const primaryColor = teal[800],
  secondaryColor = orange[1000];

export default function ToolbarInfo() {
  return (
    <Container maxWidth="xl" sx={{ background: " red" }} disableGutters>
      <Card
        sx={{
          minWidth: 275,

          background: deepOrange[50],
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <IconButton>
            <DarkMode></DarkMode>
          </IconButton>
          <IconButton>
            <Settings></Settings>
          </IconButton>
          <IconButton>
            <Lightbulb></Lightbulb>
          </IconButton>
          <Divider orientation="vertical" variant="middle" flexItem></Divider>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              color: textColor,
            }}
          >
            <Box
              sx={{
                marginLeft: 2,
                display: "flex",
              }}
            >
              <Typography sx={{ mr: 2 }}>Usuarios conectadoos: 232</Typography>
              <Typography sx={{ mr: 2 }}>Partidas jugados: 17</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ mr: 2 }}>Codigo Sala: ETFR</Typography>
            </Box>
          </Box>
          <IconButton>
            <ContentCopy></ContentCopy>
          </IconButton>
        </Box>
      </Card>
    </Container>
  );
}
