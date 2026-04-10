"use client";

import Head from 'next/head';
import Image from 'next/image';

export default function HomePage() {
  const bgImagePath = "/images/hero-bg.jpg"; 

  return (
    <>
      <Head>
        <title>El Bacán - Home</title>
      </Head>

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
          background-color: #0d0d0d;
          height: 100%;
        }

        .home-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* --- BACKGROUND (Tanpa Overlay) --- */
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('${bgImagePath}');
          background-size: cover;
          background-position: center;
          z-index: 0;
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
          gap: 3rem;
          font-size: 0.85rem;
          font-weight: bold;
          letter-spacing: 0.2em;
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
        .nav-links a:hover { color: #D5B557; }
        
        .nav-logo {
          flex: 0 0 auto;
          margin: 0 3rem;
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
        .hero-title {
          font-size: 3rem;
          font-style: italic;
          letter-spacing: 0.1em;
          color: #e6d5c3;
          margin-bottom: 1.2rem;
        }
        .hero-divider {
          width: 100%;
          max-width: 600px;
          height: 1px;
          background: rgba(181, 128, 69, 0.6);
          margin-bottom: 1.5rem;
        }
        .hero-desc {
          color: rgba(230, 213, 195, 0.9);
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 650px;
          margin-bottom: 2rem;
        }
        
        /* --- BUTTONS --- */
        .hero-buttons {
          display: flex;
          gap: 1.5rem;
        }
        .btn {
          font-family: 'Arpona', serif;
          font-weight: bold;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-size: 0.85rem;
          padding: 1rem 3.5rem;
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
          font-size: 0.85rem;
          margin: 0;
        }

        /* --- RESPONSIVE MOBILE --- */
        @media (max-width: 768px) {
          .navbar { padding: 1rem; justify-content: center; }
          .nav-links { display: none; }
          .nav-logo { margin: 0; }
          .hero-bg {background-position: 67% center; }
          .hero-title { font-size: 2rem; }
          .hero-buttons { flex-direction: column; gap: 1rem; width: 100%; max-width: 300px; }
          .btn { width: 100%; padding: 1rem; }
        }
      `}} />

      <div className="home-container">
        
        {/* Background Pure */}
        <div className="hero-bg"></div>

        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-links left">
            <a href="#">Collection</a>
            <a href="#">Discover</a>
          </div>
          
          <div className="nav-logo">
            <Image
              src="/images/elbacan-logo.svg"
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

        {/* Main Content */}
        <main className="hero-content">
          <h1 className="hero-title">LA TRADICIÓN SE FUMA CON ESTILO</h1>
          <div className="hero-divider"></div>
          <p className="hero-desc">
            Premium handmade cigars from Nicaragua. Consistent in construction, refined in character, and made for those who expect more.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Collection</button>
            <button className="btn btn-secondary">Discover</button>
          </div>
        </main>

        {/* Bottom Statement */}
        <div className="hero-footer">
          <p>NOT JUST A CIGAR. A STATEMENT OF PRESENCE...</p>
        </div>

      </div>
    </>
  );
}