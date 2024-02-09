import HeroSection from "@/components/design/hero-section";
import { Text } from "@/components/ui/Text";

const FAQs = () => {
  return (
    <section className="my-10">
      <HeroSection name="FAQs" />
      <div className="text-justify m-auto">
        <div className="my-16">
          <Text variant="h2" color="text-primary" className="my-5">
            1. What is Cerebria?
          </Text>
          <Text variant="body2" className="my-5">
            Cerebria is the largest technical symposium conducted by Bannari
            Amman Institute of Technology. The Students Union is ecstatic to
            spread the aura of knowledge and healthy competition through
            Cerebria by carrying out 7+ Events, 1 Workshops and 4 Technical
            Paper Presentations that encompasses an array of engineering
            streams, Cerebria brings together the savviest brains on the planet,
            from proficient scholars to dexterous techno-wizards, to who&apos;s
            who of the industrial domain, and also eminent leaders from
            different walks of life, to enrich and aggrandize the minds of
            participating students.
          </Text>
        </div>
        <div className="my-16">
          <Text variant="h2" color="text-primary" className="my-5">
            2. Who can participate in Cerebria?
          </Text>
          <Text variant="body2" className="my-5">
            The contest is open for all Undergraduate and Postgraduate students
            from AICTE approved Technical Higher Educational Institutions of
            India.
          </Text>
        </div>
        <div className="my-16">
          <Text variant="h2" color="text-primary" className="my-5">
            3. What kind of benefits of talking part in Cerebria?
          </Text>
          <Text variant="body2" className="my-5">
            Cerebria is a national level technical fest where participants get
            an opportunity to compete in various events with students from
            across the country and win attractive cash prizes. Cerebria is a
            also platform for participants to stay at the forefront of technical
            advancements through its industry-led workshops and technical paper
            presentations.
          </Text>
        </div>
        <div className="my-16">
          <Text variant="h2" color="text-primary" className="my-5">
            4. What is the fee to participate in Cerebria?
          </Text>
          <Text variant="body2" className="my-5">
            The general registration fee is Rs. 350 for students from other
            colleges for any two events which includes workshop also. If you are
            willing to participate in workshop you can pay Rs.250 .
          </Text>
        </div>
        <div className="my-16">
          <Text variant="h2" color="text-primary" className="my-5">
            5. Do we have to pay separately for attending workshops?
          </Text>
          <Text variant="body2" className="my-5">
            No, for Rs.350 we can attend workshop + One non-technical event
          </Text>
        </div>
        <div className="my-16">
          <Text variant="h2" color="text-primary" className="my-5">
            6. Will registration fees be refunded?
          </Text>
          <Text variant="body2" className="my-5">
            No , we follow a non refund policy at any cost
          </Text>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
