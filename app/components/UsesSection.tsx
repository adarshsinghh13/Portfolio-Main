type Props = {
  title: string;
  heading: string;
  description: string;
  image: string;
  device: string;
};

export default function UsesSection({
  title,
  heading,
  description,
  image,
  device,
}: Props) {
  return (
    <section className="px-6 md:px-20 py-20">

      <p className="text-sm text-white/40 mb-4">{title}</p>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-semibold mb-6">
            {heading}
          </h2>

          <p className="text-white/60 leading-relaxed">
            {description}
          </p>
        </div>

        {/* RIGHT */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <h3 className="text-3xl font-bold mb-4 text-orange-400">
            {device}
          </h3>

          <img
            src={image}
            className="rounded-2xl w-full object-cover"
          />

        </div>

      </div>

    </section>
  );
}