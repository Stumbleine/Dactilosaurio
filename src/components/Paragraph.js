import { Card, Typography, CardContent, Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deepPurple, grey } from "@mui/material/colors";
import Start from "./Start";
import { changeStartState } from "../store/game/gameSlice";
import { setParagraph } from "../store/game/gameSlice";
const textColorLight = grey[100],
  textColor = grey[900],
  textColorGrey = grey[600];
export default function Paragraph() {
  const paragraphRef = useRef();
  const [pos, setPos] = React.useState(0);
  const blurStyle = {
    blur: {
      filter: "blur(5px)",
      background: grey[400],
    },
  };
  const dispatch = useDispatch();
  //const { list: users } = useSelector((state) => state.users);
  const start = useSelector((state) => state.game.start);
  const paragraph = useSelector((state) => state.game.paragraph.value);
  const word = useSelector((state) => state.game.paragraph.word);
  //const bclose = </b>;

  useEffect(() => {
    setPos(0);
  }, []);

  useEffect(() => {
    if (paragraph !== "") {
      let l = word.length;
      /*       console.log("!textP==>", { paragraph, pos, l }); */
      let limInf = paragraph.slice(0, pos);
      let limSup = paragraph.slice(pos + l);
      /*       console.log("CORTADOS", { limInf, limSup }); */
      let newTextEl = "";
      newTextEl = newTextEl.concat(
        '<u style="color: #2EBB4D; text-decoration:none;" >',
        limInf,
        "</u>"
      );
      newTextEl = newTextEl.concat(
        '<u style="color: #2962ff;font-weight:bold;" >',
        word
      );
      newTextEl = newTextEl.concat("</u>", limSup);
      paragraphRef.current.innerHTML = newTextEl;
      setPos(pos + l + 1);
    }
  }, [word]);

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
            <div style={!start ? blurStyle.blur : {}}>
              <Typography ref={paragraphRef} sx={{ fontSize: 22 }}>
                {paragraph}
              </Typography>
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
        {!start ? <Start></Start> : ""}
      </Box>
    </Typography>
  );
}
