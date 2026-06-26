"use client";

export default function AnimatedLightBg() {
  return (
    <div className="animated-light-bg" aria-hidden="true">
      <div className="wave-container">
        <svg className="wave-svg" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lightWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#47D7D1" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.22" />
            </linearGradient>
            <linearGradient id="lightWave2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#47D7D1" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="lightWave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.14" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#47D7D1" stopOpacity="0.14" />
            </linearGradient>
          </defs>
          {/* Primary bold waves */}
          <path className="wave w1" d="M0,280 C240,180 480,380 720,280 C960,180 1200,350 1440,250" stroke="url(#lightWave1)" strokeWidth="2.5" fill="none" />
          <path className="wave w2" d="M0,340 C200,240 400,440 700,300 C1000,160 1200,400 1440,320" stroke="url(#lightWave2)" strokeWidth="2" fill="none" />
          <path className="wave w3" d="M0,220 C300,340 600,180 900,300 C1100,380 1300,220 1440,280" stroke="url(#lightWave3)" strokeWidth="2" fill="none" />
          {/* Secondary waves */}
          <path className="wave w4" d="M0,400 C280,300 560,480 840,360 C1060,260 1280,420 1440,350" stroke="url(#lightWave1)" strokeWidth="1.5" fill="none" opacity="0.7" />
          <path className="wave w5" d="M0,180 C320,280 640,120 960,240 C1120,300 1300,180 1440,220" stroke="url(#lightWave2)" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path className="wave w6" d="M0,460 C200,380 500,520 800,420 C1050,340 1250,460 1440,400" stroke="url(#lightWave3)" strokeWidth="1.2" fill="none" opacity="0.5" />
          {/* Tertiary waves */}
          <path className="wave w7" d="M0,150 C360,230 720,100 1080,200 C1260,250 1380,160 1440,180" stroke="url(#lightWave1)" strokeWidth="1" fill="none" opacity="0.45" />
          <path className="wave w8" d="M0,500 C240,430 480,550 720,470 C960,390 1200,510 1440,440" stroke="url(#lightWave2)" strokeWidth="1" fill="none" opacity="0.4" />
          <path className="wave w9" d="M0,320 C180,250 360,390 540,310 C720,230 900,370 1080,290 C1260,210 1380,330 1440,300" stroke="url(#lightWave3)" strokeWidth="0.8" fill="none" opacity="0.35" />
        </svg>
      </div>

      {/* Glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <style jsx>{`
        .animated-light-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .wave-container {
          position: absolute;
          inset: 0;
        }
        .wave-svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .wave {
          animation: lightWaveFlow 8s ease-in-out infinite alternate;
        }
        .w1 { animation-delay: 0s; }
        .w2 { animation-delay: 0.8s; }
        .w3 { animation-delay: 1.6s; }
        .w4 { animation-delay: 2.4s; animation-duration: 10s; }
        .w5 { animation-delay: 3.2s; animation-duration: 10s; }
        .w6 { animation-delay: 4s; animation-duration: 12s; }
        .w7 { animation-delay: 0.5s; animation-duration: 12s; }
        .w8 { animation-delay: 1.5s; animation-duration: 14s; }
        .w9 { animation-delay: 2.5s; animation-duration: 14s; }

        @keyframes lightWaveFlow {
          0% { transform: translateX(0) translateY(0); opacity: 0.7; }
          50% { opacity: 1; }
          100% { transform: translateX(-40px) translateY(15px); opacity: 0.7; }
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0;
          animation: orbPulse 10s ease-in-out infinite;
        }
        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(71,215,209,0.12), transparent 70%);
          top: -150px;
          right: -100px;
        }
        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(59,130,246,0.10), transparent 70%);
          bottom: -120px;
          left: -80px;
          animation-delay: 3s;
        }
        @keyframes orbPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
