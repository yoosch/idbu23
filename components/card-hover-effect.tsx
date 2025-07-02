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

      )}
    >
      {items.map((item, idx) => (
        <div
          
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] rounded-3xl z-10"
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
            <Card className="py-4 bg-gray-800">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">

                <h4 className="font-bold text-large text-white">
                  {item.title}
                </h4>
                <small className="text-default-500">{item.description}</small>
              </CardHeader>
              <CardBody className="overflow-visible py-2 flex justify-center    items-center">
                <Image
                  alt={item.title}
                  className="object-cover rounded-xl"
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
