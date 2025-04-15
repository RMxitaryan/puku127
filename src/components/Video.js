import { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  main: {
    display: "flex",
    alignItems: "center",
  },
});

function Video() {
  const classes = useStyle();

  return (
    <>
      <div className={classes.main}>
        <video width={888} height={500} controls>
          <source
            width={900}
            src="/img/tiffany_video_main.mp4"
            type="video/mp4"
          />
        </video>
        <div>
          <div>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                font: "Santral W01",
                fontSize: 24,
                fontWeight: 450,
              }}
            >
              HardWear by Tiffany
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                width: "80%",
                font: "Santral W01",
                fontSize: 17,
                fontWeight: 200,
              }}
            >
              Showcasing individual stories of power and resilience,
              award-winning actresses Greta Lee and Mikey Madison and acclaimed
              painter Anna Weyant wear the bold links of HardWear by Tiffany, a
              symbol of love’s transformative strength.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
