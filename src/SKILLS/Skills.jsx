import { useEffect, useRef } from "react";
import "../SKILLS/skills.css";
import python from "/src/assets/python.png"
import django from "/src/assets/django.png"
import html from "/src/assets/html.png"
import css from "/src/assets/css.png"
import javascript from "/src/assets/javascript.png"
import mongodb from "/src/assets/mongodb.png"
import node from "/src/assets/node.png"
import bootstrap from "/src/assets/bootstrap.png"
import react from "/src/assets/react.png"
import mysql from "/src/assets/mysql.png"
import figma from "/src/assets/figma.png"
import seo from "/src/assets/seo.png"

export default function Skills() {
  const sceneRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const totalCards = 12;
    let angle = 0;
    const cards = carousel.querySelectorAll(".item");

    const positionCards = () => {
      const radius = 300;
      cards.forEach((card, index) => {
        const theta = ((360 / totalCards) * index + angle) * Math.PI / 180;
        const x = Math.sin(theta) * radius;
        const z = Math.cos(theta) * radius;

        card.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${(360 / totalCards) * index + angle}deg)`;
      });
    };

    // Auto rotation
    let autoRotate = setInterval(() => {
      angle += 0.1;
      positionCards();
    }, 30);

    // Drag logic
    let isDragging = false;
    let startX = 0;

    const startDrag = (x) => {
      clearInterval(autoRotate);
      isDragging = true;
      startX = x;
    };

    const duringDrag = (x) => {
      if (!isDragging) return;
      const dx = x - startX;
      startX = x;
      angle += dx * 0.3;
      positionCards();
    };

    const endDrag = () => {
      isDragging = false;
      autoRotate = setInterval(() => {
        angle += 0.1;
        positionCards();
      }, 30);
    };

    // Event listeners
    const handleMouseDown = (e) => startDrag(e.clientX);
    const handleMouseMove = (e) => duringDrag(e.clientX);
    const handleMouseUp = endDrag;

    const handleTouchStart = (e) => startDrag(e.touches[0].clientX);
    const handleTouchMove = (e) => duringDrag(e.touches[0].clientX);
    const handleTouchEnd = endDrag;

    const handleWheel = (e) => {
  const bounds = sceneRef.current.getBoundingClientRect();

  // Only rotate if mouse is within scene
  if (e.clientY >= bounds.top && e.clientY <= bounds.bottom) {
    // Optional: Allow scroll-through if the section is not full-screen
    if (bounds.height >= window.innerHeight * 0.8) {
      e.preventDefault();
    }
    angle += e.deltaY * 0.1;
    positionCards();
  }
};




    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);



    positionCards();

    // Cleanup on unmount
    return () => {
      clearInterval(autoRotate);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      
    };
  }, []);

  return (<>
    <div className="scene" id="scene" ref={sceneRef}>
        <h1 className="skillheading">TOP TECHNICAL SKILLS</h1>
      <div className="carousel" id="carousel" ref={carouselRef}>
        <div className="item">
        <img src={python} alt="python image" />
        <h6>Python</h6>
        <div className="progressbar">
            <div className="h-100" style={{width:"95%",backgroundColor:"#C19000"}}></div>
            <p className="mt-1" style={{ color:"#FEC260"}}>Advanced</p>
        </div>
        </div>
        <div className="item">
        <img src={django} alt="django image" />
        <h6>Django</h6>
        <div className="progressbar">
            <div className="h-100" style={{width:"95%",backgroundColor:"#346751"}}></div>
            <p className="mt-1" style={{ color:"#117340"}}>Advanced</p>
        </div>
        </div>
        <div className="item">
        <img src={html} alt="HTML image" />
        <h6>HTML</h6>
        <div className="progressbar">
            <div className="h-100" style={{width:"95%",backgroundColor:"#C62300"}}></div>
            <p className="mt-1" style={{ color:"#FF6D00"}}>Advanced</p>
        </div>
        </div>
        <div className="item">
        <img src={css} alt="CSS image" />
        <h6>CSS</h6>
        <div className="progressbar">
            <div className="h-100" style={{width:"95%",backgroundColor:"#03346E"}}></div>
            <p className="mt-1" style={{ color:"#039BE5"}}>Advanced</p>
        </div>
        </div>
        <div className="item">
        <img src={javascript} alt="javascript image" />
        <h6>Javascript</h6>
        <div className="progressbar">
            <div className="h-100" style={{width:"95%",backgroundColor:"#DCA06D"}}></div>
            <p className="mt-1" style={{ color:"#FFD600"}}>Advanced</p>
        </div>
        </div>
        <div className="item">
        <img src={mongodb} alt="mongodb image" />
        <h6>Mongodb</h6>
        <div className="progressbar">
            <div className="h-100" style={{width:"50%",backgroundColor:"#481E14"}}></div>
            <p className="mt-1" style={{ color:"#5D4037"}}>Intermediate</p>
        </div>
        </div>
        <div className="item">
        <img src={node} alt="node image" />
        <h6>Node.js</h6>
        <div className="progressbar">
            <div className="h-100" style={{width:"50%",backgroundColor:"#3F4F44"}}></div>
            <p className="mt-1" style={{ color:"#2E7D32"}}>Intermediate</p>
        </div>
        </div>
        <div className="item">
        <img src={bootstrap} alt="bootstrap image" />
        <h6>Bootstrap</h6>
        <div className="progressbar">
            <div className="h-100" style={{width:"90%",backgroundColor:"#500073"}}></div>
            <p className="mt-1" style={{ color:"#7C4DFF"}}>Advanced</p>
        </div>
        </div>
        <div className="item">
        <img src={react} alt="react image" />
        <h6>React.js</h6>
        <div className="progressbar">
            <div className="h-100" style={{width:"80%",backgroundColor:"#1E3E62"}}></div>   
            <p className="mt-1" style={{ color:"#4E7AB5"}}>Proficient</p>
        </div>
        </div>
        <div className="item">
        <img src={mysql} alt="mysql image" />
        <h6>Mysql</h6>
        <div className="progressbar">
            <div className="h-100" style={{width:"90%",backgroundColor:"#03346E"}}></div>   
            <p className="mt-1" style={{ color:"#9EC6F3"}}>Advanced</p>
        </div>
        </div>
        <div className="item">
        <img src={figma} alt="figma image" />
        <h6>Figma</h6>  
        <div className="progressbar">
            <div className="h-100" style={{width:"50%",backgroundColor:"#2E073F"}}></div>   
            <p className="mt-1" style={{ color:"#7C4DFF"}}>Intermediate</p>
        </div>
        </div>
        <div className="item">
        <img src={seo} alt="seo image" />
        <h6>SEO</h6>  
        <div className="progressbar">
            <div className="h-100" style={{width:"80%",backgroundColor:"#901E3E"}}></div>   
            <p className="mt-1" style={{ color:"#C43333"}}>Proficient</p>
        </div>
        </div>
        
      </div>
    </div>
    </>
  );
}
