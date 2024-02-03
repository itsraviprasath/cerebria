"use client";
import { Text } from "@/components/ui/Text";
import React, { useEffect, useState } from "react";

const time = () => {
  const countDownDate = new Date("March 7, 2024 00:00:00").getTime();

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

  console.log(days);

  return (
    <div className="flex justify-center items-center">
      <div className="w-3/5 px-16 py-8">
        <Text variant="h1" className="text-6xl my-8">
          Mark your <span className="text-primary">Calender</span>
        </Text>
        <Text variant="body1">
          Join us at the forefront of technological advancements and gain
          valuable insights at our upcoming technical symposium Kriya 2024 !
        </Text>
      </div>
      <div className="w-2/5 grid grid-cols-2 px-16 py-8 gap-8">
        <div>
          <Text variant="h1" className="text-6xl">
            {days}
          </Text>
          <Text variant="h6" color="text-primary">
            Days
          </Text>
        </div>
        <div>
          <Text variant="h1" className="text-6xl">
            {hours}
          </Text>
          <Text variant="h6" color="text-primary">
            Hours
          </Text>
        </div>
        <div>
          <Text variant="h1" className="text-6xl">
            {minutes}
          </Text>
          <Text variant="h6" color="text-primary">
            Minutes
          </Text>
        </div>
        <div>
          <Text variant="h1" className="text-6xl">
            {seconds}
          </Text>
          <Text variant="h6" color="text-primary">
            Seconds
          </Text>
        </div>
      </div>
    </div>
  );
};

export default time;
