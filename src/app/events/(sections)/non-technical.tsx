import EventCard from "@/components/design/event-card";
import { Text } from "@/components/ui/Text";

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
  );
};

export default NonTechnical;
