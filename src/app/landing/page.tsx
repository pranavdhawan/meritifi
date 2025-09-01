import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { Dashboard } from "./sections/Dashboard";
import { Tutors } from "./sections/Tutors";
import { Magazine } from "./sections/Magazine";
import { Success } from "./sections/Success";
import { College } from "./sections/College";
import { Footer } from "./sections/Footer";

export default function Landing() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <hr className="w-full border-t border-gray-200 mt-12" />
      <HowItWorks />
      <Dashboard />
      <hr className="w-full border-t border-gray-200" />
      <Tutors />
      <hr className="w-full border-t border-gray-200" />
      <Magazine />
      <hr className="w-full border-t border-gray-200" />
      <hr className="w-full border-t border-gray-200" />
      <Success />
      <hr className="w-full border-t border-gray-200" />
      <College />
      <Footer />
    </main>
  );
}
