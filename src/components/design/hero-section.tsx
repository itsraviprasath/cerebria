import { Text } from "../ui/Text";

type HeroSectionProps = {
  name: string;
};

const HeroSection = (props: HeroSectionProps) => {
  return (
    <>
      <section className="text-center mb-24 bg-white p-10 rounded-3xl">
        <Text variant="h1" color="text-secondary">
          Cerebria&apos;24 | <span className="text-primary">{props.name}</span>
        </Text>
      </section>
    </>
  );
};

export default HeroSection;
