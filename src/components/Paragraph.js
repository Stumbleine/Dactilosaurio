import { Card, Container, Typography, CardContent } from "@mui/material";
import { color } from "@mui/system";

import { deepPurple, grey } from "@mui/material/colors";

export default function Paragraph() {
  const textColorLight = grey[100],
    textColor = grey[900],
    textColorGrey = grey[600];
  const paragraph =
    "Ella es siempre, para Sherlock Holmes, la mujer Rara vez le he oído hablar de ella aplicándole otro nombre. A los ojos de Sherlock Holmes, eclipsa y sobrepasa a todo su sexo. No es que haya sentido por Irene Adler nada que se parezca al amor. Su inteligencia fría, llena de precisión, pero admirablemente equilibrada, era en extremo opuesta a cualquier clase de emociones. Yo le considero como la máquina de razonar y de observar más perfecta que ha conocido el mundo; pero como enamorado, no habría sabido estar en su papel. Si alguna vez hablaba de los sentimientos más tiernos, lo hacía con mofa y sarcasmo. Admirables como tema para el observador, excelentes para descorrer el velo de los móviles y de los actos de las personas.";
  return (
    <Container sx={{ mt: 1, background: "pink", minWidth: 650 }} disableGutters>
      <Card
        sx={{
          minHeight: 200,
          color: textColor,
          display: "flex",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 18 }}>{paragraph}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
