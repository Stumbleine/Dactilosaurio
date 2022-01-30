import * as React from "react";
import { ThumbUp } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import { indigo, grey, orange } from "@mui/material/colors";
import SendTextForm from "./SendTextForm";
import { useDispatch, useSelector } from "react-redux";
const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[600];



export default function Results() {
      const paragraph = useSelector((state) => state.game.paragraph);
      const statsGame = useSelector((state) => state.game.statsGame);
      React.useEffect(() => {
        console.log("RESULTS: paragraph",paragraph)
    }, [paragraph]);
  const typographyStyle = {
    name: {
      fontSize: 18,
      fontWeight: "900",
      color: indigo[600],
    },
    value: {
      fontSize: 18,
      color: textColor,
      fontWeight: "400",
      marginLeft: 20,
    },
  };

  return (
    <Container sx={{ mt: 1 }} disableGutters>
      <Card>
        <Box
          sx={{
            background: "green",
            p: 2,
            pb: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              sx={{ fontStyle: "italic" }}
            >
              El texto fue extraido de:
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ lineHeight: 1, fontWeight: "600", color: orange[600] }}
            >
              {paragraph.titleBook}
            </Typography>
            <Typography>{paragraph.author}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              background: "red",
              minWidth: 200,
            }}
          >
            <Typography gutterBottom>Indica si te gustó el texto</Typography>
            <IconButton>
              <ThumbUp></ThumbUp>
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              background: "pink",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              minWidth: 180,
            }}
          >
            <Typography gutterBottom>Sugiere textos</Typography>
            <SendTextForm></SendTextForm>
          </Box>
        </Box>
        <Divider variant="middle" flexItem></Divider>
        <CardContent sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ width: "50%" }}>
            <Typography gutterBottom variant="h6" component="div">
              Resultados
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "block" }}>
                <Typography style={typographyStyle.name}>
                  Puesto:
                  <Typography variant="p" style={typographyStyle.value}>
                    #{statsGame.position}
                  </Typography>
                </Typography>
                <Typography style={typographyStyle.name}>
                  Time:
                  <Typography variant="p" style={typographyStyle.value}>
                    {statsGame.time}
                  </Typography>
                </Typography>
                <Typography style={typographyStyle.name}>
                  Pulsaciones:
                  <Typography variant="p" style={typographyStyle.value}>
                    {statsGame.pulsations}
                  </Typography>
                </Typography>
                <Typography style={typographyStyle.name}>
                  P.P.M.:
                  <Typography variant="p" style={typographyStyle.value}>
                    {statsGame.ppm}
                  </Typography>
                </Typography>
                <Typography style={typographyStyle.name}>
                  W.P.M:
                  <Typography variant="p" style={typographyStyle.value}>
                    {statsGame.wpm}
                  </Typography>
                </Typography>
                <Typography style={typographyStyle.name}>
                  Errors:
                  <Typography variant="p" style={typographyStyle.value}>
                    {statsGame.errors}
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem></Divider>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography style={typographyStyle.name}>
              ¿Jugar de nuevo?
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Jugar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
