import { useState } from "react";
import { createUseStyles } from "react-jss";
import sound from "./sounds/127.mp3";

const useStyle = createUseStyles({
  main: {
    height: "100dvh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cont: {
    display: "flex",
    alignItems: "center",
  },
  plus: {
    width: 150,
    height: 150,
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2)",
      transition: "opacity .3s ease 0s,background-color .3s ease 0s",
    },
  },
  minus: {
    width: 133,
    height: 133,
    cursor: "pointer",
    "&:hover": {
      transform: "scale(0.8)",
      transition: "opacity .3s ease 0s,background-color .3s ease 0s",
    },
  },
});

function App() {
  const classes = useStyle();
  const [number, setNumber] = useState(125);

  function play() {
    new Audio(sound).play();
  }

  return (
    <>
      <div className={classes.main}>
        <div className={classes.cont}>
          <img
            src="/img/plus.png"
            className={classes.plus}
            onClick={() => {
              if (number === 126) {
                play();
              }

              setNumber(number + 1);
            }}
          />
          <div style={{ fontSize: 300 }}>{number}</div>
          <img
            src="/img/minus.png"
            className={classes.minus}
            onClick={() => {
              if (number === 128) {
                play();
              }
              setNumber(number - 1);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
