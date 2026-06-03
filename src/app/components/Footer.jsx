import Link from "next/link";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";

 

const Footer = () => {
  return (
    <div>
       <footer className="bg-linear-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl">📚</span>
              <span className="text-xl font-bold ">Book<span className="text-orange-500">Mart</span> </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your digital library companion. Discover, borrow, and enjoy books from the comfort of your home.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="Facebook">
                <FaFacebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 transition-colors" aria-label="Twitter">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors" aria-label="Instagram">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-600 transition-colors" aria-label="GitHub">
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/all-books" className="text-sm hover:text-amber-400 transition-colors">All Books</Link>
              </li>
              <li>
                <Link href="/my-profile" className="text-sm hover:text-amber-400 transition-colors">My Profile</Link>
              </li>
              <li>
                <Link href="/login" className="text-sm hover:text-amber-400 transition-colors">Login</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/all-books?category=Story" className="text-sm hover:text-amber-400 transition-colors">📖 Story Books</Link>
              </li>
              <li>
                <Link href="/all-books?category=Tech" className="text-sm hover:text-amber-400 transition-colors">💻 Tech Books</Link>
              </li>
              <li>
                <Link href="/all-books?category=Science" className="text-sm hover:text-amber-400 transition-colors">🔬 Science Books</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <FaEnvelope className="text-amber-400 shrink-0" />
                <span>nstunan@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaPhone className="text-amber-400 shrink-0" />
                <span>+8801772597912</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <FaMapMarkerAlt className="text-amber-400 shrink-0 mt-0.5" />
                <span>123 Library Lane, Book town, BK 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} BookMart. All rights reserved. Made with  for book lovers.</p>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default Footer;