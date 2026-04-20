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

        /* --- ANIMASI DRAWING SVG (HANDWRITING) --- */
        @keyframes drawSignature {
          from { stroke-dashoffset: 2000; } /* Nilai ini harus besar, menyesuaikan panjang path */
          to { stroke-dashoffset: 0; }
        }

        @keyframes fadeInSvg {
          from { opacity: 0; }
          to { opacity: 1; }
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
          background-position: 
          center top; 
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

        /* --- STYLING CONTAINER SVG --- */
        .signature-container {
          width: 100%;
          max-width: 600px; /* Atur lebar tanda tangan lo di sini */
          height: auto;
          margin-bottom: 0.5rem;
          opacity: 0;
          animation: fadeInSvg 0.5s ease-out 1.5s forwards;
        }

        .signature-container svg {
          width: 100%;
          height: auto;
        }

        /* --- STYLING & ANIMASI BERURUTAN --- */
        .signature-container path {
          stroke: #e6d5c3;
          stroke-width: 2.5;
          fill: none;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          /* Durasi per huruf diperlambat jadi 0.8s */
          animation: drawSignature 0.8s ease-in-out forwards;
        }

        /* Delay bertingkat supaya muncul berurutan (0.3s antar goresan) */
        .signature-container path:nth-child(1) { animation-delay: 1.8s; }
        .signature-container path:nth-child(2) { animation-delay: 2.1s; }
        .signature-container path:nth-child(3) { animation-delay: 2.3s; }
        .signature-container path:nth-child(4) { animation-delay: 2.6s; }
        .signature-container path:nth-child(5) { animation-delay: 2.9s; }
        .signature-container path:nth-child(6) { animation-delay: 3.2s; }
        .signature-container path:nth-child(7) { animation-delay: 3.5s; }
        .signature-container path:nth-child(8) { animation-delay: 3.8s; }
        .signature-container path:nth-child(9) { animation-delay: 4.1s; }
        .signature-container path:nth-child(10) { animation-delay: 4.4s; }
        .signature-container path:nth-child(11) { animation-delay: 4.7s; }
        .signature-container path:nth-child(12) { animation-delay: 5.0s; }
        .signature-container path:nth-child(13) { animation-delay: 5.3s; }
        .signature-container path:nth-child(14) { animation-delay: 5.6s; }
        .signature-container path:nth-child(15) { animation-delay: 5.9s; }
        .signature-container path:nth-child(16) { animation-delay: 6.2s; }
        .signature-container path:nth-child(17) { animation-delay: 6.5s; }
        .signature-container path:nth-child(18) { animation-delay: 6.8s; }

        @keyframes drawSignature {
          to { stroke-dashoffset: 0; }
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
          
          .signature-container { max-width: 320px; }
          
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
            
            {/* --- BAGIAN SVG TANDA TANGAN --- */}
            <div className="signature-container">
              <svg viewBox="0 0 632.135 56.855" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M16.519 8.523c0,0 -2.693,2.236 -1.507,5.431 1.187,3.195 3.104,5.796 9.995,5.066 6.892,-0.73 12.049,-9.858 10.68,-14.103 -1.369,-4.244 -6.664,-5.02 -9.539,0.457 -2.875,5.476 -8.26,21.77 -9.766,26.379 -1.506,4.61 -4.428,9.539 -7.485,11.41 -3.058,1.871 -7.941,-0.411 -7.348,-3.423 0.593,-3.012 9.265,-0.913 15.015,1.917 5.751,2.83 12.049,5.614 16.613,0.958"/>
                  <path d="M54.536 28.741c0,0 2.054,-4.153 -1.187,-5.476 -3.24,-1.324 -9.736,2.513 -13.459,9.333 -3.724,6.819 -3.271,10.676 1.034,10.516 4.305,-0.16 11.467,-10.585 12.791,-11.635 1.323,-1.049 -3.561,3.652 -3.013,7.531 0.548,3.879 2.465,4.974 6.755,1.825 4.29,-3.149 6.07,-7.941 6.07,-7.941"/>
                  <path d="M78.447 23.862c0,0 8.93,1.458 15.552,0.304"/>
                  <path d="M90.475 8.371c0,0 -8.505,13.547 -10.692,22.295 -2.187,8.748 -1.275,14.033 5.711,12.454 6.986,-1.58 12.271,-16.646 13.365,-19.622 1.093,-2.977 1.667,-4.337 0.746,-4.086 -0.92,0.251 -2.887,1.674 0.669,4.937 3.557,3.263 5.397,5.188 3.013,9.707 -2.385,4.518 -3.138,7.656 0.167,8.2 3.306,0.544 8.368,-4.393 10.544,-7.196"/>
                  <path d="M131.11 28.031c0,0 1.381,-4.477 -2.385,-4.937 -3.765,-0.46 -9.874,3.054 -13.096,8.535 -3.221,5.481 -3.514,10 -0.501,11.38 3.012,1.381 6.945,-3.514 9.623,-6.108 2.677,-2.594 4.56,-5.23 4.811,-5.314 0.251,-0.084 -3.138,4.56 -3.347,7.908 -0.209,3.347 2.887,3.975 6.318,2.259 3.431,-1.715 8.033,-9.707 9.539,-12.133"/>
                  <path d="M154.498 22.634c0,0 -2.259,-0.879 -5.271,0.292 -3.013,1.172 -6.82,3.557 -8.912,10.335 -2.092,6.778 0.126,10.292 3.347,8.744 3.221,-1.548 11.631,-10.836 13.849,-16.652 2.217,-5.816 10.543,-21.38 10.585,-23.012 0.042,-1.631 -2.176,1.214 -6.652,11.716 -4.477,10.501 -7.615,20.459 -7.824,24.057 -0.21,3.598 2.092,5.355 5.899,3.222 3.807,-2.134 12.008,-15.146 12.886,-16.903 0.879,-1.758 -4.894,2.008 -5.522,10.418 -0.628,8.409 2.385,8.451 6.82,6.317 4.434,-2.134 7.53,-9.916 9.455,-12.259"/>
                  <path d="M191.652 29.83c0.334,0.083 3.305,-2.301 1.882,-4.895 -1.422,-2.594 -6.819,-1.967 -10.585,3.64 -3.766,5.606 -4.602,14.099 0.711,14.936 5.314,0.837 10.292,-2.803 14.853,-8.577 4.561,-5.774 7.071,-11.422 5.941,-11.338 -1.129,0.083 -5.774,8.242 -5.941,13.263 -0.167,5.021 3.431,7.322 8.326,3.891 4.896,-3.431 9.038,-11.715 9.372,-12.426 0.335,-0.712 -5.23,5.815 -4.142,10.669 1.088,4.853 5.816,5.439 11.255,-2.636 5.439,-8.075 4.435,-13.138 1.548,-13.849 -2.887,-0.711 -5.565,3.557 -4.853,7.991 0.711,4.435 3.054,7.573 7.28,6.736 4.225,-0.836 8.075,-8.702 8.451,-9.581 0.377,-0.878 -1.799,8.034 -3.138,11.088 -1.339,3.054 -0.125,1.38 4.603,-4.226 4.727,-5.607 9.037,-8.535 11.422,-7.406 2.385,1.13 -0.168,8.661 -0.586,11.548 -0.418,2.887 4.393,5.481 10.46,-3.347"/>
                  <path d="M176.631 13.554c-1.548,0.419 -2.385,2.134 -1.087,2.553 1.297,0.418 4.727,-2.385 2.008,-2.427"/>
                  <path d="M208.262 14.057c0,0 -2.427,2.217 -0.293,1.966 2.134,-0.251 6.276,-2.678 1.255,-1.966"/>
                  <path d="M226.253 16.65c0,0 1.338,-3.514 5.104,-6.066"/>
                  <path d="M275.337 33.112c0,0 5.625,-5.625 7.178,-9.696 1.554,-4.072 0.054,-3.696 -0.053,-2.84 -0.108,0.857 -0.268,5.572 1.285,10.821 1.554,5.25 1.018,10.5 -1.553,11.732 -2.572,1.232 -5.364,1.388 -7.467,-2.006 -2.103,-3.395 -1.771,-6.826 -0.111,-7.047 1.661,-0.222 4.944,5.645 8.523,5.718 3.579,0.074 12.286,-3.025 17.598,-6.53 5.313,-3.505 8.892,-9.998 6.383,-10.773 -2.509,-0.775 -8.301,1.771 -11.695,8.707 -3.394,6.936 -2.14,12.839 3.984,12.433 6.125,-0.405 10.994,-4.5 13.614,-10.33"/>
                  <path d="M327.456 27.15c0,0 12.491,-5.81 17.042,-14.718 4.551,-8.908 2.711,-11.813 -1.453,-8.521 -4.163,3.292 -9.973,18.301 -13.168,26.822 -3.196,8.521 -6.875,18.203 -4.745,23.045 2.13,4.841 7.165,-2.13 8.618,-11.716 1.452,-9.586 -0.872,-16.267 -1.065,-13.459 -0.194,2.807 0.387,9.004 5.035,10.07 4.648,1.065 10.457,-7.263 11.619,-10.264 1.162,-3.002 -1.258,-3.002 -2.324,2.227 -1.065,5.229 -3.195,11.813 1.55,11.329 4.744,-0.484 9.973,-10.651 11.716,-12.394 1.743,-1.743 -3.002,7.553 -2.421,10.264 0.581,2.711 5.713,3.486 9.683,-1.065 3.97,-4.552 5.422,-8.618 5.519,-10.361 0.097,-1.743 -0.401,5.85 -1.863,8.647 -1.462,2.798 -2.672,5.345 -2.004,4.802 0.668,-0.543 6.221,-10.814 11.273,-14.488 5.052,-3.674 7.349,-2.756 6.764,1.753 -0.584,4.51 -5.177,13.445 -4.092,12.192 1.086,-1.252 6.054,-9.478 9.186,-11.607 3.131,-2.129 5.929,-1.586 5.512,1.837 -0.418,3.424 -3.716,9.353 -0.877,10.564 2.839,1.211 6.263,-0.668 10.647,-7.057"/>
                  <path d="M423.85 28.205c0,0 1.461,-5.345 -3.507,-5.052 -4.969,0.292 -12.527,9.227 -13.529,13.82 -1.001,4.593 1.754,8.476 7.433,4.008 5.678,-4.467 7.181,-8.977 8.434,-9.394 1.252,-0.418 -3.967,5.637 -3.508,8.685 0.46,3.048 7.265,3.925 12.986,-6.514"/>
                  <path d="M458.959 30.081c0,0 4.067,-4.61 1.039,-6.417 -3.027,-1.808 -9.974,2.258 -12.246,9.942 -2.272,7.683 0.135,11.432 6.552,9.941 6.417,-1.491 11.072,-8.676 12.473,-11.252 1.401,-2.576 3.615,-4.835 3.073,-4.067 -0.542,0.768 -3.751,2.802 -4.429,8.044 -0.678,5.242 1.175,7.772 5.649,5.377 4.474,-2.395 9.58,-9.58 9.896,-14.189 0.317,-4.61 -2.033,-5.514 -4.474,-4.564 -2.44,0.949 -4.789,6.055 -1.988,10.393 2.802,4.339 4.79,5.242 8.406,3.48 3.615,-1.762 4.744,-4.61 5.467,-7.276 0.724,-2.666 1.401,-1.265 0.272,2.486 -1.13,3.751 -4.429,9.49 -3.706,8.993 0.723,-0.498 4.383,-5.694 7.637,-9.174 3.254,-3.48 7.095,-6.191 9.4,-4.383 2.304,1.807 0.135,5.603 -0.452,8.812 -0.588,3.208 -0.317,6.733 3.705,5.694 4.022,-1.04 7.456,-8.044 7.456,-8.044"/>
                  <path d="M527.557 35.684c0,0 9.67,-0.994 13.105,-6.643 3.434,-5.648 0.813,-7.591 -3.615,-6.326 -4.429,1.265 -9.128,8.36 -9.445,12.111 -0.316,3.75 0.723,9.264 7.049,8.36 6.327,-0.904 15.094,-11.343 17.173,-14.868 2.078,-3.524 4.79,-7.682 4.022,-7.591 -0.769,0.09 -1.401,1.536 -0.091,6.462 1.311,4.925 2.486,8.993 1.22,12.337 -1.265,3.343 -3.163,4.563 -6.281,3.886 -3.118,-0.678 -7.095,-5.559 -4.609,-9.4 2.485,-3.841 3.118,3.254 6.733,4.61 3.615,1.355 10.484,1.897 14.28,-5.965"/>
                  <path d="M582.327 23.98c0,0 -7.231,2.169 -15.32,0.136"/>
                  <path d="M578.44 9.022c0,0 -8.044,11.795 -10.122,19.387 -2.079,7.592 -3.841,13.918 1.356,14.732 5.196,0.813 10.8,-3.932 13.918,-9.942 3.118,-6.01 4.654,-10.303 5.377,-9.942 0.724,0.362 -4.88,7.773 -6.145,13.602 -1.265,5.83 4.202,7.818 9.535,2.395 5.332,-5.422 18.753,-24.221 20.787,-29.644 2.033,-5.423 -0.362,-8.767 -4.067,-4.203 -3.706,4.564 -6.598,10.891 -9.49,20.426 -2.892,9.535 -3.886,15.907 0.723,16.675 4.609,0.768 9.716,-8.36 11.704,-11.026 1.989,-2.667 2.305,-3.841 1.311,-2.938 -0.994,0.904 -5.739,11.433 -2.802,13.467 2.937,2.033 9.58,-1.266 12.924,-10.258 3.344,-8.993 0.407,-9.581 -2.079,-8.948 -2.485,0.633 -4.97,3.208 -3.841,8.722 1.13,5.513 8.406,9.264 13.105,2.169"/>
                  <path d="M592.125 14.455c-1.778,1.066 -0.667,2.711 1.244,2.044 1.911,-0.667 2.489,-2.489 -0.044,-2.133"/>
                </g>
              </svg>
            </div>

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