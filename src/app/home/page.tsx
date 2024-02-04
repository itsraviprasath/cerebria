import Timer from "@/app/home/(sections)/timer";
import Hero from "./(sections)/hero";
import CTA from "@/components/design/cta";
import Association from "./(sections)/association";
import CashPrice from "./(sections)/cash-price";

const HomePage = () => {
  return (
    <main className="mb-10">
      <Hero />

      <Timer />
      <Association />
      <CashPrice />
      <CTA />
    </main>
  );
};

export default HomePage;
