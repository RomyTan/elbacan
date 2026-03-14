export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] flex flex-col justify-center items-center text-[#e6d5c3] px-4">
      <div className="text-center space-y-6">
        {/* Logo/Brand Name */}
        <h1 className="text-5xl md:text-7xl font-serif tracking-widest uppercase">
          El Bacán
        </h1>
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#c35a24]">
          Handcrafted Cigars
        </p>
        
        {/* Divider */}
        <div className="w-16 h-[1px] bg-[#c35a24] mx-auto my-8"></div>
        
        {/* Message */}
        <h2 className="text-xl md:text-2xl font-light tracking-wide">
          Something refined is coming.
        </h2>
        <p className="text-gray-400 text-sm md:text-base mt-4 max-w-md mx-auto">
          We are currently crafting our digital experience. Please check back soon.
        </p>
      </div>
    </div>
  );
}