"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative bg-pink-50 py-10">
      <div ref={ref} className="relative max-w-5xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-36 md:gap-10">
            <div className="sticky top-32 z-40 w-40 flex-shrink-0 text-left">
              <div className="relative mb-4">
                <div className="absolute h-10 w-10 rounded-full bg-white flex items-center justify-center -left-4 top-1 shadow-md">
                  <div className="h-3 w-3 rounded-full bg-pink-400 border border-white" />
                </div>
                <h3 className="text-xl font-semibold text-pink-700 pl-8">
                  {item.title}
                </h3>
              </div>
            </div>
            <div className="pl-4 pr-4 w-full text-pink-900 bg-white bg-opacity-60 rounded-xl shadow-md p-4">
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute left-4 top-0 w-[2px] bg-pink-200"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute top-0 left-0 w-[2px] bg-gradient-to-t from-pink-500 via-fuchsia-400 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};