import { FooterLink } from "@/constants/data";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  data: FooterLink[];
}

export default function FooterList({ title, data }: Props) {
  return (
    <div className="w-full flex flex-col gap-2">
      <h1 className="uppercase text-sm md:text-lg font-semibold">{title}</h1>
      <ul className="flex flex-col gap-2 text-sm ">
        {data.map((d: FooterLink, index: number) => (
          <li className="hover:underline" key={index}>
            <Link href={d.path}> {d.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
