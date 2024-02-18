import EventCard from "@/components/design/event-card";
import { Text } from "@/components/ui/Text";
import github from "@/../public/icons/github.svg";

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
          link="https://forms.gle/pM6GtvQ955MuLPPN7"
          eventName="The Future of Coding: GitHub Copilot Unleashed"
          description="Workshop entitled on “The Future of Coding: GitHub Copilot Unleashed”"
          key={0}
          image={github.src}
        />
      </div>
    </div>
  );
};

export default Workshop;
