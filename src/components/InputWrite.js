import {
  Card,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Box,
  FormHelperText,
} from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";
const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[100];

export default function InputWrite() {
  return (
    <Container sx={{ mt: 1 }} disableGutters>
      <Card
        sx={{
          minHeight: 80,
          color: textColor,
          display: "flex",
        }}
      >
        <CardContent sx={{ width: "100%", display: "flex" }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="component-outlined">
              Escriba la palabra en azul
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Escriba la palabra en azul"
              fullWidth
              aria-describedby="component-error-text"
            />
            <FormHelperText id="component-error-text">Error</FormHelperText>
          </FormControl>
          <Box
            sx={{
              display: "block",
              width: "30%",
              ml: 2,
              color: deepPurple[700],
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
              123 p.p.m
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
              10% : Errors
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
