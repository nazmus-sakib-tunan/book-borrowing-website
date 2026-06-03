import React from 'react';

const booksDetailsPage = async ({ params }) =>
{

  const {id }= await  params;
  const res = await (fetch('http://localhost:3000/book.json'));
  const bookData = await res.json();
  const book = bookData.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }
  return (
    <div className='w-full min-h-screen mt-15 flex flex-col items-center justify-center gap-5'>
      <h2>{book.author}</h2>
      <h1>{book.title}</h1>
     
    </div>
  );
};

export default booksDetailsPage;