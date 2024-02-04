import EventCard from "@/components/design/event-card";
import { Text } from "@/components/ui/Text";

const Workshop = () => {
  return (
    <div className="my-20">
      <Text
        variant="h2"
        className="text-center my-24 border-b-4 w-fit m-auto pb-4 border-primary"
      >
        Workshop
      </Text>
      <div className="lg:grid grid-cols-3 place-items-center">
        <EventCard
          eventName="The Future of Coding: GitHub Copilot Unleashed"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the."
          key={0}
        />
      </div>
    </div>
  );
};

export default Workshop;
