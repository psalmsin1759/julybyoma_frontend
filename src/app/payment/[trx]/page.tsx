import BreadCrumb from '@/components/shared/BreadCrumb';
import React, { use } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  params: Promise<{ trx: string }>;
}

export default function PaymentPage({ params }: Props) {
  const { trx } = use(params);

  return (
    <div className="min-h-screen">
      <BreadCrumb title="Payment status" />

      <div className="flex justify-center items-center mt-6">
        <Card className="w-full max-w-lg p-8 shadow-lg border border-gray-200">
          <CardContent className="flex flex-col items-center gap-5 text-center">
            <div className="rounded-full bg-green-100 p-4">
              <Image
                src="/images/check.png"
                alt="success"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-800">Order Successful</h2>
            <h4 className="text-lg font-medium text-gray-600">
              Your order has been confirmed
            </h4>
            <p className="text-sm text-gray-500 max-w-md">
              We will send you a confirmation email shortly for this order.
              Your transaction reference is <span className="font-semibold">{trx}</span>.
            </p>

            <Link href="/" passHref>
              <Button className="mt-4 w-full md:w-auto">Continue Shopping</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
