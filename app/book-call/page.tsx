"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import BookingSection from "../components/BookingSection";
import BehindSection from "../components/BehindSection";
import HeroSection2 from "../components/HeroSection2";
import toast from "react-hot-toast";

export default function BookCallPage() {
  const [view, setView] = useState<"booking" | "contact">("booking");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_161k4x9",    
        "template_hrvolys",    
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "OhMld8HU8xVW6dsNA"  
      )
      .then(
        () => {
          toast.success("Message sent successfully ");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
         toast.error("Failed to send ❌");
        }
      );
  };

  return (
    <main className="min-h-screen bg-black text-[#EDEDED]">

      {/* HERO */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-20 py-32 items-center gap-16">

        {/* LEFT */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-6">
            SCHEDULE / CONNECT / COLLABORATE
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
            <span className="text-white">BOOK A</span> <br />
            <span className="text-gray-400">CALL</span> <br />
            <span className="text-white">WITH ME</span>
          </h1>

          <div className="flex justify-center md:justify-start gap-4 mt-16">

            <button
              onClick={() => {
                setView("booking");
                setTimeout(() => {
                  document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className={`px-6 py-3 rounded-xl transition ${
                view === "booking"
                  ? "bg-white text-black"
                  : "border border-white/20 hover:bg-white/10"
              }`}
            >
              📞 Book a Call
            </button>

            <button
              onClick={() => {
                setView("contact");
                setTimeout(() => {
                  document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className={`px-6 py-3 rounded-xl transition ${
                view === "contact"
                  ? "bg-white text-black"
                  : "border border-white/20 hover:bg-white/10"
              }`}
            >
              💬 Send a Message
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex md:justify-end justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-3xl bg-white/5 scale-110" />

            <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border border-white/10 relative z-10">
              <Image
                src="/img1.jpg"
                alt="profile"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CONDITIONAL SECTION */}
      {view === "booking" ? (
        <div id="booking-section">
          <BookingSection />
        </div>
      ) : (
        <section
          id="contact-section"
          className="min-h-[60vh] flex items-center justify-center px-4 md:px-10"
        >
          <div className="w-full max-w-md">

            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-center">
              Send me a message
            </h2>

            <p className="text-white/50 text-center mb-8">
              Have a question or want to work together? Drop me a message!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="text-sm text-white/60">Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-1.5 p-2.5 text-sm bg-white/5 border border-white/10 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-white/60">Email *</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="your@email.com"
                  className="w-full mt-2 p-3 bg-white/5 border border-white/10 rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-white/60">Message *</label>
                <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows={3}
  placeholder="What would you like to discuss?"
  className="w-full mt-1.5 p-2.5 text-sm bg-white/5 border border-white/10 rounded-lg outline-none resize-none"
/>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-white text-black rounded-lg text-sm hover:scale-[1.02] transition"
              >
                Send Message
              </button>

            </form>

          </div>
        </section>
      )}

      <BehindSection />
      <HeroSection2 />

    </main>
  );
}