import { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  topDiv: {
    display: "flex",
    justifyContent: "center",
    fontSize: 30,
    fontFamily: "Santral W01",
    fontWeight: 400,
    lineHeight: 1.71,
  },
});

function HeadersBottom() {
  const classes = useStyle();

  return (
    <>
      <div>
        <div className={classes.topDiv}>TIFFANY&CO.</div>
      </div>
    </>
  );
}

export default HeadersBottom;
