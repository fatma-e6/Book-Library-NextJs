import Link from "next/link";
import BackButton from "@/components/BackButton";

const BookDetailsPage = async ({ params }) => {
  const { bookId } = await params

  const res = await fetch(`${process.env.NEXT_PUBLIC_BOOKS_API}/${bookId}`, {
    cache: "no-store"
  })
  const book = await res.json()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <BackButton />
      <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-[#E8DDD0] overflow-hidden hover:shadow-xl transition-all">
        <div className="h-2 bg-linear-to-r from-[#5C3D2E] to-[#C17B4A]" />
        <div className="p-10">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#86C5A4]/20 text-[#5C3D2E] border border-[#86C5A4]/30">
              {book.genre}
            </span>
            <span className="text-sm text-[#A89080]">{book.year}</span>
          </div>
          <h1 className="text-4xl font-bold text-[#5C3D2E] mb-2 tracking-tight">{book.title}</h1>
          <p className="text-[#C17B4A] font-medium mb-6">{book.author}</p>
          <p className="text-[#7C6355] leading-relaxed mb-8 text-lg">{book.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#C17B4A]">⭐</span>
              <span className="font-bold text-[#5C3D2E]">{book.rating}</span>
              <span className="text-[#A89080] text-sm">/ 5</span>
            </div>
            <Link
              href={`/books/${bookId}/reviews`}
              className="px-6 py-3 rounded-xl bg-[#5C3D2E] text-white hover:bg-[#C17B4A] transition-all font-medium shadow-lg shadow-[#5C3D2E]/20 hover:-translate-y-0.5"
            >
              View Reviews →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailsPage;