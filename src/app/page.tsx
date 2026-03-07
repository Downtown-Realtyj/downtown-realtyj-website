import Hero from "../components/Hero";
import Vision from "../components/Vision";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Hero />
      <Vision />
    </main>
  );
}
