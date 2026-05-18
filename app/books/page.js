import Link from "next/link";

const BooksPage = async () => {
  let books = [];

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BOOKS_API, {
      cache: "force-cache"
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    books = await res.json();
  } catch (error) {
    console.error(" Error inside BooksPage Fetch:", error);
    
    books = [
      { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", description: "A powerful story of racial injustice and moral growth in the American South.", genre: "Classic Fiction", year: 1960, rating: 4.8 },
      { id: 2, title: "1984", author: "George Orwell", description: "A chilling dystopian novel about totalitarianism, surveillance, and the destruction of truth.", genre: "Dystopian Fiction", year: 1949, rating: 4.7 },
      { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "A tragic story of wealth, love, and the American Dream set in the glamorous Jazz Age.", genre: "Classic Fiction", year: 1925, rating: 4.5 },
      { id: 4, title: "Pride and Prejudice", author: "Jane Austen", description: "A witty and romantic novel about love, marriage, and social class in early 19th-century England.", genre: "Romance", year: 1813, rating: 4.9 },
      { id: 5, title: "The Alchemist", author: "Paulo Coelho", description: "An inspiring philosophical novel about a young shepherd's journey to find his personal legend.", genre: "Philosophical Fiction", year: 1988, rating: 4.6 },
      { id: 6, title: "Brave New World", author: "Aldous Huxley", description: "A disturbing vision of a future society controlled by technology, conditioning, and shallow happiness.", genre: "Dystopian Fiction", year: 1932, rating: 4.4 }
    ];
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 bg-[#86C5A4]/20 border border-[#86C5A4]/40 rounded-full px-4 py-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#86C5A4]" />
          <span className="text-sm text-[#5C3D2E] font-medium">Our Collection</span>
        </div>
        <h1 className="text-5xl font-bold text-[#5C3D2E] mb-3 tracking-tight">All Books</h1>
        <p className="text-[#7C6355] text-lg">Explore our curated collection of timeless classics.</p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.isArray(books) && books.length > 0 ? (
          books.map((book, index) => (
            <div key={book._id || book.id || index} className="group bg-white/40 backdrop-blur-sm rounded-2xl border border-[#E8DDD0] hover:border-[#C17B4A]/40 hover:shadow-xl hover:shadow-[#C17B4A]/10 transition-all hover:-translate-y-1 overflow-hidden">
              
              {/* Book Color Banner */}
              <div className="h-2 bg-linear-to-r from-[#5C3D2E] to-[#C17B4A]" />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#86C5A4]/20 text-[#5C3D2E] border border-[#86C5A4]/30">
                    {book.genre}
                  </span>
                  <span className="text-xs text-[#A89080]">{book.year}</span>
                </div>

                <h2 className="text-lg font-bold text-[#5C3D2E] mb-1 group-hover:text-[#C17B4A] transition-colors">
                  {book.title}
                </h2>
                <p className="text-[#C17B4A] text-sm font-medium mb-3">{book.author}</p>
                <p className="text-[#7C6355] text-sm leading-relaxed mb-4 line-clamp-2">
                  {book.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-[#C17B4A] text-sm">⭐</span>
                    <span className="text-sm font-medium text-[#5C3D2E]">{book.rating}</span>
                  </div>
                  <Link
                    href={`/books/${book._id || book.id}`}
                    className="text-sm font-medium text-[#C17B4A] hover:text-[#5C3D2E] transition-colors flex items-center gap-1"
                  >
                    View Details
                    <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-12 bg-white/40 backdrop-blur-sm rounded-2xl border border-[#E8DDD0]">
            <p className="text-[#7C6355] font-medium">No books found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BooksPage;