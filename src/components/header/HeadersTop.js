import { useState } from "react";
import { createUseStyles } from "react-jss";

//#6cd1ced6
const useStyle = createUseStyles({
  main: {
    backgroundColor: "#81D8D0",
    width: "100%",
    height: 48,
    display: "flex",
    alignItems: "center",
    fontSize: 14.4,
  },
  headersLeft: {
    marginBottom: 7,
  },
  headersRight: {
    display: "flex",
    marginBottom: 7,
    marginLeft: 271,
  },
});

function HeadersTop() {
  const classes = useStyle();

  return (
    <>
      <div className={classes.main}>
        <div className={classes.headersLeft}>
          <p style={{ marginLeft: 40 }}>
            Purchases made on this site will ship to U.S. addresses only. Do you
            want to shop the U.S. site?
          </p>
        </div>
        <div className={classes.headersRight}>
          <p>Shop the U.S. site </p>
          <p style={{ marginLeft: 27 }}>Or</p>
          <p style={{ marginLeft: 27 }}> Choose location</p>
        </div>
        <a href="https://www.qahana.am/post/2560" style={{ width: 0 }}>
          <img
            src="/img/cross.png"
            width={40}
            height={40}
            style={{ marginLeft: 110 }}
          />
        </a>
      </div>
    </>
  );
}

export default HeadersTop;
