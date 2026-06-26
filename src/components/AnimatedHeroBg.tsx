"use client";

export default function AnimatedHeroBg() {
  return (
    <div className="animated-hero-bg" aria-hidden="true">
      {/* Flowing wave lines */}
      <div className="wave-container">
        <svg className="wave-svg" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#47D7D1" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#47D7D1" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#47D7D1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="waveGrad4" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#47D7D1" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#47D7D1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Primary waves — thicker, bolder */}
          <path className="wave wave-1" d="M-100,300 C60,200 180,400 360,300 C540,200 720,400 900,300 C1080,200 1260,400 1540,300" stroke="url(#waveGrad1)" strokeWidth="2.5" fill="none" />
          <path className="wave wave-2" d="M-100,350 C100,250 300,450 500,320 C700,190 900,420 1100,310 C1300,200 1400,380 1540,340" stroke="url(#waveGrad2)" strokeWidth="2" fill="none" />
          <path className="wave wave-3" d="M-100,250 C120,350 300,180 480,280 C660,380 840,210 1020,310 C1200,380 1380,230 1540,270" stroke="url(#waveGrad3)" strokeWidth="2" fill="none" />
          {/* Secondary waves — medium */}
          <path className="wave wave-4" d="M-100,420 C100,340 300,480 500,380 C700,280 900,460 1100,370 C1300,280 1400,430 1540,380" stroke="url(#waveGrad1)" strokeWidth="1.5" fill="none" opacity="0.7" />
          <path className="wave wave-5" d="M-100,180 C80,260 240,120 420,220 C600,320 780,150 960,250 C1140,340 1320,180 1540,220" stroke="url(#waveGrad2)" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path className="wave wave-6" d="M-100,480 C120,400 300,540 480,440 C660,340 840,500 1020,420 C1200,340 1380,480 1540,430" stroke="url(#waveGrad3)" strokeWidth="1.5" fill="none" opacity="0.6" />
          {/* Tertiary waves — thinner, subtler */}
          <path className="wave wave-7" d="M-100,150 C100,220 280,100 460,180 C640,260 820,120 1000,200 C1180,280 1360,140 1540,180" stroke="url(#waveGrad4)" strokeWidth="1" fill="none" opacity="0.5" />
          <path className="wave wave-8" d="M-100,520 C80,450 240,560 420,480 C600,400 780,540 960,470 C1140,400 1320,530 1540,470" stroke="url(#waveGrad4)" strokeWidth="1" fill="none" opacity="0.4" />
          <path className="wave wave-9" d="M-100,330 C60,260 200,400 380,310 C560,220 740,380 920,300 C1100,220 1280,370 1540,310" stroke="url(#waveGrad1)" strokeWidth="1" fill="none" opacity="0.35" />
          <path className="wave wave-10" d="M-100,400 C80,320 240,460 420,370 C600,280 780,430 960,350 C1140,270 1320,410 1540,360" stroke="url(#waveGrad2)" strokeWidth="0.8" fill="none" opacity="0.3" />
          <path className="wave wave-11" d="M-100,220 C100,300 280,160 460,260 C640,360 820,200 1000,290 C1180,370 1360,220 1540,260" stroke="url(#waveGrad3)" strokeWidth="0.8" fill="none" opacity="0.3" />
        </svg>
      </div>

      {/* Glow orbs (subtle) */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Mesh dots */}
      <div className="particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${8 + Math.random() * 84}%`,
              top: `${8 + Math.random() * 84}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .animated-hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        /* ── Wave Lines ── */
        .wave-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .wave-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .wave {
          animation: waveFlow 8s ease-in-out infinite alternate;
        }
        .wave-1 { animation-delay: 0s; }
        .wave-2 { animation-delay: 0.8s; }
        .wave-3 { animation-delay: 1.6s; }
        .wave-4 { animation-delay: 2.4s; }
        .wave-5 { animation-delay: 3.2s; }
        .wave-6 { animation-delay: 4s; }
        .wave-7 { animation-delay: 0.5s; animation-duration: 10s; }
        .wave-8 { animation-delay: 1.5s; animation-duration: 10s; }
        .wave-9 { animation-delay: 2.5s; animation-duration: 12s; }
        .wave-10 { animation-delay: 3.5s; animation-duration: 12s; }
        .wave-11 { animation-delay: 4.5s; animation-duration: 14s; }

        @keyframes waveFlow {
          0% { transform: translateY(-8px); opacity: 0.7; }
          50% { opacity: 1; }
          100% { transform: translateY(8px); opacity: 0.7; }
        }

        /* ── Glow Orbs ── */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0;
          animation: orbFloat 10s ease-in-out infinite;
        }
        .orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%);
          top: -200px;
          right: -150px;
          animation-delay: 0s;
        }
        .orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(71,215,209,0.12), transparent 70%);
          bottom: -150px;
          left: -100px;
          animation-delay: 3s;
        }
        @keyframes orbFloat {
          0%, 100% { opacity: 0.2; transform: translate(0, 0) scale(1); }
          50% { opacity: 0.5; transform: translate(20px, -15px) scale(1.1); }
        }

        /* ── Particles ── */
        .particles {
          position: absolute;
          inset: 0;
        }
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(71,215,209,0.5);
          opacity: 0;
          animation: particlePulse ease-in-out infinite;
        }
        @keyframes particlePulse {
          0%, 100% { opacity: 0; transform: translateY(0) scale(0.5); }
          50% { opacity: 0.7; transform: translateY(-12px) scale(1); }
        }
      `}</style>
    </div>
  );
}
