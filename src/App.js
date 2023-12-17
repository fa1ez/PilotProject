// import './App.css';
import Avatar from './components/Avatar';
import gsap from "gsap";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    let tl = gsap.timeline();
    tl.from('.welcome',{opacity: 0,})
    tl.to('.welcome', {
      y: 50,
      opacity: 0,
      stagger :{
        each : 0.2
      } 
    })
    
    
  
  },[]);

  return (
    <div style={{display:'flex',justifyContent:"center",flexDirection:"column"}}>
      
      <div style={{backgroundColor:"grey",height:"100vh"}}>
        {/* <Avatar /> */}
        <div style={{position:"absolute",top:50,zIndex:7,display:"flex"}}  >
          {
            "Welcome to the Home page".split(' ').map((word,index) => {
              return <h1  className='welcome' key={index}>{word}</h1>
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;
