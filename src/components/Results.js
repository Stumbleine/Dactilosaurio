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
const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[600];

export default function Results() {
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
              Las Aventuras de Sherlock Holmes aasasas asdas asdasd hello hello
            </Typography>
            <Typography>Arthur Conan Doyle</Typography>
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
                    #2
                  </Typography>
                </Typography>
                <Typography style={typographyStyle.name}>
                  Time:
                  <Typography variant="p" style={typographyStyle.value}>
                    04:45
                  </Typography>
                </Typography>
                <Typography style={typographyStyle.name}>
                  Pulsaciones:
                  <Typography variant="p" style={typographyStyle.value}>
                    124
                  </Typography>
                </Typography>
                <Typography style={typographyStyle.name}>
                  P.P.M.:
                  <Typography variant="p" style={typographyStyle.value}>
                    145
                  </Typography>
                </Typography>
                <Typography style={typographyStyle.name}>
                  W.P.M:
                  <Typography variant="p" style={typographyStyle.value}>
                    66
                  </Typography>
                </Typography>
                <Typography style={typographyStyle.name}>
                  Errors:
                  <Typography variant="p" style={typographyStyle.value}>
                    6% (13)
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
