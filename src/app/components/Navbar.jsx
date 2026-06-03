'use client';
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";

const Navbar = () => {

  const { data, isPending } = useSession();
  if (isPending) {
    return <div>Loading...</div>;
  }
  console.log("Session data in Navbar:", data);
  const user =data?.user;

  return (
    <div className=" fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/allbook">All Books</Link></li>
        
      </ul>
    </div>
    <a className="text-xl font-bold">Book<span className="text-orange-500">Mart</span> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/allbook">All Books</Link></li>
      
    </ul>
  </div>
        <div className="navbar-end ">
          {user ? <div className="flex items-center gap-3">
    
    {/* Profile Link */}
    <Link href="/user" className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        {user.name?.charAt(0).toUpperCase()}
      </div>
      <p className="font-medium">Hi, {user.name}</p>
    </Link>

    {/* Signout */}
    
  </div>: <><Link href="/auth/signup" className="btn rounded-2xl btn-primary">
      SignUp
        </Link>
        </>}
    
  </div>
      </div>
     
   </div>
  );
};

export default Navbar;