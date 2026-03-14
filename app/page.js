import Image from 'next/image';
import Head from 'next/head';

export default function UnderConstruction() {
  return (
    <>
      <Head>
        <title>El Bacán - Handcrafted Cigars | Comming Soon</title>
      </Head>

      <style jsx global>{`
        /* CSS untuk efek cahaya mengkilat */
        .shimmer-container {
          position: relative;
          overflow: hidden; /* Cahaya tidak keluar batas logo */
          width: 500px; /* Ukuran logo lo */
          height: 443px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .shimmer-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: -150%; /* Mulai dari luar kiri */
          width: 100%;
          height: 100%;
          
          /* Ini "cahaya"-nya: gradient transparan-putih-transparan */
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          
          /* Miringin dikit cahayanya biar estetik */
          transform: skewX(-20deg);
          
          /* Jalankan animasi 'shimmer' selama 4 detik, selamanya */
          animation: shimmer 4s infinite;
        }

        /* Definisi gerakan animasi */
        @keyframes shimmer {
          0% {
            left: -150%; /* Posisi awal: jauh di kiri */
          }
          100% {
            left: 150%; /* Posisi akhir: jauh di kanan */
          }
        }
      `}</style>

      <div className="min-h-screen bg-[#1c1c1c] flex flex-col justify-center items-center px-4 font-sans text-[#e6d5c3]">
        <div className="text-center space-y-6">
          
          {/* Logo dengan Container Shimmer */}
          <div className="shimmer-container mb-12">
            <Image
              src="/elbacan-logo.svg" // Ini lgsg arah ke public/elbacan-logo.svg
              alt="El Bacán - Handcrafted Cigars Logo"
              width={500}
              height={443}
              priority // Penting untuk gambar yang load pertama kali
            />
          </div>
          
          {/* Teks */}
          <h2 className="text-2xl md:text-3xl font-extralight tracking-[0.2em] uppercase">
            Something refined is coming
          </h2>
          <p className="text-gray-400 text-sm md:text-lg mt-4 max-w-md mx-auto tracking-wide">
            Our master craftsman are perfecting a unique digital journey. <br /> Check back soon for the experience.
          </p>
        </div>
      </div>
    </>
  );
}