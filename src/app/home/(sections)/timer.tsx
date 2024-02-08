"use client";
import { Text } from "@/components/ui/Text";
import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

const Timer = () => {
  const countDownDate = new Date("March 7, 2024 09:00:00").getTime();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  }, 1000);

  return (
    <section className="lg:flex justify-center items-center">
      <div className="lg:w-3/5 py-8">
        <Text variant="h1" className="text-6xl my-8">
          Mark your
          <span className="text-primary">
            <br />
            Calender
          </span>
        </Text>
        <Text variant="body1">
          Join us at the forefront of technological advancements and gain
          valuable insights at our upcoming technical symposium Cerebria 2024 !
        </Text>
        <Link href="https://forms.gle/T7LtKSLdBvUfUVuV7">
          <Button
            className="my-8"
            variant="default"
            size="default"
            border="round"
          >
            Register Now
          </Button>
        </Link>
      </div>
      <div className="lg:w-2/5 grid grid-cols-2 lg:px-16 py-8 gap-10">
        <div>
          <Text variant="h1" className="text-9xl">
            {days}
          </Text>
          <Text variant="h6" color="text-primary">
            Days
          </Text>
        </div>
        <div>
          <Text variant="h1" className="text-9xl">
            {hours}
          </Text>
          <Text variant="h6" color="text-primary">
            Hours
          </Text>
        </div>
        <div>
          <Text variant="h1" className="text-9xl">
            {minutes}
          </Text>
          <Text variant="h6" color="text-primary">
            Minutes
          </Text>
        </div>
        <div>
          <Text variant="h1" className="text-9xl">
            {seconds}
          </Text>
          <Text variant="h6" color="text-primary">
            Seconds
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Timer;
