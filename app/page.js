"use client";

import Head from 'next/head';

export default function UnderConstruction() {
  return (
    <>
      <Head>
        <title>El Bacán - Handcrafted Cigars | Coming Soon</title>
      </Head>

      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'Modesto Condensed';
          src: url('/fonts/modesto-condensed-bold.ttf') format('truetype');
          font-weight: bold;
          font-style: normal;
        }

        @font-face {
          font-family: 'Arpona';
          src: url('/fonts/Arpona-Regular.otf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        html, body {
          font-family: 'Arpona', serif;
          margin: 0;
          padding: 0;
          background-color: #1c1c1c;
          overflow-x: hidden; /* Mencegah scroll horizontal di mobile */
        }

        .font-modesto {
          font-family: 'Modesto Condensed', serif;
        }

        /* Container dibuat responsif */
        .logo-box {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 500 / 443;
          margin: 0 auto 3rem auto;
        }

        /* Render logo ngikutin 100% ukuran container */
        .base-layer {
          position: absolute;
          inset: 0;
          background-image: url('/images/elbacan-logo.svg');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center;
        }

        /* Masking juga ngikutin 100% ukuran container */
        .mask-layer {
          position: absolute;
          inset: 0;
          -webkit-mask-image: url('/images/elbacan-logo.svg');
          -webkit-mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-image: url('/images/elbacan-logo.svg');
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
            rgba(255, 255, 255, 0.9) 50%,
            transparent 100%
          );
          transform: skewX(-25deg);
          animation: sweep 3s infinite ease-in-out;
        }

        @keyframes sweep {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}} />

      <div className="min-h-screen bg-[#1c1c1c] flex flex-col justify-center items-center px-6 text-[#e6d5c3]">
        <div className="text-center flex flex-col items-center w-full">
          
          <div className="logo-box">
            <div className="base-layer"></div>
            <div className="mask-layer">
              <div className="light-beam"></div>
            </div>
          </div>
          
          <h2 className="font-modesto text-2xl md:text-3xl tracking-widest uppercase mb-4 text-[#D5B557] relative z-10">
            LA TRADICIÓN SE FUMA CON ESTILO
          </h2>
          <p className="text-[#e6d5c3] opacity-80 text-base md:text-lg max-w-2xl mx-auto tracking-wide relative z-10">
            Our master craftsmen are perfecting a unique digital journey. <br className="hidden md:block" /> Check back soon for the experience.
          </p>
        </div>
      </div>
    </>
  );
}