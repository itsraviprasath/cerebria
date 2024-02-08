import { Text } from "@/components/ui/Text";
import Image from "next/image";

const Pricing = () => {
  return (
    <section className="my-32">
      <Text
        variant="h2"
        className="text-center my-24 border-b-4 w-fit m-auto pb-4 border-primary"
      >
        Registration Fee
      </Text>
      <div className="text-center lg:grid grid-cols-3 place-content-center">
        <Text
          className="border p-10 rounded-3xl my-5 mx-3 hover:bg-primary"
          variant="body2"
        >
          <span className="font-bold">
            Technical 1 + Non-Technical /Workshop 1 = ₹350
          </span>{" "}
          <br /> (with Food & Refreshment)
        </Text>
        <Text
          className="border p-10 rounded-3xl my-5 mx-3 hover:bg-primary"
          variant="body2"
        >
          <span className="font-bold">Technical 1 + Technical 1 = ₹350 </span>
          <br /> (with Food & Refreshment)
        </Text>
        <Text
          className="border p-10 rounded-3xl my-5 mx-3 hover:bg-primary"
          variant="body2"
        >
          <span className="font-bold">
            Technical 1 + Non-Technical 1 + workshop 1 = ₹350 + ₹200{" "}
          </span>
          <br /> (with Food & Refreshment)
        </Text>
      </div>
      <div className="text-center lg:grid grid-cols-2">
        <Text
          className="border p-10 rounded-3xl my-5 mx-3 hover:bg-primary"
          variant="body2"
        >
          <span className="font-bold">Workshop = ₹250 </span>(with Food &
          Refreshment)
        </Text>
        <Text
          className="border p-10 rounded-3xl my-5 mx-3 hover:bg-primary"
          variant="body2"
        >
          <span className="font-bold">Mini-Hackathon = ₹500/Per Team</span>(Team
          Size: Maximum 4)
        </Text>
      </div>
    </section>
  );
};

export default Pricing;
