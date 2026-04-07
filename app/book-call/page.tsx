import Image from "next/image";

export default function BookCallPage() {
  return (
    <main className="min-h-screen grid grid-cols-2  bg-black text-[#EDEDED] px-6 md:px-20 py-32  items-center">


        {/* LEFT */}
        <div className="col-span-1">

          {/* SUBTEXT */}
          <p className="text-[11px] tracking-[0.35em] text-gray-500 mb-6">
            SCHEDULE / CONNECT / COLLABORATE
          </p>

          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">

            <span className="text-white">BOOK A</span> <br />

            <span className="text-gray-400">CALL</span> <br />

            <span className="text-white">WITH ME</span>

          </h1>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-10">

            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition">
              📞 Book a Call
            </button>

            <button className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
              💬 Send a Message
            </button>

          </div>

        </div>

       {/* RIGHT IMAGE */}
        <div className="flex col-span-1 md:justify-end justify-center items-center h-full">

          <div className="relative">

            {/* GLOW */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-white/5 scale-110" />

            {/* IMAGE */}
            <div className="w-[280px] h-[280px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border border-white/10 relative z-10">

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


    </main>
  );
}