import "../HERO/hero.css"
import Heroimg from "../assets/ai-generated-concept-human.png"
import { useEffect, useRef } from "react";
import scrollGif from "/src/assets/scroll.gif"

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = [];
    const shootingStars = [];
    const mouseTrail = [];
    const pastelColors = ["#f8c8dc", "#c8f0ff", "#d2c4fb", "#ffe3b3", "#b2f0e8"];
    const parallaxIntensity = 30;

    let mouseX = width / 2;
    let mouseY = height / 2;

    for (let i = 0; i < 500; i++) {
      const isWhite = Math.random() < 0.7;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2,
        opacity: Math.random(),
        twinkle: Math.random() * 0.02 + 0.005,
        color: isWhite ? "#ffffff" : pastelColors[Math.floor(Math.random() * pastelColors.length)],
        depth: Math.random() * 3 + 1
      });
    }

    function createShootingStar() {
      const startX = Math.random() * width;
      const startY = Math.random() * height / 2;
      shootingStars.push({
        x: startX,
        y: startY,
        length: Math.random() * 80 + 100,
        speed: Math.random() * 4 + 6,
        angle: Math.PI / 4,
        life: 0,
        maxLife: 100
      });
    }

    function drawStars() {
      for (let star of stars) {
        star.opacity += star.twinkle;
        if (star.opacity <= 0 || star.opacity >= 1) star.twinkle *= -1;

        const offsetX = ((mouseX - width / 2) / width) * star.depth * parallaxIntensity;
        const offsetY = ((mouseY - height / 2) / height) * star.depth * parallaxIntensity;

        ctx.beginPath();
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = star.color;
        ctx.arc(star.x + offsetX, star.y + offsetY, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function drawShootingStars() {
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.length * Math.cos(s.angle), s.y - s.length * Math.sin(s.angle));
        ctx.stroke();

        s.x += s.speed * Math.cos(s.angle);
        s.y += s.speed * Math.sin(s.angle);
        s.life++;

        if (s.life > s.maxLife) {
          shootingStars.splice(i, 1);
        }
      }
    }

    function drawMouseTrail() {
      mouseTrail.push({ x: mouseX, y: mouseY });
      if (mouseTrail.length > 20) mouseTrail.shift();

      for (let i = 0; i < mouseTrail.length - 1; i++) {
        const p1 = mouseTrail[i];
        const p2 = mouseTrail[i + 1];
        const alpha = 1 - i / mouseTrail.length;

        // Blue glow
        ctx.strokeStyle = `rgba(0, 150, 255, ${alpha * 0.4})`;
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        // White core
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      drawStars();
      drawShootingStars();
      drawMouseTrail();

      if (Math.random() < 0.005) createShootingStar();

      requestAnimationFrame(animate);
    }

    animate();

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="hero-section" className="">
      <div className="lg:pt-20 pt-10">
      <h1 className="text-[14dvw] font-bold text-transparent z-1 text-center ">FULLSTACK</h1>
      <h1 className="text-[14dvw] font-bold text-transparent z-1 text-center ">DEVELOPER</h1>
      <img src={Heroimg} className="z-3 lg:w-100 w-60 mx-auto lg:-mt-140 md:-mt-90 Ai" alt="" />
      <a className="text-xs text-sky-500 p-4 w-fit block opacity-50 mx-auto"
      ><img className="w-14 mx-auto" src={scrollGif} alt="scrollgif" />Scroll to explore</a>
      </div>
      <canvas ref={canvasRef} id={"sky"} style={{position: "fixed",  top: 0,left: 0,width: "100vw",  height: "100vh", zIndex: -1,pointerEvents: "none"}}></canvas>
    </section>
  );
}