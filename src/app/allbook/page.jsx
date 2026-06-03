
import Image from "next/image";
import Link from "next/link";


import BooksClient from "../components/BooksClient";



const AllBooksPage = async () => {

  const res = await fetch('http://localhost:3000/book.json');
  const bookData = await res.json();
  

  
  

  
  return (
    <BooksClient bookData={ bookData} />
  );
};

export default AllBooksPage;