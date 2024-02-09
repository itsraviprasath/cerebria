import { Text } from "@/components/ui/Text";
import BITLogo from "@/../public/images/home/bitlogo.png";
import heroImage from "@/../public/images/home/hero-image.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="lg:grid grid-cols-2 place-items-center">
        <div>
          <Image className="w-full" src={heroImage} alt="Hero Image" />
          <div className="flex items-center mt-10 space-x-5">
            <Image
              className="bg-white p-2 rounded-2xl"
              src={BITLogo}
              alt="BIT Logo"
              width={80}
              height={100}
            />
            <div>
              <Text variant="body1">
                Presented by{" "}
                <span className="text-primary font-bold">AIML</span>
              </Text>
              <Text variant="body3">Bannari Amman Institute of Technology</Text>
            </div>
          </div>
        </div>
        <div className="my-20">
          <div className="mb-10">
            <Text color="text-primary" variant="h4">
              March
            </Text>
            <Text variant="h3">
              07<sup>th</sup> & 08<sup>th</sup> 2024
            </Text>
          </div>

          <Text variant="h1">
            THE GLOBAL CLASH OF TECHNO
            <span className="border-b-4 border-primary"> TALENTS</span>
          </Text>

          <div className="lg:flex justify-start items-center mt-10 gap-20">
            <div className="my-20">
              <Text className="text-5xl" variant="h1">
                7+
              </Text>
              <Text variant="body3">Events</Text>
            </div>
            <div className="my-20">
              <Text className="text-5xl" variant="h1">
                6+
              </Text>
              <Text variant="body3">Paper Presentation</Text>
            </div>
            <div className="my-20">
              <Text className="text-5xl" variant="h1">
                1
              </Text>
              <Text variant="body3">Workshop</Text>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
