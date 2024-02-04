import Link from "next/link";
import { Text } from "../ui/Text";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="text-center bg-white my-24 p-10 rounded-3xl lg:flex justify-between items-center">
      <Text variant="h2" color="text-secondary">
        For Any Queries Please Feel Free To Contact Us.
      </Text>
      <Link href="/contact-us">
        <Button
          className="mt-7 lg:my-0"
          variant="default"
          size="default"
          border="round"
        >
          Contact Us
        </Button>
      </Link>
    </section>
  );
};

export default CTA;
