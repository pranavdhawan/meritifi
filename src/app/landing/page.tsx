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
      <HowItWorks />
      <Dashboard />
      <Tutors />
      <Magazine />
      <Success />
      <College />
      <Footer />
    </main>
  );
}
