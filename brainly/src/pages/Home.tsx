import { Link } from "react-router-dom";
import  Brainstorming from "../assets/Brainstorming.svg"
import Organize from "../assets/Organize.svg"
import Starlink from "../assets/Starlink.svg"
import Focus from "../assets/Focus.svg"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 text-gray-800">
      {/* Hero Section */}
      <header className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-6 drop-shadow-md">
          Second Brain 🧠
        </h1>
        <img
          src={Brainstorming}
          alt="Brainstorming Illustration"
          className="mx-auto mb-6 w-48 md:w-64"
          loading="lazy"
        />
        <p className="text-lg text-gray-700 max-w-xl mx-auto leading-relaxed mb-8">
          Your personal link-saving vault. Store the links you need, organize
          them smartly, and never lose knowledge again.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <Link
            to="/signup"
            className="px-8 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition duration-300 transform hover:-translate-y-1"
          >
            Get Started
          </Link>
          <Link
            to="/signin"
            className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-xl shadow-md hover:bg-purple-50 transition duration-300 transform hover:-translate-y-1"
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white border-t border-purple-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12 drop-shadow-sm">
            Why Second Brain?
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <FeatureCard
              image={Organize}
              title="Organize Effortlessly"
              description="Save links with tags, categories, and notes so you can easily find them when needed."
            />
            <FeatureCard
              image={Starlink}
              title="Access Anytime"
              description="All your links are stored in the cloud and accessible on any device."
            />
            <FeatureCard
              image={Focus}
              title="Focus & Flow"
              description="Avoid distractions. Keep all your reference links in one minimal, focused space."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm mt-14 border-t border-purple-200">
        © {new Date().getFullYear()} Second Brain. Built for thinkers & doers.
      </footer>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 flex flex-col items-center text-center">
      <img
        src={image}
        alt={title}
        className="h-32 mb-6"
        loading="lazy"
        draggable={false}
      />
      <h3 className="text-2xl font-semibold text-purple-700 mb-3">{title}</h3>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </div>
  );
}
