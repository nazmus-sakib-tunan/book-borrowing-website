import Image from 'next/image';
import Link from 'next/link';


const booksDetailsPage = async ({ params }) =>
{

  const {id }= await  params;
  const res = await (fetch(`https://book-borrowing-server-w81l.onrender.com/books`));
  const bookData = await res.json();
const book = bookData.find((b) => b.id == id);

  if (!book) {
    return <div>Book not found</div>;
  }
  return (
    <div className='w-full h-auto my-25 flex flex-col items-center justify-center gap-5 '>
      

     <div
  key={book.id}
  className="group relative overflow-hidden rounded-3xl bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
>
 
  <figure className="relative h-64 overflow-hidden">
    <Image
      src={book.image_url}
            alt={book.title}
            
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
  priority
      className="object-cover transition-all duration-700 group-hover:scale-110"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

    {/* Category Badge */}
    <div className="absolute top-4 left-4">
      <span className="badge badge-primary px-4 py-3 font-semibold">
        {book.category}
      </span>
          </div>


    {/* Quantity Badge */}
    <div className="absolute top-4 right-4">
      <span className="badge badge-success px-4 py-3">
        {book.available_quantity} Left
      </span>
    </div>
  </figure>

  {/* Content */}
  <div className="p-5 space-y-3">
    <div>
      <h2 className="text-2xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
        {book.title}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        ✍️ {book.author}
      </p>
    </div>

    <p className="text-gray-600 text-sm line-clamp-3">
      {book.description}
    </p>

    
    <div className="flex justify-between items-center pt-2">
      <div>
        <p className="text-xs text-gray-400">Available Copies</p>
        <p className="font-bold text-lg">
          {book.available_quantity}
        </p>
      </div>

      <Link
        href={`/books/${book.id}`}
        className="btn btn-primary rounded-xl px-6 transition-all duration-300 hover:scale-105"
      >
       buy now
      </Link>
    </div>
  </div>
</div>
     
    </div>
  );
};

export default booksDetailsPage;