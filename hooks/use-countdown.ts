"use client";

import { useEffect, useMemo, useState } from "react";

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

export function useCountdown(targetDate: string) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [distance, setDistance] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDistance(Math.max(target - Date.now(), 0));

    const interval = window.setInterval(() => {
      setDistance(Math.max(target - Date.now(), 0));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [target]);

  return {
    days: Math.floor(distance / day),
    hours: Math.floor((distance % day) / hour),
    minutes: Math.floor((distance % hour) / minute),
    seconds: Math.floor((distance % minute) / second),
    finished: mounted && distance === 0,
    mounted
  };
}
