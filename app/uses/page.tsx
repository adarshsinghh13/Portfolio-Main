import UsesSoftware from "../components/UsesSoftware";
import UsesIntegrations from "../components/UsesIntegrations";
import BehindSection from "../components/BehindSection";
import HeroSection2 from "../components/HeroSection2";
export default function UsesPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="px-6 md:px-20 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-6">
            SYSTEM INVENTORY
          </p>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            USES
          </h1>
        </div>

        <p className="text-white/60 max-w-md">
          A curated list of software and tools I use daily to design, build, and ship products.
        </p>

      </section>

      {/* SOFTWARE SECTION */}
      <UsesSoftware />
       <UsesIntegrations />
       <BehindSection />
       <HeroSection2 />
       
       

    </main>
  );
}