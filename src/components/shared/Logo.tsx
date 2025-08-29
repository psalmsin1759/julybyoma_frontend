import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  type: string;
}

export default function Logo({ type }: Props) {
  return (
    <Link href={"/"}>
      <div className="flex items-center">
        <Image
          src={
            type === "light" ? "/images/julybyoma.png" : "/images/julybyoma.png"
          }
          alt="logo"
          width={245}
          height={60}
          className="w-[140px] h-auto sm:w-[180px] md:w-[245px]"
        />
      </div>
    </Link>
  );
}
