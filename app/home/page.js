"use client";

import Image from 'next/image';

export default function HomePage() {
  const bgImagePath = "/images/hero-bg-angel2c.jpg"; 
  const smokeImagePath = "/images/smoke-effect.png";

  return (
    <>
      <title>El Bacán - Home</title>

      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'Arpona';
          src: url('/fonts/Arpona-Regular.otf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @keyframes pageFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes bgFadeIn {
          0% { opacity: 0; }
          100% { opacity: 0.7; }
        }

        /* --- ANIMASI ASAP --- */
        @keyframes floatSmoke {
          0% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { opacity: 0.9; }
          100% { transform: translateY(-30px) scale(1.05) rotate(1deg); opacity: 0.4; }
        }

        @keyframes navSlideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes contentSlideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        html, body {
          font-family: 'Arpona', serif; margin: 0; padding: 0; background-color: #000000; height: 100%;
          pointer-events: none;
          animation: pageFadeIn 0.3s forwards, preventClicks 1s;
        }
        
        @keyframes preventClicks {
          from { pointer-events: none; }
          to { pointer-events: auto; }
        }

        .home-container { position: relative; min-height: 100vh; display: flex; flex-direction: column; overflow: hidden; background-color: #000000; }

        /* --- BACKGROUND LAYER --- */
        .hero-bg {
          position: absolute; inset: 0; background-image: url('${bgImagePath}'); background-size: cover; background-position: center; z-index: 0;
          opacity: 0; 
          animation: bgFadeIn 1.5s ease-out 0.5s forwards;
        }

        /* --- SMOKE LAYER --- */
        .smoke-wrapper {
          position: absolute; inset: 0; z-index: 1;
          opacity: 0; 
          /* Sync fade-in sama dengan hero-bg */
          animation: bgFadeIn 1.5s ease-out 0.5s forwards;
        }

        .smoke-layer {
          position: absolute; inset: 0;
          background-image: url('${smokeImagePath}');
          background-size: cover;
          background-position: center;
          /* Asap melayang terus menerus */
          animation: floatSmoke 12s infinite alternate ease-in-out;
        }

        /* --- GRADIENT LAYER --- */
        .hero-gradient {
          position: absolute; inset: 0;
          background: linear-gradient( to bottom, rgba(0, 0, 0, 0.9) 0%, transparent 25%, transparent 65%, #000000 100% );
          z-index: 2; /* Gradient harus di atas asap */
        }

        .navbar { position: relative; z-index: 10; display: flex; justify-content: space-between; align-items: center; padding: 2rem 4rem; width: 100%; box-sizing: border-box; }

        .nav-links {
          display: flex; gap: 7rem; font-size: 20px; font-weight: normal; letter-spacing: 0.1em; text-transform: uppercase; flex: 1;
          opacity: 0;
          animation: navSlideDown 0.8s ease-out 1.2s forwards;
        }
        
        .nav-links.left { justify-content: flex-end; }
        .nav-links.right { justify-content: flex-start; }
        .nav-links a { color: #e6d5c3; text-decoration: none; transition: color 0.3s; }
        .nav-links a:hover { color: #89582F; }
        
        .nav-logo {
          flex: 0 0 auto; margin: 0 5rem; display: flex; justify-content: center;
        }

        .hamburger-menu { display: none; }

        .hero-content { position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; flex: 1; padding: 2rem; text-align: center; box-sizing: border-box; }
        .text-wrapper { display: flex; flex-direction: column; align-items: center; max-width: 860px; }

        .hero-title {
          font-family: 'Arpona', serif; font-size: 48px; font-style: italic; font-weight: normal; letter-spacing: 0.03em; color: #e6d5c3; margin-bottom: 0.2rem; line-height: 1.2; text-align: center;
          opacity: 0; animation: contentSlideUp 0.8s ease-out 1.4s forwards;
        }

        .hero-divider {
          width: 100%; height: 2px; background: rgba(181, 128, 69, 0.6); margin-top: 1rem; margin-bottom: 1.5rem;
          opacity: 0; animation: contentSlideUp 0.8s ease-out 1.6s forwards;
        }

        .hero-desc {
          font-family: 'Arpona', serif; font-size: 26px; font-weight: normal; color: rgba(230, 213, 195, 0.9); line-height: 1.4; width: 100%; margin-bottom: 2.5rem; text-align: center;
          opacity: 0; animation: contentSlideUp 0.8s ease-out 1.8s forwards;
        }
        
        .hero-buttons {
          display: flex; gap: 1.5rem;
          opacity: 0; animation: contentSlideUp 0.8s ease-out 2.0s forwards;
        }

        .btn { font-family: 'Arpona', serif; font-weight: bold; letter-spacing: 0.0em; text-transform: uppercase; font-size: 20px; width: 220px; padding: 12px 36px; box-sizing: border-box; display: flex; justify-content: center; align-items: center; cursor: pointer; transition: all 0.3s; }
        .btn-primary { background-color: #e6d5c3; color: #1c1c1c; border: 1px solid #e6d5c3; }
        .btn-primary:hover { background-color: #ffffff; }
        .btn-secondary { background-color: transparent; color: #e6d5c3; border: 1px solid rgba(181, 128, 69, 0.6); }
        .btn-secondary:hover { background-color: rgba(181, 128, 69, 0.2); }

        .hero-footer {
          position: relative; z-index: 10; text-align: center; padding: 1rem 0 2rem 0;
          opacity: 0; animation: contentSlideUp 0.8s ease-out 2.2s forwards;
        }
        .hero-footer p { color: #b58045; font-style: italic; letter-spacing: 0.15em; font-size: 14px; margin: 0; }

        @media (max-width: 768px) {
          /* Pastikan asap ikutan geser 65% bareng background utamanya */
          .hero-bg, .smoke-layer { background-position: 65% center; }
          .navbar { padding: 1.5rem; justify-content: flex-start; }
          .nav-links { display: none; }
          .hamburger-menu { display: block; width: 30px; height: auto; cursor: pointer; position: absolute; left: 1.5rem; opacity: 0; animation: navSlideDown 0.8s ease-out 1.2s forwards; }
          .nav-logo { margin: 0 auto; }
          .nav-logo img { width: 140px !important; height: auto !important; }
          .hero-title { font-size: 32px; white-space: pre-line; }
          .hero-desc { font-size: 14px; }
          .hero-buttons { flex-direction: row; gap: 15px; width: 100%; justify-content: center; }
          .btn { width: 156px; padding: 12px 0; font-size: 16px; }
        }
      `}} />

      <div className="home-container">
        
        <div className="hero-bg"></div>
        
        {/* Layer asap masuk di antara hero-bg dan hero-gradient */}
        <div className="smoke-wrapper">
          <div className="smoke-layer"></div>
        </div>
        
        <div className="hero-gradient"></div>

        <nav className="navbar">
          <img src="/images/hamburger.svg" alt="Menu" className="hamburger-menu" />

          <div className="nav-links left">
            <a href="#">Collection</a>
            <a href="#">Discover</a>
          </div>
          
          <div className="nav-logo">
            <Image
              src="/images/elbacan-logo-v2.svg"
              alt="El Bacán Logo"
              width={200}
              height={180} 
              priority
            />
          </div>

          <div className="nav-links right">
            <a href="#">Art of Aging</a>
            <a href="#">Wholesale</a>
          </div>
        </nav>

        <main className="hero-content">
          <div className="text-wrapper">
            <h1 className="hero-title">LA TRADICIÓN SE FUMA CON ESTILO</h1>
            <div className="hero-divider"></div>
            <p className="hero-desc">
              Premium handmade cigars from Nicaragua. Consistent in construction, refined in character, and made for those who expect more.
            </p>
          </div>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">Collection</button>
            <button className="btn btn-secondary">Discover</button>
          </div>
        </main>

        <div className="hero-footer">
          <p>NOT JUST A CIGAR. A STATEMENT OF PRESENCE...</p>
        </div>

      </div>
    </>
  );
}