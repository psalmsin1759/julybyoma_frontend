import BreadCrumb from "@/components/shared/BreadCrumb";
import React, { use } from "react";

interface Props {
  params: Promise<{ title: string }>;
}

export default function CategoryPage({ params }: Props) {
  const { title } = use(params);

  return (
    <div className=" min-h-screen">
      <BreadCrumb title="Category" subtitle={title} />
    </div>
  );
}
