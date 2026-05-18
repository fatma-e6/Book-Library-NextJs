import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 bg-[#86C5A4]/20 border border-[#86C5A4]/40 rounded-full px-4 py-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#86C5A4]" />
          <span className="text-sm text-[#5C3D2E] font-medium">Latest Articles</span>
        </div>
        <h1 className="text-5xl font-bold text-[#5C3D2E] mb-3 tracking-tight">Blog</h1>
        <p className="text-[#7C6355] text-lg">Read our latest articles about books and reading.</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {[
          {
            href: "/blog/first",
            title: "Top 10 Books of 2024",
            description: "Here are the most popular books that everyone was reading in 2024.",
            tag: "Reading List",
          },
          {
            href: "/blog/second",
            title: "How to Build a Reading Habit",
            description: "Simple tips to help you read more books every month.",
            tag: "Tips & Tricks",
          },
        ].map((post) => (
          <div key={post.href} className="group bg-white/40 backdrop-blur-sm rounded-2xl border border-[#E8DDD0] hover:border-[#C17B4A]/40 hover:shadow-xl hover:shadow-[#C17B4A]/10 transition-all hover:-translate-y-1 overflow-hidden">
            <div className="h-2 bg-linear-to-r from-[#5C3D2E] to-[#C17B4A]" />
            <div className="p-8">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#86C5A4]/20 text-[#5C3D2E] border border-[#86C5A4]/30 mb-4 inline-block">
                {post.tag}
              </span>
              <h2 className="text-xl font-bold text-[#5C3D2E] mb-3 group-hover:text-[#C17B4A] transition-colors">
                {post.title}
              </h2>
              <p className="text-[#7C6355] text-sm mb-6 leading-relaxed">{post.description}</p>
              <Link
                href={post.href}
                className="text-sm font-medium text-[#C17B4A] hover:text-[#5C3D2E] transition-colors flex items-center gap-1"
              >
                Read More
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;