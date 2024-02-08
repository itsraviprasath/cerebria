"use client";

import { Text } from "@/components/ui/Text";

const CashPrice = () => {
  return (
    <section className="text-center lg:w-4/5 mx-auto my-64">
      <div>
        <Text variant="h1" className="text-xl lg:text-5xl">
          Register now to win from an exciting prize pool worth
        </Text>
      </div>
      <Text
        variant="h1"
        color="text-primary"
        className="text-7xl lg:text-9xl font-extrabold my-14"
      >
        ₹49,999
      </Text>
    </section>
  );
};

export default CashPrice;
