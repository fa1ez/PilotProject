import React from "react";
import Spline from "@splinetool/react-spline";

export default function Avatar() {
  return (
    <>
      <div style={{position:"absolute",top:0 ,right:0,overflowX:"hidden",zIndex:5}}>
        <Spline scene="https://prod.spline.design/IP1WmIrxRZVw6yaV/scene.splinecode" />
      </div>
    </>
  );
}
