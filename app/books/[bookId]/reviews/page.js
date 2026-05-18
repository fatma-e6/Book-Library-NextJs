import Link from "next/link";
import BackButton from "@/components/BackButton";

const ReviewsPage = async ({ params }) => {
  const { bookId } = await params

  const res = await fetch(process.env.NEXT_PUBLIC_REVIEWS_API, {
    next: { revalidate: 10 }
  })
  const allReviews = await res.json()
  const reviews = allReviews.filter(r => r.bookId === parseInt(bookId))

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <BackButton />

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-[#86C5A4]/20 border border-[#86C5A4]/40 rounded-full px-4 py-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#86C5A4]" />
          <span className="text-sm text-[#5C3D2E] font-medium">Reader Reviews</span>
        </div>
        <h1 className="text-4xl font-bold text-[#5C3D2E] mb-2 tracking-tight">Reviews</h1>
        <p className="text-[#7C6355]">What fellow readers are saying.</p>
      </div>

      <div className="flex flex-col gap-4">
        {reviews.length > 0 ? reviews.map((review) => (
          <div key={review.id} className="group bg-white/40 backdrop-blur-sm rounded-2xl border border-[#E8DDD0] hover:border-[#C17B4A]/40 hover:shadow-lg transition-all overflow-hidden">
            <div className="h-1 bg-linear-to-r from-[#86C5A4] to-[#C17B4A]" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#5C3D2E] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{review.user[0]}</span>
                  </div>
                  <h2 className="font-bold text-[#5C3D2E]">{review.user}</h2>
                </div>
                <span className="text-[#C17B4A] text-sm">{"⭐".repeat(review.rating)}</span>
              </div>
              <p className="text-[#7C6355] text-sm leading-relaxed mb-4">{review.comment}</p>
              <Link
                href={`/books/${bookId}/reviews/${review.id}`}
                className="text-sm font-medium text-[#C17B4A] hover:text-[#5C3D2E] transition-colors flex items-center gap-1"
              >
                View Review
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            </div>
          </div>
        )) : (
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-[#E8DDD0] p-10 text-center">
            <p className="text-[#A89080]">No reviews yet for this book.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewsPage;