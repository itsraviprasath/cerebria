import EventCard from "@/components/design/event-card";
import HeroSection from "@/components/design/hero-section";
import { Text } from "@/components/ui/Text";
import Technical from "./(sections)/technical";
import NonTechnical from "./(sections)/non-technical";
import Workshop from "./(sections)/workshop";

const Events = () => {
  return (
    <section className="my-10">
      <HeroSection name="Events" />
      <Technical />
      <NonTechnical />
      <Workshop />
    </section>
  );
};

export default Events;
