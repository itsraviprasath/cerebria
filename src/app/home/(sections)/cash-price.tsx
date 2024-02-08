"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Text } from "@/components/ui/Text";
import CountUp from "react-countup";

const CashPrice = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "0 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  });

  return (
    <section ref={triggerRef} className="text-center lg:w-4/5 mx-auto my-64">
      <div ref={sectionRef}>
        <Text variant="h1" className="text-xl lg:text-5xl">
          Register now to win from an exciting prize pool worth
        </Text>
      </div>
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
  );
};

export default CashPrice;
