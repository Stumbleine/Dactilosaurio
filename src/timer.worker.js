import { exposeWorker } from "react-hooks-worker";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

let timerPayload = { seconds: 0, minutes: 0 };
const time = () => {
  let seconds = 0;
  let minutes = 0;

  let sampleInterval = setInterval(() => {
    if (seconds === 0 && minutes === 15) {
      clearInterval(sampleInterval);
    } else {
      if (seconds === 59) {
        minutes = minutes + 1;
        seconds = 0;
      }
      if (seconds < 59) {
        seconds = seconds + 1;
        timerPayload = {
          seconds: seconds,
          minutes: minutes,
        };
      }
    }
  }, 1000);
  return timerPayload;
};

exposeWorker(time);
