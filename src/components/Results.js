import * as React from "react";
import { PanoramaPhotosphere, ThumbUp } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  tableCellClasses,
  styled,
} from "@mui/material";
import { indigo, grey, orange } from "@mui/material/colors";
import SendTextForm from "./SendTextForm";
import { useDispatch, useSelector } from "react-redux";
import { setParagraph, newGame } from "../store/game/gameSlice";
const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[600];

export default function Results() {
  const dispatch = useDispatch();
  const paragraph = useSelector((state) => state.game.paragraph);
  const statsGame = useSelector((state) => state.game.statsGame);
  React.useEffect(() => {
    console.log("RESULTS: paragraph", statsGame);
  }, [paragraph]);
  const typographyStyle = {
    name: {
      fontSize: 18,
      fontWeight: "900",
      color: indigo[500],
    },
    value: {
      fontSize: 18,
      color: textColor,
      fontWeight: "400",
      marginLeft: 15,
    },
  };
  function createData(ppm, wpm, typeVelocity) {
    return { ppm, wpm, typeVelocity };
  }
  const playAgain = () => {
    dispatch(newGame());
    dispatch(setParagraph());
  };

  const rows = [
    createData("< 120 ", "< 24 ", "Velocidad lenta"),
    createData("120-160 ", "24-32", "Velocidad baja"),
    createData("160-260 ", "32-52", "Velocidad promedio"),
    createData("260-350 ", "52-70", "Velocidad buena."),
    createData("350-400 ", "70-80 ", "Velocidad profesional"),
    createData("> 400 ", "> 80 ", "Velocidad muy alta, cerca del habla"),
  ];
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: grey[300],
      align: "center",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  return (
    <Container sx={{ mt: 1 }} disableGutters>
      <Card>
        <Box
          sx={{
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
        {/* Results */}
        <CardContent sx={{ display: "flex" }}>
          <Box sx={{ width: "80%" }}>
            <Typography gutterBottom component="div">
              Resultados
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* statsGame */}
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
                    {statsGame.time.minutes}:{statsGame.time.seconds}
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
              {/* table velocities */}
              <Paper sx={{ ml: "3%", overflow: "hidden", width: "100%" }}>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell sx={{ fontWeight: "bold" }}>
                          PPM
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontWeight: "bold" }}>
                          WPM
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontWeight: "bold" }}>
                          Tipo de velocidad
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.ppm}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="center" sx={{ minWidth: 55 }}>
                            {row.ppm}
                          </TableCell>
                          <TableCell align="center" sx={{ minWidth: 55 }}>
                            {row.wpm}
                          </TableCell>
                          <TableCell sx={{ minWidth: 250 }}>
                            {row.typeVelocity}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem></Divider>
          <Box
            sx={{
              width: "20%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Typography style={typographyStyle.name}>
              ¿Jugar de nuevo?
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }} onClick={playAgain}>
              Jugar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
