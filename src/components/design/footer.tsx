import Link from "next/link";
import { Text } from "../ui/Text";

const Footer = () => {
  return (
    <>
      <section className="grid grid-cols-6 my-10">
        <div className="col-span-3 max-xl:col-span-6 max-sm:col-span-6 lg:mr-32 my-5 lg:my-0">
          <Text className="mb-5" variant="h5">
            <span className="text-primary">Cerebria</span>&apos;24
          </Text>
          <Text className="text-tertiaryLight" variant="body3">
            Cerebria is the largest technical symposium conducted by Bannari
            Amman Institute of Technology.
          </Text>
        </div>
        <div className="col-span-1 max-xl:col-span-6 max-sm:col-span-6 my-5 lg:my-0">
          <Text variant="sub1" color="text-primary">
            Social
          </Text>
          <ul>
            <li className="my-2">
              <Link href="https://www.instagram.com/cerebria_24">
                <Text variant="body3">Instagram</Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 max-xl:col-span-6 max-sm:col-span-6 my-5 lg:my-0">
          <Text variant="sub1" color="text-primary">
            Organiser
          </Text>
          <ul>
            <li className="my-2">
              <Text variant="body3">Department of AIML - BITSathy</Text>
            </li>
            <li className="my-2">
              <Link href="mailto:aimlevents@bitsathy.ac.in">
                <Text variant="body3">aimlevents@bitsathy.ac.in</Text>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <Text variant="body4" className="text-center my-5">
        © Bannari Amman Institute of Technology. Developed by{" "}
        <Link
          className="text-primary hover:text-tertiary font-bold"
          href="https://www.linkedin.com/in/akash-e-847418218/"
        >
          Akash
        </Link>{" "}
        &{" "}
        <Link
          className="text-primary hover:text-tertiary font-bold"
          href="https://www.linkedin.com/in/itsraviprasath/"
        >
          Raviprasath
        </Link>
      </Text>
    </>
  );
};

export default Footer;
