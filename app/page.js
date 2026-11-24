

import Link from "next/link";

const features = [
  {
    title: "Amazing Camera",
    description:
      "Capture beautiful photos and videos with advanced iPhone camera technology.",
    icon: "📸",
  },
  {
    title: "Fast Performance",
    description:
      "Experience smooth performance with powerful Apple chips.",
    icon: "⚡",
  },
  {
    title: "Privacy & Security",
    description:
      "Keep your personal information safe with Apple's privacy features.",
    icon: "🔒",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-100 to-purple-100 px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>
            <p className="text-indigo-600 font-bold tracking-widest mb-6">
              DISCOVER IPHONE
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
              Experience the
              <span className="block text-indigo-600">
                Power of iPhone.
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mt-8 leading-relaxed">
              Discover the amazing world of iPhone. Explore its beautiful
              design, powerful performance, advanced camera, and innovative
              features.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/models"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700"
              >
                Explore Models
              </Link>

              <Link
                href="/about"
                className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-600 hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Side - Real iPhone Picture */}
          <div className="flex justify-center items-center">
            <img
              src="/images/iphone-home.jpg"
              alt="iPhone"
              className="w-full max-w-2xl h-[420px] object-contain"
            />
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose iPhone?
            </h2>

            <p className="text-gray-600 mt-4">
              Discover what makes iPhone special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition"
              >
                <div className="text-5xl mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-indigo-600 text-white text-center px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Find Your Perfect iPhone
        </h2>

        <p className="mt-4 text-indigo-100">
          Explore different iPhone models and discover your favorite.
        </p>

        <Link
          href="/models"
          className="inline-block mt-8 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100"
        >
          View All Models
        </Link>
      </section>

    </main>
  );
}

