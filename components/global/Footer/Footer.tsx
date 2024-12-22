import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-turquoise-blue-950 text-white py-16 px-8">
      {/* Get your insurance button */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-8">
        <Link href="/get-insurance" className="bg-salmon-600 text-white px-8 py-4 rounded-full text-xl font-semibold flex items-center">
          Get your insurance
          <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* GPF Services LLC */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">GPF Services LLC</h2>
            <p className="mb-4">The time to repair the roof is when the sun is shining.</p>
            <p className="text-sm">John F. Kennedy</p>
          </div>

          {/* Website */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Website</h2>
            <ul>
              {['Pagina1', 'Pagina2', 'Pagina3', 'Pagina4', 'Pagina5'].map((page, index) => (
                <li key={index} className="mb-2">
                  <Link href={`/${page.toLowerCase()}`} className="hover:underline">
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Social Media</h2>
            <ul>
              <li className="mb-2">
                <Link href="https://facebook.com" className="flex items-center hover:underline">
                  <Facebook className="w-6 h-6 mr-2" />
                  Facebook
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://instagram.com" className="flex items-center hover:underline">
                  <Instagram className="w-6 h-6 mr-2" />
                  Instagram
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://x.com" className="flex items-center hover:underline">
                  <Twitter className="w-6 h-6 mr-2" />
                  X.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-granny-smith-900 text-center">
          <p>&copy; 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;