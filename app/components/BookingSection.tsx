"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookingSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();

      cal("ui", {
        theme: "dark",
        styles: {
          branding: {
            brandColor: "#000000",
          },
        },
      });
    })();
  }, []);

  return (
    
    <section 
     id="booking"
     className="pt-12 pb-24 px-6 md:px-20 flex flex-col items-center">
         

      {/* TOP BUTTONS (like parthh.in) */}
      <div className="flex gap-4 mb-12">


  
      </div>

      {/* BOOKING CARD */}
      <div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.03)]">

        <Cal
          calLink="adarshsinghh13/30min" 
          style={{ width: "100%", height: "456px" }}
          config={{
            layout: "month_view",
          }}
        />

      </div>

    </section>
  );
}