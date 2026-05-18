const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-[#E8DDD0] overflow-hidden">
        <div className="h-2 bg-linear-to-r from-[#5C3D2E] to-[#C17B4A]" />
        <div className="p-10">
          <div className="inline-flex items-center gap-2 bg-[#86C5A4]/20 border border-[#86C5A4]/40 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#86C5A4]" />
            <span className="text-sm text-[#5C3D2E] font-medium">Our Story</span>
          </div>
          <h1 className="text-4xl font-bold text-[#5C3D2E] mb-6 tracking-tight">About Us</h1>
          <p className="text-[#7C6355] text-lg leading-relaxed">
            Book Library is your go-to place to discover and review books. We believe every book tells a story worth sharing, and every reader deserves a cozy corner to explore new worlds.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;