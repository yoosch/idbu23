"use client";

import { cn } from "../lib/util";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    image?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-pink-100/70 rounded-3xl z-10 border border-pink-300"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <div className="relative z-20">
            <Card className="py-4 bg-pink-50 border border-pink-200 shadow-md rounded-3xl">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large text-pink-700 drop-shadow">
                  {item.title}
                </h4>
                <small className="text-pink-500 text-sm drop-shadow">
                  {item.description}
                </small>
              </CardHeader>
              <CardBody className="overflow-visible py-4 flex justify-center items-center">
                <Image
                  alt={item.title}
                  className="object-cover rounded-xl border-2 border-pink-200 shadow-sm"
                  src={`/foto/${item.image || "images.jpg"}`}
                  width={270}
                />
              </CardBody>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};
