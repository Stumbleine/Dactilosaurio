import { Style } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Results() {
  return (
    <Container maxWidth="xl" sx={{ mt: 1 }} disableGutters>
      <Card
        sx={{
          minHeight: 300,

          display: "flex",
        }}
      >
        <CardContent
          sx={{ display: "flex", width: "100%", background: "green" }}
        >
          <Box
            sx={{
              display: "flex",
              width: "60%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "block", background: "pink" }}>
              <Typography>Puesto : #1</Typography>
              <Typography>Time: 04:45</Typography>
              <Typography>Pulsaciones : 234</Typography>
              <Typography>P.P.M. : 153</Typography>
              <Typography>W.P.M. : 29</Typography>
              <Typography>
                Errors : <Typography variant="p">6% (13)</Typography>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",

              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            <Typography>¿Jugar de nuevo?</Typography>
            <Button>Jugar</Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
