// app/components/layout/Header.tsx
import Link from "next/link";
import React from "react";
import { Search, Home, Building, Trees, Mountain } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header: Logo, Search, Auth */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-red-600">
              ALX-Listing
            </Link>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden sm:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gray-100">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700">
              Sign Up
            </button>
          </div>
        </div>

        {/* Bottom Header: Accommodation Types */}
        <nav className="flex items-center justify-center space-x-4 sm:space-x-8 h-12 overflow-x-auto whitespace-nowrap">
          <Link
            href="#"
            className="flex flex-col items-center text-sm font-medium text-gray-600 hover:text-red-600"
          >
            <Home className="h-5 w-5 mb-1" />
            Rooms
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center text-sm font-medium text-gray-600 hover:text-red-600"
          >
            <Building className="h-5 w-5 mb-1" />
            Mansion
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center text-sm font-medium text-gray-600 hover:text-red-600"
          >
            <Trees className="h-5 w-5 mb-1" />
            Countryside
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center text-sm font-medium text-gray-600 hover:text-red-600"
          >
            <Mountain className="h-5 w-5 mb-1" />
            Cabins
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;