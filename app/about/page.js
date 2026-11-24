
const facts = [
  {
    title: "2007",
    description: "The first iPhone was introduced."
  },
  {
    title: "iOS",
    description: "Apple's mobile operating system."
  },
  {
    title: "App Store",
    description: "Discover and download applications."
  },
  {
    title: "Apple Silicon",
    description: "Powerful chips designed by Apple."
  },
];

const benefits = [
  {
    title: "Easy to Use",
    description: "iPhone offers a simple and user-friendly interface."
  },
  {
    title: "Beautiful Design",
    description: "Modern design with quality materials and displays."
  },
  {
    title: "Great Performance",
    description: "Powerful processors provide smooth performance."
  },
];

export default function About() {
  return (
    <main>

      {/* About Hero */}

      <section className="bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-20 text-center">

        <p className="font-bold uppercase tracking-widest text-indigo-600">
          About iPhone
        </p>

        <h1 className="mx-auto mt-5 max-w-3xl text-5xl font-extrabold text-slate-900">
          Discover the World of iPhone
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          iPhone is a smartphone developed by Apple.
          It combines innovative technology, elegant design,
          and useful features in one device.
        </p>

      </section>

      {/* Our Story */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

          <div>
            <p className="font-bold uppercase tracking-widest text-indigo-600">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
              A Revolution in Smartphones
            </h2>
          </div>

          <div>
            <p className="leading-8 text-slate-600">
              Apple introduced the first iPhone in 2007.
              It changed the way people communicate, browse
              the internet, take pictures, and use mobile
              applications.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Over the years, iPhone has improved with
              advanced cameras, powerful processors,
              better displays, and new software features.
            </p>
          </div>

        </div>

      </section>

      {/* Facts Section */}

      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-extrabold text-slate-900">
            Interesting Facts
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">

            {facts.map((fact) => (
              <div
                key={fact.title}
                className="rounded-2xl bg-white p-7 text-center shadow-md"
              >
                <h3 className="text-2xl font-extrabold text-indigo-600">
                  {fact.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {fact.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Benefits Section */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-extrabold text-slate-900">
            Why People Love iPhone
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-200 p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-indigo-600">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
