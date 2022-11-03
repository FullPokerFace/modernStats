import React, { FC, useEffect, useState } from "react";

interface Props {
  from: number;
  to: number;
  step?: number;
}

export const AnimatedCounter: FC<Props> = (props: Props) => {
  const { from, to, step } = props || {};
  const [count, setCount] = useState(from || 0);

  useEffect(() => {
    if (count >= to) return;
    const timeout = setTimeout(() => {
      const newCount = count + (step || Math.round(Number(to / 30)));
      if (newCount > to) {
        setCount(to);
      } else {
        setCount(newCount);
      }
      return () => {
        clearTimeout(timeout);
      };
    }, 16);
  }, [to, count, step]);
  return <span>{count}</span>;
};
