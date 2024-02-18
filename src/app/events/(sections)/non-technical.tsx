import EventCard from "@/components/design/event-card";
import { Text } from "@/components/ui/Text";
import connection from "@/../public/icons/connection.svg";
import lens from "@/../public/icons/lens.svg";
import broke from "@/../public/icons/broke.svg";

const NonTechnical = () => {
  return (
    <div className="my-20">
      <Text
        variant="h2"
        className="text-center my-24 border-b-4 w-fit m-auto pb-4 border-primary"
      >
        Non-Technical Events
      </Text>
      <div className="lg:grid grid-cols-3 place-items-center">
        <EventCard
          link="https://forms.gle/uvxBnoVhebxXQ1Jt8"
          eventName="Connection"
          description="Individual / Team will be allowed for this event."
          key={0}
          image={connection.src}
        />
        <EventCard
          link="https://forms.gle/uvxBnoVhebxXQ1Jt8"
          eventName="Lens into Life's Tapestry"
          description="Individual  will be allowed for this event (Photography)."
          key={1}
          image={lens.src}
        />
        <EventCard
          link="https://forms.gle/uvxBnoVhebxXQ1Jt8"
          eventName="Breaking Boundaries"
          description="Individual will be allowed for this event (Poster Presentation)."
          key={2}
          image={broke.src}
        />
      </div>
    </div>
  );
};

export default NonTechnical;
