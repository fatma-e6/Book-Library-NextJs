import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Book Library",
  description: "A library of books",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#d6f1e1] font-serif relative overflow-x-hidden">
        
        {/* Background blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#86C5A4]/30 blur-3xl" />
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-[#C17B4A]/15 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full bg-[#86C5A4]/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-[#C17B4A]/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <NavBar />
        {children}
      </body>
    </html>
  );
}