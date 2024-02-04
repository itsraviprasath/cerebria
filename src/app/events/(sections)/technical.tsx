import EventCard from "@/components/design/event-card";
import { Text } from "@/components/ui/Text";

const Technical = () => {
  return (
    <div className="my-20">
      <Text
        variant="h2"
        className="text-center my-24 border-b-4 w-fit m-auto pb-4 border-primary"
      >
        Technical Events
      </Text>
      <div className="lg:grid grid-cols-3 place-items-center">
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
    </div>
  );
};

export default Technical;
