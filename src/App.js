import "./App.css";
import Avatar from "./components/Avatar";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

//assests
import UL from "./underline.svg";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".welcome", { opacity: 0 });
    tl.to(".welcome", {
      y: 20,
      opacity: 1,
      stagger: {
        each: 0.1,
      },
    });

    const text = new SplitType(".text", { types: "chars" });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: ".text",
        start: "top 40%",
        end: "bottom 80%",
        scrub: true,
        markers: false,
      },
      opacity: 0.2,
      stagger: 1,
    });
    // Cleanup function
    return () => {
      tl.kill(); // Kill the timeline to clear animations
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        overflowX:"hidden"
      }}
    >
      <div style={{ backgroundColor: "#637E76", height: "100vh" }}>
        <Avatar />
        <div
          style={{
            position: "absolute",
            top: 150,
            left: 30,
            zIndex: 7,
            display: "flex",
            maxWidth: "60vw",
            flexWrap: "wrap",
          }}
        >
          {"Welcome to the Home page".split(" ").map((word, index) => {
            return (
              <h1
                className="welcome"
                key={index}
                style={{ color: word === "Home" ? "white" : "black" }}
              >
                {word}&nbsp;
              </h1>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          backgroundColor: "#161616",
        }}
      >
        <p className="text">
          Lorem ipsum dolor sit amet. At totam ipsa vel molestiae animi nam
          libero voluptate aut quis soluta et sapiente unde ut distinctio quae.
        </p>
        <div className="underline">
          <img src={UL} style={{width:"200px",backgroundColor:"white"}} />
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#161616",
        }}
      ></div>
    </div>
  );
}

export default App;
