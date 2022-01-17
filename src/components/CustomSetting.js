import * as React from "react";
import {
  Card,
  CardContent,
  Container,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";
import { fontGrid } from "@mui/material/styles/cssUtils";

const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[600];
export default function CustomSettings() {
  const [font, setFont] = React.useState("");
  const [fontSize, setFontSize] = React.useState("");
  const changeFont = (event) => {
    setFont(event.target.value);
  };

  const changeFontSize = (event) => {
    setFontSize(event.target.value);
  };
  return (
    <Container sx={{ mt: 1 }} disableGutters>
      <Card
        sx={{
          minHeight: "auto",
          color: textColor,

          background: "pink",
        }}
      >
        <CardContent
          sx={{
            width: "auto",
          }}
        >
          <Box
            width="100%"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <FormControl sx={{ width: "50%" }}>
              <InputLabel id="demo-simple-select-label">Fuente</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={font}
                label="Fuente"
                onChange={changeFont}
              >
                <MenuItem value={10}>Consolas</MenuItem>
                <MenuItem value={20}>Roboto</MenuItem>
                <MenuItem value={30}>Monospace</MenuItem>
                <MenuItem value={40}>Mononoki</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "40%" }}>
              <InputLabel id="demo-simple-select-label">
                Tamaño de fuente
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fontSize}
                label="Tamaño de fuente"
                onChange={changeFontSize}
              >
                <MenuItem value={16}>16</MenuItem>
                <MenuItem value={18}>18</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={22}>22</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
