import { motion } from "framer-motion";
import React from "react";
import { homeCards } from "@/constants/data";
import Image from "next/image";
import { CiPlay1 } from "react-icons/ci";

export default function HomeCard() {
  return (
    <section className="flex flex-col gap-2 section items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {homeCards.map((card, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-2xl shadow-lg group w-full h-[700px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {card.mediaType === "image" ? (
              <Image
                src={card.mediaUrl}
                alt={card.title}
                fill
                className="object-cover object-top w-full h-full"
              />
            ) : (
              <video
                src={card.mediaUrl}
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-full object-cover object-top"
              />
            )}

           
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              {card.mediaType === "video" && (
                <CiPlay1 className="w-12 h-12 text-white" />
              )}
            </div>

           
            <div className="absolute bg-black/40 rounded-2xl m-2 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <p className="text-sm text-gray-200">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
