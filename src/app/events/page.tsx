import EventCard from "@/components/design/EventCard";
import HeroSection from "@/components/design/hero-section";
import { Text } from "@/components/ui/Text";

const Events = () => {
  return (
    <section className="my-10">
      <HeroSection name="Events" />
      {/* Technical Events */}
      <div className="my-20">
        <Text
          variant="h2"
          className="text-center my-24 border-b-4 w-fit m-auto pb-4 border-primary"
        >
          Technical Events
        </Text>
        <div className="grid grid-cols-3 place-items-center">
          <EventCard
            eventName="Paper Emporium"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the."
            key={0}
          />
          <EventCard
            eventName="Project Emporium"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the."
            key={1}
          />
          <EventCard
            eventName="Mini-Hackathon"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the."
            key={2}
          />
          <EventCard
            eventName="TechMind Teasers"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the."
            key={3}
          />
        </div>
        {/* Non-Technical Events */}
        <div className="my-20">
          <Text
            variant="h2"
            className="text-center my-24 border-b-4 w-fit m-auto pb-4 border-primary"
          >
            Non-Technical Events
          </Text>
          <div className="grid grid-cols-3 place-items-center">
            <EventCard
              eventName="Connection"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the."
              key={0}
            />
            <EventCard
              eventName="Lens into Life's Tapestry"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the."
              key={1}
            />
            <EventCard
              eventName="Breaking Boundaries"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the."
              key={2}
            />
          </div>
        </div>
        {/* Workshops */}
        <div className="my-20">
          <Text
            variant="h2"
            className="text-center my-24 border-b-4 w-fit m-auto pb-4 border-primary"
          >
            Workshop
          </Text>
          <div className="grid grid-cols-3 place-items-center">
            <EventCard
              eventName="The Future of Coding: GitHub Copilot Unleashed"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the."
              key={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
