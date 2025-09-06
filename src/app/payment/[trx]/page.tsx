import BreadCrumb from '@/components/shared/BreadCrumb';
import React, { use } from 'react'


interface Props {
    params: Promise<{ trx: string }>;
}

export default function PaymentPage({ params }: Props) {
    const { trx } = use(params);
    return (
        <div className=" min-h-screen">
            <BreadCrumb title="Payment status" />

        </div>
    )
}
