import { Card, Container } from "@mui/material";

export default function ChatComponent() {
  return (
    <Container sx={{ mt: 1 }} disableGutters>
      <Card
        sx={{
          minHeight: 300,

          display: "flex",
        }}
      >
        Chat
      </Card>
    </Container>
  );
}
