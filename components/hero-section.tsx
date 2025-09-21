"use client";

import { CountdownTimer } from "./countdown-timer"
import { FloralDecoration } from "./floral-decoration"
import { useEffect } from "react"

export function HeroSection() {
  useEffect(() => {
    // Add CSS for heart animation if not already in global styles
    if (!document.querySelector('#heart-animation-styles')) {
      const style = document.createElement('style');
      style.id = 'heart-animation-styles';
      style.textContent = `
        .heart {
          position: absolute;
          animation: fall 5s linear forwards;
          pointer-events: none;
          z-index: 9999;
        }
        @keyframes fall {
          from { transform: translateY(0); }
          to { transform: translateY(-100vh); }
        }
      `;
      document.head.appendChild(style);
    }

    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "100vh";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";
      document.body.appendChild(heart);

      setTimeout(() => {
        if (heart.parentNode) {
          heart.remove();
        }
      }, 5000);
    }

    // Tạo tim liên tục
    const interval = setInterval(createHeart, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/NvanWeddingCard/BubuDudu.jpg')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* <FloralDecoration position="top-left" />
      <FloralDecoration position="bottom-right" /> */}

      {/* Content */}
      <div className="z-10 text-center px-4 h-full">
        <div className="relative mb-12">
          {/* Golden Heart Frame */}
          <div
            className="relative w-146 h-90 mx-auto flex items-center justify-center bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/NvanWeddingCard/header-love-bg.png')`,
            }}
          >

            <div className="z-14 px-14" style={{ marginLeft: '45px' }}>
              <p className="text-white text-xs md:text-sm mb-3 font-light tracking-wide drop-shadow-lg">
                We're Getting Married
              </p>
              <div className="inline-flex">
                <span style={{ height: 'auto', width: '100%', minWidth: '30px', color: 'rgb(255, 255, 255)', fontSize: '20px', textShadow: 'rgba(0, 0, 0, 0) 0px 0px 2px', fontWeight: 200, fontFamily: 'Playball, cursive', textAlign: 'left', lineHeight: '32x', letterSpacing: 'normal', textTransform: 'capitalize', textDecoration: 'none', fontStyle: 'normal', pointerEvents: 'none', overflow: 'hidden'}} className="mb-2 text-balance leading-tight drop-shadow-lg whitespace-nowrap">
                  Nguyễn An
                </span>
                ❤️
                <span style={{ height: 'auto', width: '100%', minWidth: '30px', color: 'rgb(255, 255, 255)', fontSize: '20px', textShadow: 'rgba(0, 0, 0, 0) 0px 0px 2px', fontWeight: 200, fontFamily: 'Playball, cursive', textAlign: 'left', lineHeight: '32x', letterSpacing: 'normal', textTransform: 'capitalize', textDecoration: 'none', fontStyle: 'normal', pointerEvents: 'none', overflow: 'hidden'}} className="mb-4 text-balance leading-tight drop-shadow-lg">
                  Bích Ngọc
                </span>
              </div>
              <p className="text-white text-xs md:text-sm font-light tracking-widest drop-shadow-lg">30 • 11 • 2025</p>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        {/* <div className="mb-8">
          <CountdownTimer />
        </div> */}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
