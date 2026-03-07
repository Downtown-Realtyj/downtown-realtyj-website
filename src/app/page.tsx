import Hero from "../components/Hero";
import Vision from "../components/Vision";
import InterestForm from "../components/InterestForm";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Hero />
      <Vision />
      <InterestForm />
    </main>
  );
}
