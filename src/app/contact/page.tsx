"use client";
import BreadCrumb from "@/components/shared/BreadCrumb";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ContactFormInputs) => {
    console.log("Form Submitted:", data);
    reset();
    toast.success("Thank you for contacting us");
  };

  return (
    <div className="min-h-screen pb-8">
      <BreadCrumb title="Contact us" />

      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="grid md:col-span-2 gap-4">
            <h1 className="text-xl md:text-5xl font-extrabold">Get In Touch</h1>
            <span>
              We would love to hear from you! Whether you have questions, need
              support, or want to learn more about our services, our team is
              here to help.
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 rounded-full bg-primary-light/50 text-primary-light flex justify-center items-center">
              <FaLocationDot />
            </div>
            <h3 className="font-semibold">Our Address</h3>
            <span>23 Adesina Street, Ijeshatedo, Surulere</span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 rounded-full bg-primary-light/50 text-primary-light flex justify-center items-center">
              <FaPhoneAlt />
            </div>
            <h3 className="font-semibold">Contact Info</h3>
            <span>
              info@julybyoma.com <br />
              07035423252 <br />
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.9996849149323!2d3.348091774765046!3d6.500039723509021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dd2f35a7f47%3A0xd8b97f7e6e8321d0!2sIjeshatedo%2C%20Surulere%2C%20Lagos!5e0!3m2!1sen!2sng!4v1693999200000!5m2!1sen!2sng"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Your Name" />
                )}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Your Email" />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Subject" />
                )}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <Textarea {...field} placeholder="Your Message" rows={4} />
                )}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
