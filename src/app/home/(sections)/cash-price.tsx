"use client";

import { useState } from "react";
import { Text } from "@/components/ui/Text";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const CashPrice = () => {
  const [inView, setInView] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setInView(true)}
      onExit={() => setInView(false)}
    >
      <section className="text-center lg:w-4/5 mx-auto my-64">
        <Text variant="h1" className="text-xl lg:text-5xl">
          Register now to win from an exciting prize pool worth
        </Text>
        <Text
          variant="h1"
          color="text-primary"
          className="text-7xl lg:text-9xl font-extrabold my-14"
        >
          ₹
          {inView ? (
            <CountUp start={9999} end={49999} duration={2} delay={0} />
          ) : (
            0
          )}
        </Text>
      </section>
    </ScrollTrigger>
  );
};

export default CashPrice;
