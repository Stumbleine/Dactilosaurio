import { Card, TextField, Container, Typography, Box } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { grey, red } from "@mui/material/colors";
import { updateTimer, endGame } from "../store/game/gameSlice";

export default function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const end = useSelector((state) => state.game.end);
  const start = useSelector((state) => state.game.start);
  const dispatch = useDispatch();
  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (start === true) {
        if (end === true) {
          clearInterval(sampleInterval);
        } else {
          if (seconds === 0 && minutes === 15) {
            dispatch(endGame(true));
            clearInterval(sampleInterval);
          } else {
            if (seconds === 59) {
              setMinutes(minutes + 1);

              setSeconds(0);
            }
            if (seconds < 59) {
              setSeconds(seconds + 1);
              let timerPayload = {
                seconds: seconds,
                minutes: minutes,
              };
              dispatch(updateTimer(timerPayload));
            }
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(sampleInterval);
    };
  });
  return (
    <Container sx={{ mt: 1, ml: 1, width: "20%" }} disableGutters>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
          height: "inherit",
          minHeight: 62,
        }}
      >
        <Box
          sx={{
            display: "flex",
            minWidth: 140,
            color: red[700],
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AccessTime sx={{ fontSize: 36 }}></AccessTime>

          <Typography
            sx={{
              ml: 1,
              fontSize: 36,
              fontWeight: "bold",
            }}
          >
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}
