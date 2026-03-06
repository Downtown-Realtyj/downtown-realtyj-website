import Hero from "../components/Hero";
import FeaturedProperty from "../components/FeaturedProperty";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Hero />
      <FeaturedProperty />
    </main>
  );
}
