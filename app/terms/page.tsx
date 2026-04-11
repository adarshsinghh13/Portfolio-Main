import {
  CircleX,
  Scale,
  ExternalLink,
  Info,
  User,
  Edit,
  Globe,
} from "lucide-react";
import HeroSection2 from "../components/HeroSection2";

export default function TermsPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20">

      {/* HERO */}
      <section className="pt-32 pb-32 text-center">
        <p className="text-xs tracking-[0.4em] text-white/40 mb-6">
          LEGAL AGREEMENT
        </p>

        <h1 className="text-[60px] md:text-[120px] font-extrabold tracking-tight leading-none">
          TERMS OF USE
        </h1>
      </section>

      {/* SECTION */}
      <section className="relative py-32 flex justify-center">

  {/* BIG BACKGROUND NUMBER */}
  <div className="absolute left-1/2 -translate-x-1/2 top-0 text-[260px] md:text-[320px] font-bold text-white/[0.06] select-none pointer-events-none">
    01
  </div>

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-2xl">

    {/* TITLE */}
    <div className="flex items-center gap-3 mb-4">
      <h2 className="text-3xl md:text-4xl font-semibold">
        General Provisions
      </h2>
      <Scale size={18} className="text-white/60" />
    </div>

    {/* INTRO */}
    <p className="text-white/40 mb-12 leading-relaxed">
      The foundation of our legally binding agreement. By accessing this site,
      you agree to these terms.
    </p>

    {/* ITEMS */}
    <div className="space-y-10">

      {/* ITEM */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Scale size={16} className="text-white/40" />
          <h3 className="text-lg font-medium">Binding Agreement</h3>
        </div>

        <p className="text-sm text-white/40 leading-relaxed">
          These Terms of Use ("Terms") constitute a legally binding contract between you ("User", "You") and Adarsh Singh ("Owner", "I", "Me"). By accessing, browsing
          you acknowledge that you have read, understood, and unconditionally agree to be bound by these Terms.
        </p>
      </div>

      {/* ITEM */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <User size={16} className="text-white/40" />
          <h3 className="text-lg font-medium">Legal Capacity</h3>
        </div>

        <p className="text-sm text-white/40 leading-relaxed">
          By using this website, you represent and warrant that you are at least 13 years of age and have the legal capacity to enter into binding agreements. 
          If you do not agree with any provision of these Terms, you must immediately cease all use of this website.
        </p>
      </div>

      {/* ITEM */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Edit size={16} className="text-white/40" />
          <h3 className="text-lg font-medium">Right to Modify</h3>
        </div>

        <p className="text-sm text-white/40 leading-relaxed">
         I reserve the exclusive right to modify, amend, or update these Terms at any time without prior notice. The "Last Updated" date at the bottom of this page indicates the
          most recent revision. Your continued use of the site following any changes constitutes acceptance of the modified Terms.
        </p>
      </div>

      {/* ITEM */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Globe size={16} className="text-white/40" />
          <h3 className="text-lg font-medium">Jurisdiction</h3>
        </div>

        <p className="text-sm text-white/40 leading-relaxed">
         These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms shall be subject to the exclusive 
         jurisdiction of the courts located in India.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="relative py-32 flex justify-center">

  {/* BIG BACKGROUND NUMBER */}
  <div className="absolute left-1/2 -translate-x-1/2 top-0 text-[260px] md:text-[320px] font-bold text-white/[0.06] select-none pointer-events-none">
    02
  </div>

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-2xl">

    {/* TITLE */}
    <div className="flex items-center gap-3 mb-4">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Intellectual Property Rights
      </h2>
      <span className="text-white/60 text-lg">©</span>
    </div>

    {/* INTRO */}
    <p className="text-white/40 mb-12 leading-[1.8] text-[15px]">
      All creative works, designs, code, and assets on this website are protected by copyright and intellectual property laws.
    </p>

    {/* ITEMS */}
    <div className="space-y-10">

      {/* ITEM */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-white/40 text-sm">♛</span>
          <h3 className="text-[17px] font-medium tracking-tight">
            Exclusive Ownership
          </h3>
        </div>

        <p className="text-[15px] text-white/40 leading-[1.8]">
          All content on this website including but not limited to source code, UI/UX designs, animations, 
          visual elements, graphics, SVGs, typography arrangements, color schemes, layout architecture, components, 
          and overall aesthetics are the exclusive intellectual property of Adarsh Singh, protected under international copyright laws.
        </p>
      </div>

      {/* ITEM */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-white/40 text-sm">🛡️</span>
          <h3 className="text-[17px] font-medium tracking-tight">
            Copyright Protection
          </h3>
        </div>

        <p className="text-[15px] text-white/40 leading-[1.8]">
          This work is protected under the Indian Copyright Act, 1957, the Digital Millennium Copyright Act (DMCA), 
          and applicable international copyright treaties. Unauthorized reproduction, distribution, or derivative works are strictly prohibited.
        </p>
      </div>

      {/* ITEM */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-white/40 text-sm">🚫</span>
          <h3 className="text-[17px] font-medium tracking-tight">
            Prohibited Actions
          </h3>
        </div>

        <p className="text-[15px] text-white/40 leading-[1.8]">
          You are expressly prohibited from copying, cloning, or reproducing any part of this website;
          creating derivative works; redistributing code or design elements; using assets for commercial
          purposes; reverse engineering; or claiming ownership of any content.
        </p>
      </div>

      {/* ITEM */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-white/40 text-sm">⚠️</span>
          <h3 className="text-[17px] font-medium tracking-tight">
            Design Theft Warning
          </h3>
        </div>

        <p className="text-[15px] text-white/40 leading-[1.8]">
          THIS IS NOT AN OPEN-SOURCE PROJECT. Any unauthorized use, reproduction, or distribution of this 
          
        website's designs, components, animations, or visual assets constitutes copyright infringement and 
        will be pursued with full legal action including DMCA takedown notices, cease and desist orders, and civil litigation.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="relative py-32 flex justify-center">

  {/* BIG BACKGROUND NUMBER */}
  <div className="absolute left-1/2 -translate-x-1/2 top-0 text-[260px] md:text-[320px] font-bold text-white/[0.06] select-none pointer-events-none">
    03
  </div>

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-2xl">

    {/* TITLE */}
    <div className="flex items-center gap-3 mb-4">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Copyright Enforcement
      </h2>
      <span className="text-white/60 text-lg">⚖️</span>
    </div>

    {/* INTRO */}
    <p className="text-white/40 mb-12 leading-[1.8] text-[15px]">
      Legal measures and remedies I will pursue against violators of intellectual property rights.
    </p>

    {/* ITEMS */}
    <div className="space-y-10">

      {/* ITEM */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-white/40 text-sm">📄</span>
          <h3 className="text-[17px] font-medium tracking-tight">
            DMCA Takedowns
          </h3>
        </div>

        <p className="text-[15px] text-white/40 leading-[1.8]">
         Any unauthorized reproduction of this website's content will be subject to immediate DMCA takedown notices filed with hosting providers,
          domain registrars, and search engines. Repeat offenders will be reported to the US Copyright Office.
        </p>
      </div>

      {/* ITEM */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-white/40 text-sm">⚖️</span>
          <h3 className="text-[17px] font-medium tracking-tight">
            Legal Action
          </h3>
        </div>

        <p className="text-[15px] text-white/40 leading-[1.8]">
         I reserve the right to pursue full legal remedies including injunctive relief, statutory damages (up to $150,000 per willful infringement under US law), actual 
         damages, lost profits, and attorney's fees against any party that infringes upon my intellectual property rights.
        </p>
      </div>

      {/* ITEM */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-white/40 text-sm">🏛️</span>
          <h3 className="text-[17px] font-medium tracking-tight">
            IT Act 2000 (India)
          </h3>
        </div>

        <p className="text-[15px] text-white/40 leading-[1.8]">
          Under the Information Technology Act, 2000 of India, unauthorized access, copying, or extraction of computer source code is a punishable offense under Sections 43 
          and 66, with penalties including imprisonment and fines up to ₹1 crore.
        </p>
      </div>

      {/* ITEM */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-white/40 text-sm">🗂️</span>
          <h3 className="text-[17px] font-medium tracking-tight">
            Evidence Collection
          </h3>
        </div>

        <p className="text-[15px] text-white/40 leading-[1.8]">
          All website access is logged. In cases of suspected infringement, screenshots, timestamps, IP addresses, and other digital evidence will be preserved and used in legal 
          proceedings. Archived versions of infringing content may be obtained from web archives as evidence.
        </p>
      </div>

    </div>

  </div>
</section>


<section className="relative py-32 flex justify-center">

  {/* BIG NUMBER */}
  <div className="absolute left-1/2 -translate-x-1/2 top-0 text-[260px] md:text-[320px] font-bold text-white/[0.06] select-none pointer-events-none">
    04
  </div>

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-2xl">

    {/* HEADER */}
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Limited License
        </h2>
        <span className="text-white/60">⚠️</span>
      </div>

      <p className="text-[15px] text-white/40 leading-[1.8] max-w-lg">
        Specific permissions granted for viewing and limited inspiration purposes only.
      </p>
    </div>

    {/* ITEMS */}
    <div className="space-y-14 mt-10">

      {/* ITEM 1 */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <CircleX className="w-[18px] h-[18px] text-white/40" />
          <h3 className="text-[18px] font-medium tracking-tight">
            No Warranties
          </h3>
        </div>

        <p className="text-[15px] text-white/40 leading-[1.9]">
          THIS WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND,
          EXPRESS OR IMPLIED. I disclaim all warranties including but not limited to
          merchantability, fitness for a particular purpose, non-infringement, accuracy,
          availability, and security.
        </p>
      </div>

      {/* ITEM 2 */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Scale className="w-[18px] h-[18px] text-white/40" />
          <h3 className="text-[18px] font-medium tracking-tight">
            Limitation of Liability
          </h3>
        </div>

        <p className="text-[15px] text-white/40 leading-[1.9] uppercase">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, I SHALL NOT BE LIABLE FOR ANY DIRECT,
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES INCLUDING
          LOSS OF DATA, PROFITS, OR GOODWILL ARISING FROM YOUR USE OF THIS WEBSITE.
        </p>
      </div>

      {/* ITEM 3 */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <ExternalLink className="w-[18px] h-[18px] text-white/40" />
          <h3 className="text-[18px] font-medium tracking-tight">
            External Links
          </h3>
        </div>

        <p className="text-[15px] text-white/40 leading-[1.9]">
          This site may contain links to third-party websites. I have no control over
          their content, privacy policies, or practices. You access external links at
          your own risk.
        </p>
      </div>

      {/* ITEM 4 */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Info className="w-[18px] h-[18px] text-white/40" />
          <h3 className="text-[18px] font-medium tracking-tight">
            No Professional Advice
          </h3>
        </div>

        <p className="text-[15px] text-white/40 leading-[1.9]">
          Nothing on this website constitutes professional advice (legal, financial,
          or otherwise). Any reliance on information is at your own risk. For
          professional matters, consult qualified experts.
        </p>
      </div>

    </div>

  </div>
</section>
<HeroSection2 />
    </main>
  );
}