const BookCard = ({ title, author }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500">{author}</p>
    </div>
  );
}

export default BookCard;