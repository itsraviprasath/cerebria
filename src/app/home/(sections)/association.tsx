import Image from "next/image";
import BITLogo from "@/../public/images/home/bitlogo.png";
import AVLogo from "@/../public/images/home/analytics-vidhya.svg";
import { Text } from "@/components/ui/Text";

const Association = () => {
  return (
    <section className="my-32">
      <Text
        variant="h2"
        className="text-center my-24 border-b-4 w-fit m-auto pb-4 border-primary"
      >
        In Association With
      </Text>

      <div className="lg:flex items-center justify-center lg:space-x-32">
        <Image
          className="bg-white rounded-3xl p-10 h-80"
          src={BITLogo}
          alt=""
          width={400}
          height={100}
        />
        <Text
          className="font-extrabold text-9xl text-center my-10"
          variant="h1"
          color="text-primary"
        >
          X
        </Text>
        <Image
          className="bg-white rounded-3xl p-10"
          src={AVLogo}
          alt=""
          width={400}
          height={100}
        />
      </div>
    </section>
  );
};

export default Association;
