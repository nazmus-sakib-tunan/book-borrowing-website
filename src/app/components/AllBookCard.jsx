import Image from 'next/image';
import Link from 'next/link';


const AllBookCard = async ({ books }) => {
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      
            {books.map((book) => (
              <div
                key={book.id}
                className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden h-full group"
              >
                {/* Image Section */}
                <figure className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={book.image_url}
                    alt={book.title}
                    sizes="100vw"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </figure>
      
                {/* Content */}
                <div className="card-body flex flex-col">
                  <h2 className="card-title line-clamp-1">
                    {book.title}
                  </h2>
      
                  <p className="text-sm text-gray-500 line-clamp-3">
                    {book.description}
                  </p>
      
                  <div className="mt-auto flex justify-end">
                    <Link href={`/viewdetails/${book.id}`} className="btn btn-primary">
                    <button className="btn btn-primary w-full transition-all duration-300 hover:scale-[1.03]">
                      View Details
                    </button></Link>
                  </div>
                </div>
              </div>
            ))}
      
          </div>
    </div>
  );
};

export default AllBookCard;