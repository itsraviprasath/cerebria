import Image from "next/image";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/button";
import img from "#/home/rectangle.png";

const card = () => {
  return (
    <div className="bg-[#9615DB] w-80 p-4 rounded-3xl flex flex-col justify-center items-center">
      <div className="shadow-2xl">
        <Image src={img} alt={"image"} width={300} />
      </div>
      <div className="shadow-lg">
        <Text variant="h3" className="mt-4">
          Paper Presentation
        </Text>
        <Text variant="body3" className="text-wrap mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In officiis
          inventore id consectetur laboriosam nemo.
        </Text>
        <Button variant="default" border="round" block={true} className="mt-4">
          Register Now
        </Button>
      </div>
    </div>
  );
};

export default card;
