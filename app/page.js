import Link from "next/link";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center py-12">
        <div className="inline-flex items-center gap-2 bg-[#86C5A4]/20 border border-[#86C5A4]/40 rounded-full px-4 py-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#86C5A4] animate-pulse" />
          <span className="text-sm text-[#5C3D2E] font-medium">Your Personal Reading Companion</span>
        </div>

        <h1 className="text-6xl font-bold text-[#5C3D2E] mb-4 leading-tight tracking-tight">
          Discover Your Next <br />
          <span className="text-[#C17B4A] italic">Favorite Book</span>
        </h1>

        <p className="text-[#7C6355] text-lg mb-8 max-w-lg leading-relaxed">
          Explore our curated collection, read honest reviews, and share your own reading journey with fellow book lovers.
        </p>

        <div className="flex gap-4 mb-10">
          <Link href="/books" className="px-8 py-3 rounded-xl bg-[#5C3D2E] text-white hover:bg-[#C17B4A] transition-all font-medium shadow-lg shadow-[#5C3D2E]/20 hover:shadow-[#C17B4A]/30 hover:-translate-y-0.5">
            Browse Books
          </Link>
          <Link href="/blog" className="px-8 py-3 rounded-xl border-2 border-[#5C3D2E]/20 text-[#5C3D2E] hover:border-[#C17B4A] hover:text-[#C17B4A] transition-all font-medium hover:-translate-y-0.5">
            Read Blog
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 w-full max-w-lg mb-6">
          {[
            { number: "6+", label: "Books" },
            { number: "10+", label: "Reviews" },
            { number: "100%", label: "Free" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-[#5C3D2E]">{stat.number}</p>
              <p className="text-sm text-[#7C6355]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-1 mb-1 opacity-60">
          <span className="text-xs text-[#7C6355]">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-linear-to-b from-[#7C6355] to-transparent" />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-3 gap-6 pb-20">
        {[
          {
            title: "Discover Books",
            description: "Explore our curated collection of books across all genres.",
            color: "from-[#86C5A4]/20 to-[#86C5A4]/5",
            border: "border-[#86C5A4]/30",
          },
          {
            title: "Read Reviews",
            description: "See what other readers think about their favorite books.",
            color: "from-[#C17B4A]/20 to-[#C17B4A]/5",
            border: "border-[#C17B4A]/30",
          },
          {
            title: "Share Thoughts",
            description: "Write your own reviews and share your reading experience.",
            color: "from-[#5C3D2E]/10 to-[#5C3D2E]/5",
            border: "border-[#5C3D2E]/20",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className={`bg-linear-to-br ${feature.color} backdrop-blur-sm rounded-2xl p-8 border ${feature.border} hover:shadow-lg transition-all hover:-translate-y-1`}
          >
            <h3 className="text-lg font-bold text-[#5C3D2E] mb-2">{feature.title}</h3>
            <p className="text-[#7C6355] text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;