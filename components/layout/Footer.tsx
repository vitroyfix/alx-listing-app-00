// components/layout/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Safety Information
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Cancellation Options
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Community
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  ALX-Listing: A New Way
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Community Forum
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              About
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Investors
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ALX-Listing, Inc. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
