import { CountertopsOutlined } from "@mui/icons-material";
import { Container, Box, Paper, Typography } from "@mui/material";
import { indigo, grey, orange } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStartState } from "../store/game/gameSlice";
export default function Start() {
  const waitTime = 3;
  const startingTime = 2;
  const [duration, setDuration] = useState(waitTime);
  const [changeTime, setChangeTime] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (duration > 0) {
        setDuration((duration) => duration - 1);
      }
      console.log("timer");
      if ((duration === 0) & (changeTime === true)) {
        clearInterval(sampleInterval);
        dispatch(changeStartState(true));
        console.log("fin?");
      } else {
        if (duration === 0) {
          setChangeTime(true);
          setDuration(startingTime);
        }
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });
  let typographyStart;
  if (changeTime === false) {
    typographyStart = <Typography>Esperando a otros jugadores</Typography>;
  } else if (changeTime === true) {
    typographyStart = <Typography>Comienza en </Typography>;
  }
  return (
    <Paper
      elevation={5}
      sx={{
        maxWidth: 300,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          p: 2,
        }}
      >
        {typographyStart}
        <Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: "900", color: indigo[600] }}
          >
            {" "}
            {duration}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
