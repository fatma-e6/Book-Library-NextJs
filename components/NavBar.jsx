import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";

const NavBar = async () => {
  const user = await getCurrentUser();

  return (
    <nav className="sticky top-0 z-50 bg-white/40 backdrop-blur-xl border-b border-[#86C5A4]/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#5C3D2E] flex items-center justify-center group-hover:bg-[#C17B4A] transition-colors">
            <span className="text-white text-sm font-bold">B</span>
          </div>
          <span className="font-bold text-xl text-[#5C3D2E] tracking-tight">
            Book Library
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1">
          {["Home", "About", "Books", "Blog"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="px-4 py-2 rounded-lg text-[#5C3D2E] hover:bg-[#86C5A4]/20 hover:text-[#5C3D2E] transition-all text-sm font-medium"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Auth */}
        <div className="flex items-center gap-3">
          {user ? (
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5C3D2E]/10 hover:bg-[#5C3D2E]/20 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-[#C17B4A] flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {user.username?.[0]?.toUpperCase()}
                </span>
              </div>
              <span className="text-sm font-medium text-[#5C3D2E]">{user.username}</span>
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg text-[#5C3D2E] hover:bg-[#86C5A4]/20 transition-colors text-sm font-medium"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-lg bg-[#5C3D2E] text-white hover:bg-[#C17B4A] transition-colors text-sm font-medium"
              >
                Register
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}

export default NavBar;