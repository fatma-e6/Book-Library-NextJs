"use client"
import { useEffect, useState } from 'react';
import { use } from 'react';
import BackButton from "@/components/BackButton";

const ReviewDetailsPage = ({ params }) => {
  const { bookId, reviewId } = use(params)
  const [review, setReview] = useState(null)

  useEffect(() => {
    fetch(`/api/reviews/${reviewId}`)
      .then(res => res.json())
      .then(data => setReview(data))
  }, [reviewId])

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <BackButton />
      <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-[#E8DDD0] overflow-hidden">
        <div className="h-2 bg-linear-to-r from-[#86C5A4] to-[#C17B4A]" />
        <div className="p-10">
          <h1 className="text-4xl font-bold text-[#5C3D2E] mb-8 tracking-tight">Review Details</h1>
          {review ? (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#5C3D2E] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{review.user[0]}</span>
                </div>
                <div>
                  <h2 className="font-bold text-[#5C3D2E] text-xl">{review.user}</h2>
                  <span className="text-[#C17B4A] text-sm">{"⭐".repeat(review.rating)} {review.rating}/5</span>
                </div>
              </div>
              <div className="bg-[#86C5A4]/10 rounded-xl p-6 border border-[#86C5A4]/20">
                <p className="text-[#7C6355] leading-relaxed text-lg italic">"{review.comment}"</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#C17B4A] animate-pulse" />
              <p className="text-[#A89080]">Loading review...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewDetailsPage;