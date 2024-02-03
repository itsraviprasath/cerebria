import { Text } from "../ui/Text";

const Footer = () => {
  return (
    <>
      <section className="grid grid-cols-6 my-10">
        <div className="col-span-3 mr-32">
          <Text className="mb-5" variant="h5">
            <span className="text-primary">Cerebria</span>&apos;24
          </Text>
          <Text className="text-tertiaryLight" variant="body3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s.
          </Text>
        </div>
        <div className="col-span-1">
          <Text variant="sub1" color="text-primary">
            Social
          </Text>
          <ul>
            <li className="my-2">
              <Text variant="body3">Instagram</Text>
            </li>
            <li className="my-2">
              <Text variant="body3">Facebook</Text>
            </li>
            <li className="my-2">
              <Text variant="body3">X</Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text variant="sub1" color="text-primary">
            Organiser
          </Text>
          <ul>
            <li className="my-2">
              <Text variant="body3">Department of AIML - BITSathy</Text>
            </li>
            <li className="my-2">
              <Text variant="body3">
                In Association with Analytics Vidhya Society
              </Text>
            </li>

            <li className="my-2">
              <Text variant="body3">aimlevents@bitsathy.ac.in</Text>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
