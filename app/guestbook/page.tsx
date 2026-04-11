"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function GuestbookPage() {
  const { data: session } = useSession();

  // ✅ FIXED (removed typo cconst)
  const { data, mutate } = useSWR("/api/guestbook", fetcher);

  const [message, setMessage] = useState("");

  // ✅ SUBMIT FUNCTION
  const handleSubmit = async () => {
    if (!message) return;

    await fetch("/api/guestbook", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: session?.user?.name || "Anonymous",
    image: session?.user?.image || "",
    message,
  }),
});

    setMessage("");
    mutate(); // refresh UI
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      {/* 🔥 TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <p className="text-xs tracking-[0.3em] text-white/50 mb-4">
            LEAVE YOUR SIGNATURE
          </p>

          <h1 className="text-[80px] md:text-[140px] font-bold leading-none">
            GUEST
          </h1>

          <h2 className="text-[60px] md:text-[100px] font-serif italic text-white/60 -mt-6">
            book
          </h2>
        </div>

        {/* RIGHT CARD */}
        <div className="relative bg-[#0b0b0b] border border-white/10 rounded-[28px] px-8 py-8 w-[340px] h-[360px] ml-auto flex flex-col justify-between">

  {/* TOP */}
  <div className="space-y-3">
    <h3 className="text-[26px] leading-[32px] font-semibold">
      Leave your{" "}
      <span className="font-serif italic text-white/70">
        Signature!
      </span>
    </h3>

    <p className="text-white/50 text-[14px] leading-[22px] max-w-[260px]">
      Sign in to leave your mark, customize your profile, and connect with other visitors.
    </p>
  </div>

  {/* BUTTONS */}
  {!session ? (
    <div className="space-y-3">

      {/* GOOGLE */}
      <button
        onClick={() => signIn("google")}
        className="w-full h-[48px] rounded-full bg-[#e5e5e5] text-black flex items-center justify-center gap-3 text-[14px] font-medium hover:opacity-90 transition"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          className="w-4 h-4"
        />
        Google
      </button>

      {/* GITHUB */}
      <button
        onClick={() => signIn("github")}
        className="w-full h-[48px] rounded-full bg-[#1a1a1a] text-white flex items-center justify-center gap-3 text-[14px] font-medium hover:bg-[#222] transition"
      >
        <img
          src="https://www.svgrepo.com/show/512317/github-142.svg"
          className="w-4 h-4 invert"
        />
        GitHub
      </button>

      {/* TERMS */}
      <p className="text-[10px] text-white/30 text-center pt-2">
        By joining, you agree to our Terms of Service.
      </p>

    </div>
  ) : (
    <div className="space-y-3">

      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={session.user?.image || ""}
            className="w-8 h-8 rounded-full"
          />
          <p className="text-sm">{session.user?.name}</p>
        </div>

        <button
          onClick={() => signOut()}
          className="text-[10px] px-3 py-1 border border-white/20 rounded-full hover:bg-white/10 transition"
        >
          Logout
        </button>
      </div>

      {/* INPUT */}
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message..."
        className="w-full px-3 py-2 text-sm rounded bg-white text-black"
      />

      {/* SUBMIT */}
      <button
        onClick={handleSubmit}
        className="w-full bg-white text-black py-2 text-sm rounded"
      >
        Submit
      </button>

    </div>
  )}

</div>
      </div>

      {/* 🔥 SIGNATURES */}
      <div className="mt-24">

        <p className="text-center text-white/40 text-sm tracking-widest mb-10">
          RECENT SIGNATURES
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {data?.map((msg: any) => (
            <div
              key={msg._id}
              className="relative bg-[#0b0b0b] border border-white/10 rounded-2xl p-6"
            >
               {session?.user?.email === "adarshsinghh13@gmail.com" && (
      <button
        onClick={async () => {
          if (!confirm("Delete this message?")) return;

          await fetch("/api/guestbook", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: msg._id }),
          });

          mutate();
        }}
        className="absolute top-3 right-3 text-xs text-red-400 hover:text-red-600"
      >
        ✕
      </button>
    )}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={msg.image}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{msg.name}</p>
                  <p className="text-xs text-white/40">
                    {new Date(msg.createdAt).toDateString()}
                  </p>
                </div>
              </div>

              <p className="text-white/70 text-sm">
                “{msg.message}”
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}