import Image from "next/image";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type EventCardProps = {
  link:string;
  eventName: string;
  description: string;
  image?: any;
};

const EventCard = (props: EventCardProps) => {
  return (
    <div className="bg-primary w-80 m-auto p-4 rounded-3xl flex flex-col justify-center items-center mb-20">
      <div>
        <Image src={props.image} alt={"image"} width={400} height={100} />
      </div>
      <div>
        <Text variant="h4" className="my-5 text-center">
          {props.eventName}
        </Text>
        <Text variant="body4" className="text-justify my-2">
          {props.description}
        </Text>
        <Link href={props.link}>
          <Button
            variant="ghost"
            border="round"
            block={true}
            size="lg"
            className="mt-4 !text-[#9615DB]"
          >
            Register Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
