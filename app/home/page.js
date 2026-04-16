"use client";

import Image from 'next/image';

export default function HomePage() {
  const bgImagePath = "/images/hero-bg-angel2b.jpg"; 

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

        html, body {
          font-family: 'Arpona', serif;
          margin: 0;
          padding: 0;
          background-color: #000000; /* Hero Image background = Black */
          height: 100%;
        }

        .home-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background-color: #000000;
        }

        /* --- BACKGROUND --- */
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('${bgImagePath}');
          background-size: cover;
          background-position: center;
          opacity: 0.7; /* Image = 70% */
          z-index: 0;
        }

        .hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.9) 0%,     /* Hitam gelap di atap (0%) */
            transparent 25%,           /* Mulai transparan di 25% */
            transparent 65%,           /* Tetap transparan sampai 65% (area wajah) */
            #000000 100%               /* Hitam pekat di dasar (100%) */
          );
          z-index: 1;
        }

        /* --- NAVBAR --- */
        .navbar {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 4rem;
          width: 100%;
          box-sizing: border-box;
        }
        .nav-links {
          display: flex;
          gap: 7rem;
          font-size: 20px;
          font-weight: normal;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          flex: 1;
        }
        .nav-links.left { justify-content: flex-end; }
        .nav-links.right { justify-content: flex-start; }
        .nav-links a {
          color: #e6d5c3;
          text-decoration: none;
          transition: color 0.3s;
        }
        .nav-links a:hover { color: #89582F; }
        
        .nav-logo {
          flex: 0 0 auto;
          margin: 0 5rem;
          display: flex;
          justify-content: center;
        }

        .hamburger-menu {
          display: none;
        }

        /* --- MAIN CONTENT --- */
        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
          padding: 2rem;
          text-align: center;
          box-sizing: border-box;
        }
        
        /* Wrapper biar divider sama lebarnya dengan teks */
        .text-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 860px;
        }

        .hero-title {
          font-family: 'Arpona', serif;
          font-size: 48px; /* Font 48px */
          font-style: italic; /* Arpona Regular Italic */
          font-weight: normal;
          letter-spacing: 0.03em;
          color: #e6d5c3;
          margin-bottom: 0.2rem;
          line-height: 1.2;
          text-align: center;
        }

        .hero-divider {
          width: 100%; /* Divider dibawahnya sesuai width tulisan */
          height: 2px;
          background: rgba(181, 128, 69, 0.6);
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }

        .hero-desc {
          font-family: 'Arpona', serif;
          font-size: 26px;
          font-weight: normal;
          color: rgba(230, 213, 195, 0.9);
          line-height: 1.4;
          width: 100%;
          margin-bottom: 2.5rem;
          text-align: center;
        }
        
        /* --- BUTTONS --- */
        .hero-buttons {
          display: flex;
          gap: 1.5rem;
        }
        .btn {
          font-family: 'Arpona', serif;
          font-weight: bold;
          letter-spacing: 0.0em;
          text-transform: uppercase;
          font-size: 20px;
          width: 220px;
          padding: 12px 36px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-primary {
          background-color: #e6d5c3;
          color: #1c1c1c;
          border: 1px solid #e6d5c3;
        }
        .btn-primary:hover { background-color: #ffffff; }
        .btn-secondary {
          background-color: transparent;
          color: #e6d5c3;
          border: 1px solid rgba(181, 128, 69, 0.6);
        }
        .btn-secondary:hover { background-color: rgba(181, 128, 69, 0.2); }

        /* --- FOOTER STATEMENT --- */
        .hero-footer {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 1rem 0 2rem 0;
        }
        .hero-footer p {
          color: #b58045;
          font-style: italic;
          letter-spacing: 0.15em;
          font-size: 14px;
          margin: 0;
        }

        /* --- RESPONSIVE MOBILE --- */
        @media (max-width: 768px) {
          .hero-bg {
            background-position: 65% center; 
          }
          .navbar { 
            padding: 1.5rem; 
            justify-content: flex-start; /* Ruang untuk hamburger di kiri */
          }
          .nav-links { display: none; }
          
          .hamburger-menu {
            display: block;
            width: 30px;
            height: auto;
            cursor: pointer;
            position: absolute;
            left: 1.5rem;
          }

          .nav-logo { 
            margin: 0 auto; 
          }
          /* Logo Width 140px */
          .nav-logo img {
            width: 140px !important;
            height: auto !important;
          }

          .hero-title { 
            font-size: 32px; /* Jadi 32px Center */
            white-space: pre-line; /* Memungkinkan teks turun (break) otomatis */
          }
          .hero-desc {
            font-size: 14px; 
          }
          .hero-buttons { 
            flex-direction: row; 
            gap: 15px; 
            width: 100%;
            justify-content: center;
          }
          .btn { 
            width: 156px;
            padding: 12px 0; 
            font-size: 16px;
          }
        }
      `}} />

      <div className="home-container">
        
        <div className="hero-bg"></div>
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