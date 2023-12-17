import './App.css';
import Avatar from './components/Avatar';
import gsap from "gsap";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    let tl = gsap.timeline();
    tl.from('.welcome',{opacity: 0})
    tl.to('.welcome', {
      y: 20,
      opacity: 1,
      stagger :{
        each : 0.1
      } 
    })
    
    // Cleanup function
    return () => {
      tl.kill(); // Kill the timeline to clear animations
    };
  
  },[]);

  return (
    <div style={{display:'flex',justifyContent:"center",flexDirection:"column"}}>
      
      <div style={{backgroundColor:"#637E76",height:"100vh"}}>
        <Avatar />
        <div style={{position:"absolute",top:150,left:30,zIndex:7,display:"flex",maxWidth:"60vw",flexWrap:"wrap"}}  >
          {
            "Welcome to the Home page".split(' ').map((word,index) => {
              return <h1 className='welcome' key={index} style={{color: word === 'Home' ? "white" : "black"}}>{word}&nbsp;</h1>
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;
