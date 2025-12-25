const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden md:h-[600px] lg:h-[700px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/mp4/watch.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 flex justify-center items-center text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
        Hero Section
      </div>
    </section>
  );
};

export default HeroSection;
