"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BreadCrumb from "@/components/shared/BreadCrumb";

const faqs = [
  {
    question: "What is Julybyoma?",
    answer:
      "Julybyoma is a fashion and lifestyle brand offering unique collections designed for elegance, comfort, and style.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can place an order directly on our website. Simply browse our catalog, add items to your cart, and proceed to checkout.",
  },
  {
    question: "Do you offer nationwide delivery?",
    answer:
      "Yes, we deliver across Nigeria. We also provide international shipping options on request.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept bank transfers, debit/credit cards, and other secure online payment options.",
  },
  {
    question: "Can I return or exchange my order?",
    answer:
      "Yes, we offer a hassle-free return and exchange policy within 7 days of delivery, provided the items are unused and in original packaging.",
  },
];

export default function Faqs() {
  return (
    <section className="min-h-screen pb-8">
      <BreadCrumb title="FAQs" />
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-lg font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
