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
  FormHelperText,
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
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",

            background: grey[400],
          }}
        >
          <FormControl sx={{ width: "50%", background: grey[200] }}>
            <InputLabel sx={{ background: "red" }}>Fuente</InputLabel>
            <Select value={font} label="Fuente" onChange={changeFont}>
              <MenuItem value={10}>Consolas</MenuItem>
              <MenuItem value={20}>Roboto</MenuItem>
              <MenuItem value={30}>Monospace</MenuItem>
              <MenuItem value={40}>Mononoki</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "40%", background: grey[200] }}>
            <InputLabel>Tamaño de fuente</InputLabel>
            <Select
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
      </Card>
    </Container>
  );
}
