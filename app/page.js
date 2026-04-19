"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AgeVerificationPage() {
  const router = useRouter();
  const [isAccepted, setIsAccepted] = useState(false);
  
  const logoPath = "/images/elbacan-logo-v2.svg"; 
  const bgImagePath = "/images/elbacan-door.jpg";

  const handleYesClick = () => {
    setIsAccepted(true);
    setTimeout(() => {
      router.push('/home');
    }, 1200);
  };

  return (
    <>
      <title>El Bacán - Age Verification</title>

      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'Arpona';
          src: url('/fonts/Arpona-Regular.otf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; font-family: 'Arpona', serif; background-color: #000000; }

        @keyframes softZoomIn {
          0% { opacity: 0; transform: scale(1); }
          100% { opacity: 0.6; transform: scale(1.8); } 
        }

        @keyframes slideDownFade {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes sweep { 0% { left: -100%; } 100% { left: 100%; } }

        /* --- ANIMASI KELUAR (SAAT KLIK YES) --- */
        @keyframes finalZoomAndFade {
          0% { opacity: 0.6; transform: scale(1.8); }
          100% { opacity: 0; transform: scale(5); }
        }

        @keyframes fadeOutText {
          to { opacity: 0; transform: translateY(20px); }
        }

        /* Desktop: Logo naik ke navbar dan mengecil (menyesuaikan 200px) */
        @keyframes logoMoveToTop {
          to { transform: translateY(-40vh) scale(0.55); }
        }

        .age-page-background {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background-image: url('${bgImagePath}'); background-size: cover; background-position: center;
          transform-origin: center center; z-index: 0; opacity: 0; 
          animation: softZoomIn 2.5s ease-out forwards;
        }

        .age-page-background.exit-anim {
          animation: finalZoomAndFade 1.2s ease-in forwards !important;
        }

        .content-wrapper {
          position: relative; z-index: 10;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          height: 100vh; text-align: center; padding-top: 16vh; 
        }

        .logo-box {
          position: relative; width: 100%; max-width: 280px; aspect-ratio: 500 / 443;
          margin: 0 auto 2rem auto; opacity: 0;
          animation: slideDownFade 1s ease-out 1.5s forwards;
        }

        /* Trigger logo pindah ke posisi menu saat YES ditekan */
        .logo-box.exit-anim {
          animation: logoMoveToTop 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards !important;
        }

        @media (min-width: 768px) {
          .logo-box { max-width: 380px; margin-bottom: 2rem; }
        }
        
        .base-layer { position: absolute; inset: 0; background-image: url('${logoPath}'); background-size: 100% 100%; background-repeat: no-repeat; background-position: center; }
        .mask-layer { position: absolute; inset: 0; -webkit-mask-image: url('${logoPath}'); -webkit-mask-size: 100% 100%; -webkit-mask-repeat: no-repeat; -webkit-mask-position: center; mask-image: url('${logoPath}'); mask-size: 100% 100%; mask-repeat: no-repeat; mask-position: center; overflow: hidden; z-index: 2; }
        .light-beam { position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%); transform: skewX(-25deg); animation: sweep 3s infinite ease-in-out; }

        .bottom-content { opacity: 0; animation: slideUpFade 1s ease-out 1.5s forwards; }
        .bottom-content.exit-anim { animation: fadeOutText 0.8s ease-in forwards; pointer-events: none; }

        .age-text { font-family: 'Arpona', serif; font-size: 1.2rem; margin-bottom: 2rem; color: #e6d5c3; letter-spacing: 0.1rem; text-transform: uppercase; }
        @media (min-width: 768px) { .age-text { font-size: 1.5rem; } }
        .button-group { display: flex; gap: 1.5rem; justify-content: center; }
        .age-button { background: transparent; border: 1px solid #e6d5c3; color: #e6d5c3; font-family: 'Arpona', serif; font-size: 0.9rem; font-weight: bold; text-transform: uppercase; padding: 0.8rem 2.5rem; cursor: pointer; transition: all 0.3s ease; border-radius: 2px; }
        .age-button:hover { background: #e6d5c3; color: #1c1c1c; }

        /* --- MOBILE OVERRIDE --- */
        @media (max-width: 768px) {
          @keyframes softZoomInMobile { 0% { opacity: 0; transform: scale(0.8); } 100% { opacity: 0.5; transform: scale(1.5); } }
          @keyframes finalZoomMobile { 0% { opacity: 0.5; transform: scale(1.5); } 100% { opacity: 0; transform: scale(5); } }
          
          /* Mobile: Logo naik ke navbar dan mengecil (menyesuaikan 140px) */
          @keyframes logoMoveToTopMobile {
            to { transform: translateY(-42vh) scale(0.5); }
          }

          .age-page-background { background-position: center bottom !important; transform-origin: center bottom !important; animation: softZoomInMobile 2.5s ease-out forwards !important; }
          .age-page-background.exit-anim { animation: finalZoomMobile 1.2s ease-in forwards !important; }
          .logo-box.exit-anim { animation: logoMoveToTopMobile 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards !important; }
          .content-wrapper { padding-top: 5vh !important; }
        }
      `}} />

      <div className={`age-page-background ${isAccepted ? 'exit-anim' : ''}`} />

      <div className="content-wrapper">
        <div className={`logo-box ${isAccepted ? 'exit-anim' : ''}`}>
          <div className="base-layer"></div>
          <div className="mask-layer">
            <div className="light-beam"></div>
          </div>
        </div>

        <div className={`bottom-content ${isAccepted ? 'exit-anim' : ''}`}>
          <p className="age-text">Are You 21+ years of age?</p>
          <div className="button-group">
            <button onClick={handleYesClick} className="age-button">YES</button>
            <button onClick={() => window.location.href = 'https://google.com'} className="age-button">NO</button>
          </div>
        </div>
      </div>
    </>
  );
}