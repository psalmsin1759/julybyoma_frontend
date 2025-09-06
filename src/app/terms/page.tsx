"use client";

import BreadCrumb from "@/components/shared/BreadCrumb";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen pb-8">
      <BreadCrumb title="Privacy Policy" />
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Effective Date: 31-July 2024
      </p>

      <p className="mb-6">
        JulyByOma (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
        committed to protecting your privacy. This Privacy Policy outlines our
        practices regarding the collection, use, and disclosure of information
        that you provide to us through our website,
        <span className="italic"> [insert website URL]</span>, and any other
        services we offer (collectively, the &quot;Services&quot;).
      </p>

     
      <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
      <h3 className="font-medium mb-1">a. Personal Information</h3>
      <ul className="list-disc list-inside mb-4 text-muted-foreground">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Mailing address</li>
        <li>Payment information</li>
        <li>Measurements and preferences for bespoke clothing</li>
      </ul>

      <h3 className="font-medium mb-1">b. Usage Information</h3>
      <ul className="list-disc list-inside mb-6 text-muted-foreground">
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Pages visited</li>
        <li>Time and date of visit</li>
        <li>Referring website</li>
      </ul>

     
      <h2 className="text-xl font-semibold mb-3">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc list-inside mb-6 text-muted-foreground">
        <li>To process and fulfill your orders</li>
        <li>To provide and improve our Services</li>
        <li>
          To communicate with you, including responding to your inquiries and
          sending promotional materials
        </li>
        <li>To personalize your experience on our website</li>
        <li>To analyze website usage and improve our website</li>
        <li>To comply with legal obligations and protect our rights</li>
      </ul>

     
      <h2 className="text-xl font-semibold mb-3">
        3. Sharing Your Information
      </h2>
      <p className="mb-4">
        We do not sell, trade, or otherwise transfer your personal information
        to outside parties except as described below:
      </p>
      <ul className="list-disc list-inside mb-6 text-muted-foreground">
        <li>
          <strong>Service Providers:</strong> We may share your information with
          third-party service providers who assist us in operating our website,
          conducting our business, or providing services to you, as long as
          those parties agree to keep this information confidential.
        </li>
        <li>
          <strong>Legal Requirements:</strong> We may disclose your information
          when required by law or in response to legal process, such as a court
          order or subpoena.
        </li>
        <li>
          <strong>Business Transfers:</strong> In the event of a merger,
          acquisition, or sale of all or a portion of our assets, your
          information may be transferred as part of that transaction.
        </li>
      </ul>

     
      <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
      <p className="mb-6">
        We implement appropriate technical and organizational measures to
        protect your personal information from unauthorized access, alteration,
        disclosure, or destruction. However, no method of transmission over the
        internet or electronic storage is 100% secure.
      </p>

     
      <h2 className="text-xl font-semibold mb-3">5. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        privacy practices, please contact us at:
      </p>
      <div className="mt-4 space-y-1 text-muted-foreground">
        <p>
          <strong>JulyByOma</strong>
        </p>
        <p>Phone: 07035423252</p>
        <p>Address: 23 Adesina street, Ijeshatedo, Surulere</p>
      </div>
    </section>
  );
}
