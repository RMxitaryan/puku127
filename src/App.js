import { useState } from "react";
import { createUseStyles } from "react-jss";
import HeadersTop from "./components/header/HeadersTop";
import HeadersBottom from "./components/header/HeaderBottom";
import Video from "./components/Video";

const useStyle = createUseStyles({});

function App() {
  const classes = useStyle();

  return (
    <>
      <HeadersTop />
      <HeadersBottom />
      <Video />
    </>
  );
}

export default App;
