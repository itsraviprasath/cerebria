import HeroSection from "@/components/design/hero-section";
import PersonCard from "@/components/design/person-card";
import Karthika from "@/../public/images/contact/KarthikaMam.jpg";
import Shamanth from "@/../public/images/contact/Shamanth.png";
import Dhanusri from "@/../public/images/contact/Dhanusri.jpg";
import Dhayanithi from "@/../public/images/contact/Dhayanithi.jpg";
import Samyuktha from "@/../public/images/contact/Samyuktha.jpg";
import { Text } from "@/components/ui/Text";

const ContactUs = () => {
  return (
    <section className="my-10">
      <HeroSection name="Contact Us" />
      {/* Organinzing Secretary */}
      <div className="my-20">
        <Text
          variant="h2"
          className="text-center my-24 border-b-4 w-fit m-auto pb-4 border-primary"
        >
          Organinzing Secretary
        </Text>
        <div className="lg:grid grid-cols-1 place-items-center">
          <PersonCard
            pic={Karthika}
            name="Prof. Karthika S"
            phone="8870248269"
            key={0}
          />
        </div>
      </div>
      {/* Student Co - ordinators */}
      <div className="my-20">
        <Text
          variant="h2"
          className="text-center my-24 border-b-4 w-fit m-auto pb-4 border-primary"
        >
          Student Co-ordinators
        </Text>
        <div className="lg:grid grid-cols-4 place-items-center">
          <PersonCard
            pic={Shamanth}
            name="Shamanth S"
            phone="7904705803"
            key={0}
          />
          <PersonCard
            pic={Dhanusri}
            name="Dhanushri N"
            phone="9025447874"
            key={0}
          />
          <PersonCard
            pic={Dhayanithi}
            name="Dhayanithi A"
            phone="7904468863"
            key={0}
          />
          <PersonCard
            pic={Samyuktha}
            name="Samyuktha S"
            phone="9047732508"
            key={0}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
