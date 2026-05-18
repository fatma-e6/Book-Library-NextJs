import Link from "next/link";

const NotFound = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-center">
      <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-[#E8DDD0] overflow-hidden">
        <div className="h-2 bg-linear-to-r from-[#5C3D2E] to-[#C17B4A]" />
        <div className="p-16">
          <h1 className="text-8xl font-bold text-[#C17B4A] mb-4">404</h1>
          <p className="text-[#5C3D2E] text-xl font-medium mb-2">Page Not Found</p>
          <p className="text-[#7C6355] mb-8">Sorry, the page you are looking for does not exist.</p>
          <Link
            href="/"
            className="px-8 py-3 rounded-xl bg-[#5C3D2E] text-white hover:bg-[#C17B4A] transition-all font-medium shadow-lg shadow-[#5C3D2E]/20 hover:-translate-y-0.5 inline-block"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;