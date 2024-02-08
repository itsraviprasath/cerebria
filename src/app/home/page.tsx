import Timer from "@/app/home/(sections)/timer";
import Hero from "./(sections)/hero";
import CTA from "@/components/design/cta";
import Association from "./(sections)/association";
import CashPrice from "./(sections)/cash-price";
import Pricing from "./(sections)/pricing";

const HomePage = () => {
  return (
    <main className="mb-10">
      <Hero />

      <Timer />
      {/* <Association /> */}
      <CashPrice />
      <Pricing />
      <CTA />
    </main>
  );
};

export default HomePage;
