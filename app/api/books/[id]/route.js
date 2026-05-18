import { NextResponse } from 'next/server';

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A powerful story of racial injustice and moral growth in the American South, seen through the eyes of young Scout Finch.",
    genre: "Classic Fiction",
    year: 1960,
    rating: 4.8,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    description: "A chilling dystopian novel about totalitarianism, surveillance, and the destruction of truth in a future society.",
    genre: "Dystopian Fiction",
    year: 1949,
    rating: 4.7,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A tragic story of wealth, love, and the American Dream set in the glamorous Jazz Age of the 1920s.",
    genre: "Classic Fiction",
    year: 1925,
    rating: 4.5,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A witty and romantic novel about love, marriage, and social class in early 19th-century England.",
    genre: "Romance",
    year: 1813,
    rating: 4.9,
  },
  {
    id: 5,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "An inspiring philosophical novel about a young shepherd's journey to find his personal legend and the treasure of life.",
    genre: "Philosophical Fiction",
    year: 1988,
    rating: 4.6,
  },
  {
    id: 6,
    title: "Brave New World",
    author: "Aldous Huxley",
    description: "A disturbing vision of a future society controlled by technology, conditioning, and the pursuit of shallow happiness.",
    genre: "Dystopian Fiction",
    year: 1932,
    rating: 4.4,
  },
];

export async function GET(req, { params }) {
  const { id } = await params;
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return NextResponse.json({ message: 'Book not found' }, { status: 404 });
  }

  return NextResponse.json(book, { status: 200 });
}