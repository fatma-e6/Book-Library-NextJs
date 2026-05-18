import { NextResponse } from 'next/server';

const reviews = [
  { id: 1, bookId: 1, user: "Sarah M.", comment: "One of the most profound books I've ever read. A timeless masterpiece.", rating: 5 },
  { id: 2, bookId: 1, user: "James K.", comment: "Harper Lee's writing is beautiful and the story is deeply moving.", rating: 5 },
  { id: 3, bookId: 1, user: "Emma R.", comment: "A must-read for everyone. Changed my perspective on justice.", rating: 4 },
  { id: 4, bookId: 2, user: "Ahmed S.", comment: "Terrifyingly relevant even today. Orwell was a visionary.", rating: 5 },
  { id: 5, bookId: 2, user: "Lisa T.", comment: "Disturbing but brilliant. The world Orwell created is haunting.", rating: 5 },
  { id: 6, bookId: 3, user: "Mohamed A.", comment: "Beautiful prose but a tragic ending. Fitzgerald at his finest.", rating: 4 },
  { id: 7, bookId: 3, user: "Anna P.", comment: "The symbolism is incredible. A true American classic.", rating: 5 },
  { id: 8, bookId: 4, user: "Fatima H.", comment: "Witty, romantic, and timeless. Austen is unmatched.", rating: 5 },
  { id: 9, bookId: 5, user: "Carlos M.", comment: "Life-changing book. Made me reflect on my own personal legend.", rating: 5 },
  { id: 10, bookId: 6, user: "Nina L.", comment: "Thought-provoking and unsettling. A classic that deserves more attention.", rating: 4 },
];

export async function GET() {
  return NextResponse.json(reviews, { status: 200 });
}