

const models = [
  {
    name: "iPhone 16e",
    price: "Starting at $599",
    image: "/images/iphone-16e.jpg",
    description:
      "A powerful iPhone with a beautiful design and great performance.",
    features: ["A18 Chip", "48MP Camera", "USB-C"],
  },
  {
    name: "iPhone 16",
    price: "Starting at $799",
    image: "/images/iphone-16.jpg",
    description:
      "Enjoy amazing photos, smooth performance and a beautiful display.",
    features: ["A18 Chip", "Advanced Camera", "Dynamic Island"],
  },
  {
    name: "iPhone 16 Pro",
    price: "Starting at $999",
    image: "/images/iphone-16-pro.jpg",
    description:
      "A professional iPhone with advanced camera and powerful performance.",
    features: ["A18 Pro Chip", "Pro Camera System", "Titanium Design"],
  },
];

export default function Models() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-16">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Explore iPhone Models
        </h1>

        <p className="text-gray-600 mt-4">
          Find the iPhone that is perfect for you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {models.map((model, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
          >

            <img
              src={model.image}
              alt={model.name}
              className="w-full h-64 object-contain mb-6"
            />

            <h2 className="text-2xl font-bold text-gray-900">
              {model.name}
            </h2>

            <p className="text-blue-600 font-semibold mt-2">
              {model.price}
            </p>

            <p className="text-gray-600 mt-4">
              {model.description}
            </p>

            <ul className="mt-5 space-y-2">
              {model.features.map((feature, i) => (
                <li key={i} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>

    </main>
  );
}
