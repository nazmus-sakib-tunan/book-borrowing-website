
import Image from "next/image";
import Link from "next/link";


import BooksClient from "../components/BooksClient";



const AllBooksPage = async () => {

  const res = await fetch(
    "https://book-borrowing-server-w81l.onrender.com/books",
    { cache: "no-store" }
  );
  const bookData = await res.json();
  

  
  

  
  return (
    <BooksClient bookData={ bookData} />
  );
};

export default AllBooksPage;