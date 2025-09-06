"use client";

import BreadCrumb from "@/components/shared/BreadCrumb";
import React from "react";

export default function ReturnPolicy() {
  return (
   <section className="min-h-screen pb-8">
      <BreadCrumb title="Return Policy" />
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Return Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Effective Date: 31 July, 2024
      </p>

      <p className="mb-6">
        At <strong>JulyByOma</strong>, we are committed to ensuring your satisfaction 
        with our bespoke fashion items. If you are not completely satisfied with 
        your purchase, we offer the following return policy to make your return 
        process smooth and hassle-free.
      </p>

     
      <h2 className="text-xl font-semibold mb-3">1. Eligibility for Returns</h2>
      <h3 className="font-medium mb-1">a. Made-to-Order and Bespoke Items:</h3>
      <p className="mb-4 text-muted-foreground">
        Due to the customized nature of our made-to-order and bespoke items, we do not 
        accept returns for these products unless there is a defect in the material or 
        workmanship, or the item does not match the specifications provided at the 
        time of order. <br />
        If there is an issue with your bespoke order, please contact us within 
        <strong> 7 days</strong> of receiving the item to discuss possible solutions.
      </p>

      <h3 className="font-medium mb-1">b. Ready-to-Wear Items:</h3>
      <p className="mb-6 text-muted-foreground">
        Ready-to-wear items (e.g., pants, skirts) can be returned for a full refund 
        or exchange within <strong>14 days</strong> of receipt, provided they are 
        unworn, unwashed, and in their original condition with all tags attached. <br />
        To initiate a return for ready-to-wear items, please contact us within 14 days 
        of receiving your order.
      </p>

     
      <h2 className="text-xl font-semibold mb-3">2. Return Process</h2>
      <h3 className="font-medium mb-1">a. Contact Us:</h3>
      <p className="mb-4 text-muted-foreground">
        To start a return, please email us at <span className="italic">[insert contact email]</span> 
        with your order number, the item(s) you wish to return, and the reason for the return.
      </p>

      <h3 className="font-medium mb-1">b. Return Authorization:</h3>
      <p className="mb-4 text-muted-foreground">
        Once we receive your return request, we will review it and send you a return 
        authorization email with detailed instructions on how to return the item(s) to us.
      </p>

      <h3 className="font-medium mb-1">c. Shipping:</h3>
      <p className="mb-6 text-muted-foreground">
        Customers are responsible for return shipping costs unless the return is due to 
        a defect or error on our part. <br />
        We recommend using a trackable shipping method to return your items, as we are not 
        responsible for items lost or damaged in transit.
      </p>

     
      <h2 className="text-xl font-semibold mb-3">3. Refunds and Exchanges</h2>
      <h3 className="font-medium mb-1">a. Refunds:</h3>
      <p className="mb-4 text-muted-foreground">
        Once we receive and inspect your return, we will notify you via email. 
        If the return is approved, we will process your refund to the original 
        payment method within <strong>7–10 business days</strong>. <br />
        Original shipping charges are non-refundable unless the return is due to our 
        error or a defective item.
      </p>

      <h3 className="font-medium mb-1">b. Exchanges:</h3>
      <p className="mb-6 text-muted-foreground">
        If you wish to exchange an item, please indicate the desired item in your 
        return request. Exchanges are subject to availability.
      </p>

     
      <h2 className="text-xl font-semibold mb-3">4. Non-Returnable Items</h2>
      <p className="mb-4">The following items are not eligible for return or exchange:</p>
      <ul className="list-disc list-inside mb-6 text-muted-foreground">
        <li>Custom-made or bespoke items (unless defective or incorrect)</li>
        <li>Items purchased on sale or during special promotions</li>
        <li>Gift cards</li>
        <li>Items that have been worn, washed, or altered</li>
      </ul>

     
      <h2 className="text-xl font-semibold mb-3">5. Defective or Incorrect Items</h2>
      <p className="mb-6 text-muted-foreground">
        If you receive a defective or incorrect item, please contact us immediately at 
        <span className="italic"> [insert contact email]</span> with your order number and 
        a description of the issue. We will work with you to resolve the problem, 
        including providing a replacement or issuing a refund if necessary.
      </p>

     
      <h2 className="text-xl font-semibold mb-3">6. Contact Us</h2>
      <p>
        If you have any questions about our return policy or need assistance with a return, please contact us at:
      </p>
      <div className="mt-4 space-y-1 text-muted-foreground">
        <p><strong>JulyByOma</strong></p>
        <p>Phone: 07035423252</p>
      </div>

      <p className="mt-8">
        Thank you for shopping with <strong>JulyByOma</strong>. We value your business and 
        are dedicated to providing you with the highest quality bespoke fashion items and 
        excellent customer service.
      </p>
    </section>
  );
}
