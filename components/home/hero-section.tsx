const HeroSection = () => {
  return (
    <section className="w-full h-150 border-none">
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

      <div className="absolute inset-0 flex justify-center items-center w-110 m-3 text-white text-5xl font-serif">
        Where Elegance Meets Timeless Precision
      </div>
    </section>
  );
};

export default HeroSection;
