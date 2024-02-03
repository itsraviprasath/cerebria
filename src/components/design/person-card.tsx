import Image from "next/image";
import Person from "@/../public/images/contact/person.jpg";
import { Text } from "../ui/Text";

type PersonCardProps = {
  name: string;
  phone: string;
};

const PersonCard = (props: PersonCardProps) => {
  return (
    <>
      <div className="mb-10">
        <div className="rounded-full bg-primary p-2 w-fit m-auto">
          <Image
            className="rounded-full"
            src={Person}
            alt=""
            width={150}
            height={100}
          />
        </div>
        <div className="text-center my-5">
          <Text variant="h4" color="text-primary" className="my-1">
            {props.name}
          </Text>
          <Text variant="body2">+91 {props.phone}</Text>
        </div>
      </div>
    </>
  );
};

export default PersonCard;
