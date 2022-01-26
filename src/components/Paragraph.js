import { Card, Typography, CardContent, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deepPurple, grey } from "@mui/material/colors";
import Start from "./Start";
import { changeStartState } from "../store/game/gameSlice";
import { setParagraph } from "../store/game/gameSlice";

export default function Paragraph() {
  const textColorLight = grey[100],
    textColor = grey[900],
    textColorGrey = grey[600];

  const blurStyle = {
    blur: {
      filter: "blur(5px)",
      background: grey[400],
    },
  };
  //const { list: users } = useSelector((state) => state.users);
  const startGame = useSelector((state) => state.game.start);
  const paragraph = useSelector((state) => state.game.paragraph.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setParagraph());
    dispatch(changeStartState(false));
  }, []);

  return (
    <Typography
      component="div"
      sx={{ mt: 1, background: "pink", position: "relative" }}
    >
      <Box sx={{ position: "relative" }}>
        <Card
          sx={{
            minHeight: 200,
            color: textColor,
            display: "flex",
          }}
        >
          <CardContent>
            <div style={!startGame ? blurStyle.blur : {}}>
              <Typography sx={{ fontSize: 22 }}>{paragraph}</Typography>
            </div>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          zIndex: "tooltip",
          top: "50%",
          left: "50%",
          position: "absolute",
          transform: "translate(-50%, -50%)",
        }}
      >
        {!startGame ? <Start></Start> : ""}
      </Box>
    </Typography>
  );
}
