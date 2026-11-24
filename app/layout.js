

import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "iPhone Guide",
  description: "Discover the amazing world of iPhone.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        {/* Navigation Bar */}
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

            {/* Website Logo and Name */}
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/iphone-logo.jpg"
                alt="iPhone Logo"
                className="w-10 h-10 object-contain"
              />

              <span className="text-3xl font-extrabold text-indigo-600">
                iPhone Guide
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex gap-8 items-center">
              <Link
                href="/"
                className="font-semibold text-gray-700 hover:text-indigo-600"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="font-semibold text-gray-700 hover:text-indigo-600"
              >
                About
              </Link>

              <Link
                href="/models"
                className="font-semibold text-gray-700 hover:text-indigo-600"
              >
                Models
              </Link>
            </div>

          </nav>
        </header>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6">
          <p>© 2026 iPhone Guide. All rights reserved.</p>
        </footer>

      </body>
    </html>
  );
}

