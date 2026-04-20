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

      @font-face {
          font-family: 'GreatVibes';
          src: url('/fonts/GreatVibes-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @keyframes pageFadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes bgFadeIn { 0% { opacity: 0; } 100% { opacity: 0.7; } }

        @keyframes floatSmoke {
          0% { transform: translate(0px, 10px) scale(1) rotate(0deg); opacity: 0.2; }
          40% { transform: translate(-19px, 20px) scale(1.03) rotate(5deg); opacity: 0.85; }
          100% { transform: translate(0px, 30px) scale(1.08) rotate(0deg); opacity: 0.2; }
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
        
        @keyframes preventClicks { from { pointer-events: none; } to { pointer-events: auto; } }

        .home-container { position: relative; min-height: 100vh; display: flex; flex-direction: column; overflow: hidden; background-color: #000000; }

        .hero-bg {
          position: absolute; inset: 0; background-image: url('${bgImagePath}'); background-size: cover; background-position: center top; z-index: 0;
          opacity: 0; animation: bgFadeIn 1.5s ease-out 0.5s forwards;
        }

        .smoke-wrapper { position: absolute; inset: 0; z-index: 1; opacity: 0; animation: bgFadeIn 1.5s ease-out 0.5s forwards; }
        .smoke-layer { 
          position: absolute; 
          inset: 0; 
          background-image: url('${smokeImagePath}'); 
          background-size: cover; 
          background-position: center top; 
          transform-origin: center;
          animation: floatSmoke 6s infinite alternate ease-in-out; 
        }

        .hero-gradient { position: absolute; inset: 0; background: linear-gradient( to bottom, rgba(0, 0, 0, 0.9) 0%, transparent 25%, transparent 65%, #000000 100% ); z-index: 2; }

        .navbar { position: relative; z-index: 10; display: flex; justify-content: space-between; align-items: center; padding: 2rem 4rem; width: 100%; box-sizing: border-box; }
        .nav-links { display: flex; gap: 7rem; font-size: 20px; font-weight: normal; letter-spacing: 0.1em; text-transform: uppercase; flex: 1; opacity: 0; animation: navSlideDown 0.8s ease-out 1.2s forwards; }
        .nav-links.left { justify-content: flex-end; }
        .nav-links.right { justify-content: flex-start; }
        .nav-links a { color: #e6d5c3; text-decoration: none; transition: color 0.3s; }
        .nav-links a:hover { color: #89582F; }
        .nav-logo { flex: 0 0 auto; margin: 0 5rem; display: flex; justify-content: center; }
        .hamburger-menu { display: none; }

        .hero-content { position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; flex: 1; padding: 2rem; text-align: center; box-sizing: border-box; }
        .text-wrapper { display: flex; flex-direction: column; align-items: center; max-width: 860px; }

        /* --- STYLING TITLE FONT GREAT VIBES --- */
        .hero-title {
          font-family: 'GreatVibes', cursive;
          font-size: 76px;
          font-weight: normal;
          color: #e6d5c3;
          margin-bottom: 0.5rem;
          line-height: 1;
          text-align: center;
          /* Sesuai setting Drop Shadow: X=0, Y=4, Blur=8, Black 25% */
          text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
          opacity: 0; 
          animation: contentSlideUp 0.8s ease-out 1.4s forwards;
        }

        .hero-divider { width: 100%; height: 2px; background: rgba(181, 128, 69, 0.6); margin-top: 1rem; margin-bottom: 1.5rem; opacity: 0; animation: contentSlideUp 0.8s ease-out 2.0s forwards; }
        .hero-desc { font-family: 'Arpona', serif; font-size: 26px; font-weight: normal; color: rgba(230, 213, 195, 0.9); line-height: 1.4; width: 100%; margin-bottom: 2.5rem; text-align: center; opacity: 0; animation: contentSlideUp 0.8s ease-out 2.2s forwards; }
        .hero-buttons { display: flex; gap: 1.5rem; opacity: 0; animation: contentSlideUp 0.8s ease-out 2.4s forwards; }

        .btn { font-family: 'Arpona', serif; font-weight: bold; letter-spacing: 0.0em; text-transform: uppercase; font-size: 20px; width: 220px; padding: 12px 36px; box-sizing: border-box; display: flex; justify-content: center; align-items: center; cursor: pointer; transition: all 0.3s; }
        .btn-primary { background-color: #e6d5c3; color: #1c1c1c; border: 1px solid #e6d5c3; }
        .btn-primary:hover { background-color: #ffffff; }
        .btn-secondary { background-color: transparent; color: #e6d5c3; border: 1px solid rgba(181, 128, 69, 0.6); }
        .btn-secondary:hover { background-color: rgba(181, 128, 69, 0.2); }

        .hero-footer { position: relative; z-index: 10; text-align: center; padding: 1rem 0 2rem 0; opacity: 0; animation: contentSlideUp 0.8s ease-out 2.6s forwards; }
        .hero-footer p { color: #b58045; font-style: italic; letter-spacing: 0.15em; font-size: 14px; margin: 0; }

        @media (max-width: 768px) {
          .hero-bg, .smoke-layer { background-position: 65% center; }
          .navbar { padding: 1.5rem; justify-content: flex-start; }
          .nav-links { display: none; }
          .hamburger-menu { display: block; width: 30px; height: auto; cursor: pointer; position: absolute; left: 1.5rem; opacity: 0; animation: navSlideDown 0.8s ease-out 1.2s forwards; }
          .nav-logo { margin: 0 auto; }
          .nav-logo img { width: 140px !important; height: auto !important; }
          
          /* Penyesuaian ukuran font untuk mobile */
          .hero-title { font-size: 56px; white-space: normal; }
          
          .hero-desc { font-size: 14px; }
          .hero-buttons { flex-direction: row; gap: 15px; width: 100%; justify-content: center; }
          .btn { width: 156px; padding: 12px 0; font-size: 16px; }
        }
      `}} />

      <div className="home-container">
        
        <div className="hero-bg"></div>
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
            
            <h1 className="hero-title">La tradición se fuma con estilo</h1>

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