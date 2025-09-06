import Link from "next/link";
import React from "react";
import { FaLock, FaUndo, FaGlobe, FaComments } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import FooterList from "./FooterList";
import { productFooterLinks, legalFooterLinks, companyFooterLinks, socialsFooterLinks } from "@/constants/data";
export type Feature = {
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
};

export const features: Feature[] = [
  {
    title: "Secure Checkout",
    description:
      "Your info stays safe with us. All payments are encrypted and protected.",
    icon: <FaLock />,
  },
  {
    title: "Easy Returns",
    description:
      "Changed your mind? No worries — you have 30 days to send it back, stress-free.",
    icon: <FaUndo />,
  },
  {
    title: "Worldwide Delivery",
    description:
      "From our shop to your doorstep. Fast, reliable shipping wherever you are.",
    icon: <FaGlobe />,
  },
  {
    title: "Here to Help",
    description:
      "Need something? Our support team’s just a message away — always happy to chat.",
    icon: <FaComments />,
  },
];

export default function Footer() {
  return (
    <section className="w-full flex flex-col gap-4  border-t md:gap-8 section  items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {features.map((feature: Feature, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="bg-primary-light rounded-full p-3  w-9 h-9 md:w-12 md:h-12 text-white flex items-center justify-center ">
              {feature.icon}
            </div>
            <h1 className="text-md md:text-lg font-semibold">{feature.title}</h1>
            <span className="text-gray-500 text-sm md:text-md">{feature.description}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full rounded-2xl bg-primary-light p-12">
        <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-24">
          <div className="flex flex-col gap-2 col-span-2">
            <h1 className="text-lg font-semibold">
              Stay in the loop — subscribe today
            </h1>
            <div className="relative w-full h-11">
              <div className="w-full h-full">
                <input
                  className="w-full h-full bg-white rounded-4xl px-4 py-2 shadow"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="absolute right-2 top-1 bg-black text-white rounded-full w-9 h-9 flex items-center justify-center">
                <IoMdArrowForward />
              </div>
            </div>
            <span className="text-[12px] ">
              Join our mailing list to get style inspo, exclusive offers, and
              cozy vibes straight to your inbox. Don’t worry — we’ll only send
              thoughtful updates and keep your details safe.
            </span>
          </div>
          <div className=" col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            <FooterList title="Products" data={productFooterLinks} />
            <FooterList title="Company" data={companyFooterLinks} />
            <FooterList title="Find us on" data={socialsFooterLinks} />
            <FooterList title="Legal" data={legalFooterLinks} />
          </div>
        </div>
        <div className="w-full flex justify-center items-center p-8">
          <span className="text-primary/40 text-[50px] md:text-[200px] font-bold">
            JulyByOma
          </span>
        </div>
      </div>

      <div className="w-full flex justify-between">
        <span className="text-[10px] md:text-lg">
          © JulyByOma, {new Date().getFullYear()}. All rights reserved
        </span>
        <Link
          className="hover:underline text-[10px] md:text-lg"
          target="_blank"
          href={"https://qnetixtechnologies.com"}
        >
          QNetix Technologies
        </Link>
      </div>
    </section>
  );
}
