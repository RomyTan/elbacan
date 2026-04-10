"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AgeVerificationPage() {
  const [showWarning, setShowWarning] = useState(true);
  const router = useRouter();
  
  // Pastikan nama file logonya udah lo ganti jadi v2 biar gak nyangkut cache
  const logoPath = "/images/elbacan-logo-v2.svg"; 
  const bgImagePath = "/images/cerutu-bg.jpg";

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

        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden;
          font-family: 'Arpona', serif;
          color: #e6d5c3;
          background-color: #0d0d0d;
        }

        .age-page-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('${bgImagePath}');
          background-size: cover;
          background-position: center;
          z-index: -1;
        }

        .dark-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.75);
          z-index: 0;
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
          padding-bottom: ${showWarning ? '80px' : '0'};
          transition: padding 0.3s ease;
        }

        .logo-box {
          position: relative;
          width: 100%;
          max-width: 280px; 
          aspect-ratio: 500 / 443;
          margin: 0 auto 2rem auto;
        }

        @media (min-width: 768px) {
          .logo-box {
            max-width: 500px;
            margin-bottom: 3rem;
          }
        }
        
        .base-layer {
          position: absolute;
          inset: 0;
          background-image: url('${logoPath}');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center;
        }

        .mask-layer {
          position: absolute;
          inset: 0;
          -webkit-mask-image: url('${logoPath}');
          -webkit-mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-image: url('${logoPath}');
          mask-size: 100% 100%;
          mask-repeat: no-repeat;
          mask-position: center;
          overflow: hidden;
          z-index: 2;
        }

        .light-beam {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.8) 50%,
            transparent 100%
          );
          transform: skewX(-25deg);
          animation: sweep 3s infinite ease-in-out;
        }

        @keyframes sweep {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .age-text {
          font-family: 'Arpona', serif;
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #e6d5c3;
          letter-spacing: 0.1rem;
        }

        @media (min-width: 768px) {
          .age-text {
            font-size: 2.2rem;
          }
        }

        .button-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .age-button {
          background: transparent;
          border: 1px solid #e6d5c3;
          color: #e6d5c3;
          font-family: 'Arpona', serif;
          font-size: 1rem;
          font-weight: bold;
          text-transform: uppercase;
          padding: 0.8rem 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 4px;
        }

        @media (min-width: 768px) {
          .button-group {
            gap: 2rem;
          }
          .age-button {
            font-size: 1.1rem;
            padding: 1rem 3rem;
          }
        }

        .age-button:hover {
          background: #e6d5c3;
          color: #1c1c1c;
        }

        .warning-box {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: #e6d5c3;
          color: #1c1c1c;
          padding: 1rem;
          text-align: center;
          z-index: 100;
          border-top: 1px solid rgba(28, 28, 28, 0.2);
          font-size: 0.8rem;
          letter-spacing: 0.05rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        @media (min-width: 768px) {
          .warning-box {
            flex-direction: row;
            font-size: 0.9rem;
          }
        }

        .warning-box span {
          text-transform: uppercase;
          font-weight: bold;
        }

        .got-it-btn {
          background: none;
          border: none;
          color: #1c1c1c;
          text-decoration: underline;
          font-family: 'Arpona', serif;
          font-weight: bold;
          cursor: pointer;
          padding: 0;
          margin-left: 0.5rem;
          font-size: inherit;
        }
        .got-it-btn:hover {
          color: #b58045;
        }
      `}} />

      <div className="age-page-background" />
      <div className="dark-overlay" />

      <div className="content-wrapper">
        <div className="logo-box">
          <div className="base-layer"></div>
          <div className="mask-layer">
            <div className="light-beam"></div>
          </div>
        </div>

        <p className="age-text">Are You 21+ years of age?</p>
        <div className="button-group">
          <button onClick={() => router.push('/home')} className="age-button">YES</button>
          <button onClick={() => window.location.href = 'https://google.com'} className="age-button">NO</button>
        </div>
      </div>

      {showWarning && (
        <div className="warning-box">
          <div>
            <span>SURGEON GENERAL WARNING:</span> Cigars are not a safe alternative to cigarettes.
          </div>
          <button onClick={() => setShowWarning(false)} className="got-it-btn">Got it.</button>
        </div>
      )}
    </>
  );
}