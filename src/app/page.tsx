import Hero from "@/components/ui/Hero";
import NewIn from "@/components/ui/NewIn";
import Collections from "@/components/ui/Collections";
import Lookbook from "@/components/ui/Lookbook";
import Reviews from "@/components/ui/Reviews";
import About from "@/components/ui/About";

export default function Home() {
  return (
    <>
      <Hero />
      <NewIn />
      <Collections />
      <Lookbook />
      <Reviews />
      <About />
    </>
  );
}