import { Card, Container } from "@mui/material";

export default function ChatComponent(props) {
  const { defaultHeight = 335 } = props;
  return (
    <Container sx={{ mt: 1 }} disableGutters>
      <Card
        sx={{
          minHeight: defaultHeight,

          display: "flex",
        }}
      >
        Chat
      </Card>
    </Container>
  );
}
