"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BooksClient = ({ bookData }) => {
  const [search, setSearch] = useState("");

  const filteredBooks = bookData.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-25">
    
      <div className="p-6">
        <input
          type="text"
          placeholder="Search by book title..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-5">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden h-full group"
          >
            <figure className="relative w-full h-56 overflow-hidden">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </figure>

            <div className="card-body flex flex-col">
              <h2 className="card-title line-clamp-1">{book.title}</h2>

              <p className="text-sm text-gray-500 line-clamp-3">
                {book.description}
              </p>

              <div className="mt-auto flex justify-end">
                <Link
                  className="btn btn-primary w-full transition-all duration-300 hover:scale-[1.03]"
                  href={`/books/${book.id}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksClient;