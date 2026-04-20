"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function ElBacanApp() {
  const [stage, setStage] = useState('verification'); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk Hamburger Menu

  const bgImagePath = "/images/hero-bg-angel2c.jpg"; 
  const smokeImagePath = "/images/smoke-effect.png";
  const doorImagePath = "/images/elbacan-door.jpg";
  const logoPath = "/images/elbacan-logo-v2.svg";

  const handleYesClick = () => {
    setStage('transition');
    setTimeout(() => {
      setStage('home');
    }, 1200);
  };

  return (
    <>
      <title>El Bacán - Premium Cigars</title>

      <style dangerouslySetInnerHTML={{ __html: `
        /* --- FONTS & BASE --- */
        @font-face { font-family: 'Arpona'; src: url('/fonts/Arpona-Regular.otf') format('truetype'); font-weight: normal; font-style: normal; }
        @font-face { font-family: 'GreatVibes'; src: url('/fonts/GreatVibes-Regular.ttf') format('truetype'); font-weight: normal; font-style: normal; }
        html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; font-family: 'Arpona', serif; background-color: #000000; }

        /* --- AGE VERIFICATION --- */
        @keyframes softZoomIn { 0% { opacity: 0; transform: scale(1); } 100% { opacity: 0.6; transform: scale(1.8); } }
        @keyframes slideDownFade { 0% { opacity: 0; transform: translateY(-40px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes slideUpFade { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes sweep { 0% { left: -100%; } 100% { left: 100%; } }
        @keyframes finalZoomAndFade { 0% { opacity: 0.6; transform: scale(1.8); } 100% { opacity: 0; transform: scale(5); } }
        @keyframes fadeOutText { to { opacity: 0; transform: translateY(20px); } }
        @keyframes logoMoveToTop { to { transform: translateY(-40vh) scale(0.55); } }

        .age-page-background { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url('${doorImagePath}'); background-size: cover; background-position: center; transform-origin: center center; z-index: 50; opacity: 0; animation: softZoomIn 2.5s ease-out forwards; }
        .age-page-background.exit-anim { animation: finalZoomAndFade 1.2s ease-in forwards !important; }
        .age-content-wrapper { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 60; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding-top: 16vh; box-sizing: border-box; }
        .age-logo-box { position: relative; width: 100%; max-width: 280px; aspect-ratio: 500 / 443; margin: 0 auto 2rem auto; opacity: 0; animation: slideDownFade 1s ease-out 1.5s forwards; }
        .age-logo-box.exit-anim { animation: logoMoveToTop 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards !important; }
        @media (min-width: 768px) { .age-logo-box { max-width: 380px; margin-bottom: 2rem; } }
        .base-layer { position: absolute; inset: 0; background-image: url('${logoPath}'); background-size: 100% 100%; background-repeat: no-repeat; background-position: center; }
        .mask-layer { position: absolute; inset: 0; -webkit-mask-image: url('${logoPath}'); -webkit-mask-size: 100% 100%; -webkit-mask-repeat: no-repeat; -webkit-mask-position: center; mask-image: url('${logoPath}'); mask-size: 100% 100%; mask-repeat: no-repeat; mask-position: center; overflow: hidden; z-index: 2; }
        .light-beam { position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%); transform: skewX(-25deg); animation: sweep 3s infinite ease-in-out; }
        .age-bottom-content { opacity: 0; animation: slideUpFade 1s ease-out 1.5s forwards; }
        .age-bottom-content.exit-anim { animation: fadeOutText 0.8s ease-in forwards; pointer-events: none; }
        .age-text { font-family: 'Arpona', serif; font-size: 1.2rem; margin-bottom: 2rem; color: #e6d5c3; letter-spacing: 0.1rem; text-transform: uppercase; }
        @media (min-width: 768px) { .age-text { font-size: 1.5rem; } }
        .age-button-group { display: flex; gap: 1.5rem; justify-content: center; }
        .age-button { background: transparent; border: 1px solid #e6d5c3; color: #e6d5c3; font-family: 'Arpona', serif; font-size: 0.9rem; font-weight: bold; text-transform: uppercase; padding: 0.8rem 2.5rem; cursor: pointer; transition: all 0.3s ease; border-radius: 2px; }
        .age-button:hover { background: #e6d5c3; color: #1c1c1c; }

        @media (max-width: 768px) {
          @keyframes softZoomInMobile { 0% { opacity: 0; transform: scale(0.8); } 100% { opacity: 0.5; transform: scale(1.5); } }
          @keyframes finalZoomMobile { 0% { opacity: 0.5; transform: scale(1.5); } 100% { opacity: 0; transform: scale(5); } }
          @keyframes logoMoveToTopMobile { to { transform: translateY(-42vh) scale(0.5); } }
          .age-page-background { transform-origin: center bottom; background-position: center bottom !important; animation: softZoomInMobile 2.5s ease-out forwards !important; }
          .age-page-background.exit-anim { animation: finalZoomMobile 1.2s ease-in forwards !important; }
          .age-logo-box.exit-anim { animation: logoMoveToTopMobile 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards !important; }
          .age-content-wrapper { padding-top: 5vh !important; }
        }

        /* --- HOME PAGE --- */
        @keyframes pageFadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes bgFadeIn { 0% { opacity: 0; } 100% { opacity: 0.7; } }
        @keyframes floatSmoke { 0% { transform: scale(1) rotate(0deg); opacity: 0; } 50% { transform: scale(1.03) rotate(0.5deg); opacity: 0.85; } 100% { transform: scale(1.01) rotate(-0.5deg); opacity: 0; } }
        @keyframes navSlideDown { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes contentSlideUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }

        .home-container { position: relative; min-height: 100vh; display: flex; flex-direction: column; overflow: hidden; background-color: #000000; animation: pageFadeIn 0.5s forwards; }
        .hero-bg { position: absolute; inset: 0; background-image: url('${bgImagePath}'); background-size: cover; background-position: center top; z-index: 0; opacity: 0; animation: bgFadeIn 1.5s ease-out 0.2s forwards; }
        .smoke-wrapper { position: absolute; inset: 0; z-index: 1; opacity: 0; animation: bgFadeIn 1.5s ease-out 0.2s forwards; }
        .smoke-layer { position: absolute; inset: 0; background-image: url('${smokeImagePath}'); background-size: cover; background-position: center top; transform-origin: center top; animation: floatSmoke 8s infinite ease-out; animation-delay: 1.5s; }
        .hero-gradient { position: absolute; inset: 0; background: linear-gradient( to bottom, rgba(0, 0, 0, 0.9) 0%, transparent 25%, transparent 65%, #000000 100% ); z-index: 2; }

        /* Wrapper untuk efek geser konten saat menu terbuka */
        .content-layer {
          position: relative; z-index: 10; display: flex; flex-direction: column; height: 100vh;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
        }
        .content-layer.shifted { transform: translateX(-60%); opacity: 0; }

        .navbar { display: flex; justify-content: space-between; align-items: center; padding: 2rem 4rem; width: 100%; box-sizing: border-box; }
        .nav-links { display: flex; gap: 7rem; font-size: 20px; font-weight: normal; letter-spacing: 0.1em; text-transform: uppercase; flex: 1; opacity: 0; animation: navSlideDown 0.8s ease-out 0.5s forwards; }
        .nav-links.left { justify-content: flex-end; }
        .nav-links.right { justify-content: flex-start; }
        .nav-links a { color: #e6d5c3; text-decoration: none; transition: color 0.3s; }
        .nav-links a:hover { color: #89582F; }
        .nav-logo { flex: 0 0 auto; margin: 0 5rem; display: flex; justify-content: center; }
        .hamburger-menu { display: none; }

        .hero-content { display: flex; flex-direction: column; align-items: center; justify-content: flex-end; flex: 1; padding: 2rem; text-align: center; box-sizing: border-box; }
        .text-wrapper { display: flex; flex-direction: column; align-items: center; max-width: 860px; }
        .hero-title { font-family: 'GreatVibes', cursive; font-size: 72px; font-weight: normal; color: #e6d5c3; margin-bottom: 0.5rem; line-height: 1; text-align: center; text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.55); opacity: 0; animation: contentSlideUp 0.8s ease-out 0.8s forwards; }
        .hero-divider { width: 40%; height: 2px; background: rgba(181, 128, 69, 0.6); margin-top: 1rem; margin-bottom: 1.5rem; opacity: 0; animation: contentSlideUp 0.8s ease-out 1.0s forwards; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.55);}
        .hero-desc { font-family: 'Arpona', serif; font-size: 26px; font-weight: normal; color: rgba(230, 213, 195, 0.9); line-height: 1.4; width: 100%; margin-bottom: 2.5rem; text-align: center; opacity: 0; animation: contentSlideUp 0.8s ease-out 1.2s forwards; text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.55);}
        .hero-buttons { display: flex; gap: 1.5rem; opacity: 0; animation: contentSlideUp 0.8s ease-out 1.4s forwards; }

        .btn { font-family: 'Arpona', serif; font-weight: bold; letter-spacing: 0.0em; text-transform: uppercase; font-size: 20px; width: 220px; padding: 12px 36px; box-sizing: border-box; display: flex; justify-content: center; align-items: center; cursor: pointer; transition: all 0.3s; }
        .btn-primary { background-color: #e6d5c3; color: #1c1c1c; border: 1px solid #89582F; }
        .btn-primary:hover { background-color: #89582F; color: #FFFFFF;}
        .btn-secondary { background-color: transparent; color: #e6d5c3; border: 1px solid rgba(181, 128, 69, 0.6); }
        .btn-secondary:hover { background-color: rgba(181, 128, 69, 0.2); }

        .hero-footer { text-align: center; padding: 1rem 0 2rem 0; opacity: 0; animation: contentSlideUp 0.8s ease-out 1.6s forwards; }
        .hero-footer p { color: #b58045; font-style: italic; letter-spacing: 0.15em; font-size: 14px; margin: 0; }

        /* --- MOBILE MENU CSS --- */
        .mobile-menu {
          position: fixed; top: 0; right: 0; width: 100%; height: 100%; z-index: 100;
          background-color: rgba(0, 0, 0, 0.8); backdrop-filter: blur(8px);
          display: flex; flex-direction: column; align-items: center; padding: 1.5rem 2rem 2rem;
          transform: translateX(100%); transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-menu.open { transform: translateX(0); }
        
        .menu-close-btn { align-self: flex-end; background: none; border: none; color: #fff; font-size: 28px; cursor: pointer; padding: 0; }
        .menu-logo { margin: 1rem 0 3rem; }
        
        .menu-nav { display: flex; flex-direction: column; width: 100%; max-width: 280px; gap: 0.5rem; }
        .menu-link { 
          color: #fff; text-decoration: none; font-size: 18px; padding: 14px 24px; box-sizing: border-box; width: 100%;
          opacity: 0; transform: translateX(30px); transition: all 0.4s ease;
        }
        .mobile-menu.open .menu-link { opacity: 1; transform: translateX(0); }
        .menu-link.active { background-color: #89582F; border-radius: 30px; }

        /* Animasi berurutan untuk menu */
        .mobile-menu.open .menu-link:nth-child(1) { transition-delay: 0.1s; }
        .mobile-menu.open .menu-link:nth-child(2) { transition-delay: 0.2s; }
        .mobile-menu.open .menu-link:nth-child(3) { transition-delay: 0.3s; }
        .mobile-menu.open .menu-link:nth-child(4) { transition-delay: 0.4s; }
        .mobile-menu.open .menu-link:nth-child(5) { transition-delay: 0.5s; }

        .menu-footer-box {
          margin-top: auto; display: flex; flex-direction: column; align-items: center; gap: 1.5rem; width: 100%;
          opacity: 0; transform: translateY(20px); transition: all 0.5s ease 0.6s;
        }
        .mobile-menu.open .menu-footer-box { opacity: 1; transform: translateY(0); }

        .menu-socials { display: flex; gap: 1.5rem; }
        .menu-socials img { width: 28px; height: 28px; }

        .btn-whatsapp {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          background-color: #89582F; color: #fff; text-decoration: none; border-radius: 30px;
          width: 100%; max-width: 280px; padding: 14px; font-size: 16px; border: none; cursor: pointer;
        }
        .btn-whatsapp img { width: 24px; height: 24px; }
        .menu-copyright { color: #fff; font-size: 12px; margin-top: 0.5rem; }

        @media (max-width: 768px) {
          .hero-bg, .smoke-layer { background-position: 65% top; }
          .navbar { padding: 1.5rem; justify-content: flex-start; }
          .nav-links { display: none; }
          .hamburger-menu { display: block; width: 30px; height: auto; cursor: pointer; position: absolute; left: 1.5rem; opacity: 0; animation: navSlideDown 0.8s ease-out 0.5s forwards; z-index: 20;}
          .nav-logo { margin: 0 auto; }
          .nav-logo img { width: 140px !important; height: auto !important; }
          .hero-title { font-size: 52px; white-space: normal; margin-bottom: 0.2rem; }
          .hero-divider { width: 80%; margin-top: 0.5rem; margin-bottom: 1rem;}
          .hero-desc { font-size: 15px; }
          .hero-buttons { flex-direction: row; gap: 15px; width: 100%; justify-content: center; margin-top: -0.75rem; margin-bottom: 0.1rem; }
          .btn { width: 156px; padding: 12px 0; font-size: 16px; margin-bottom: -1rem; }
        }
      `}} />

      {stage !== 'home' && (
        <>
          <div className={`age-page-background ${stage === 'transition' ? 'exit-anim' : ''}`} />
          <div className="age-content-wrapper">
            <div className={`age-logo-box ${stage === 'transition' ? 'exit-anim' : ''}`}>
              <div className="base-layer"></div>
              <div className="mask-layer"><div className="light-beam"></div></div>
            </div>
            <div className={`age-bottom-content ${stage === 'transition' ? 'exit-anim' : ''}`}>
              <p className="age-text">Are You 21+ years of age?</p>
              <div className="age-button-group">
                <button onClick={handleYesClick} className="age-button">YES</button>
                <button onClick={() => window.location.href = 'https://google.com'} className="age-button">NO</button>
              </div>
            </div>
          </div>
        </>
      )}

      {stage === 'home' && (
        <div className="home-container">
          <div className="hero-bg"></div>
          <div className="smoke-wrapper"><div className="smoke-layer"></div></div>
          <div className="hero-gradient"></div>

          {/* Wrapper Konten untuk di-Push saat Menu Terbuka */}
          <div className={`content-layer ${isMenuOpen ? 'shifted' : ''}`}>
            <nav className="navbar">
              <img src="/images/hamburger.svg" alt="Menu" className="hamburger-menu" onClick={() => setIsMenuOpen(true)} />
              <div className="nav-links left"><a href="#">Collection</a><a href="#">Discover</a></div>
              
              <div className="nav-logo">
                <Image src="/images/elbacan-logo-v2.svg" alt="El Bacán Logo" width={200} height={180} priority />
              </div>

              <div className="nav-links right"><a href="#">Art of Aging</a><a href="#">Wholesale</a></div>
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

          {/* Mobile Menu Overlay */}
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <button className="menu-close-btn" onClick={() => setIsMenuOpen(false)}>&#10005;</button>
            
            <div className="menu-logo">
              <Image src="/images/elbacan-logo-v2.svg" alt="El Bacán Logo" width={140} height={126} priority />
            </div>

            <nav className="menu-nav">
              <a href="#" className="menu-link active">Home</a>
              <a href="#" className="menu-link">Collection</a>
              <a href="#" className="menu-link">Discover</a>
              <a href="#" className="menu-link">Art of Aging</a>
              <a href="#" className="menu-link">Wholesale</a>
            </nav>

            <div className="menu-footer-box">
              <div className="menu-socials">
                <img src="/images/instagram.svg" alt="Instagram" />
                <img src="/images/fb.svg" alt="Facebook" />
              </div>
              <button className="btn-whatsapp">
                <img src="/images/wa.svg" alt="WhatsApp" />
                WhatsApp
              </button>
              <p className="menu-copyright">© 2026 ElBacan Cigars. All Rights Reserved.</p>
            </div>
          </div>

        </div>
      )}
    </>
  );
}