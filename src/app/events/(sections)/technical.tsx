import EventCard from "@/components/design/event-card";
import { Text } from "@/components/ui/Text";
import paper from "@/../public/icons/paper.svg";
import project from "@/../public/icons/project.svg";
import hackathon from "@/../public/icons/hackathon.svg";
import solve from "@/../public/icons/solve.svg";

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
          link="https://forms.gle/DhqPcv1AhijXyMna6"
          eventName="Paper Emporium"
          description="Individual/Team members can be allowed to present. Best Three Paper ideas will be awarded with cash prizes."
          key={0}
          image={paper.src}
        />
        <EventCard
          link="https://forms.gle/DhqPcv1AhijXyMna6"
          eventName="Project Emporium"
          description="Individual/Team members can be allowed to present. Best Three Project ideas will be awarded with cash prizes."
          key={1}
          image={project.src}
        />
        <EventCard
          link="https://forms.gle/opKav9z5gBo9oZ1AA"
          eventName="Mini-Hackathon"
          description="Individual/Team of four members are allowed to participate. Teams will be awarded with cash prizes."
          key={2}
          image={hackathon.src}
        />
        <EventCard
          link="https://forms.gle/DhqPcv1AhijXyMna6"
          eventName="TechMind Teasers"
          description="Individual Participants will be allowed for this event. Best TechMind Participants will be awarded with cash prizes."
          key={3}
          image={solve.src}
        />
      </div>
    </div>
  );
};

export default Technical;
