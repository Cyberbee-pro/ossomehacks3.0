import Image from "next/image";

const sponsors = [
  {
    tier: "Platinum",
    items: [
      {
        logo: "/sponsors/platinum.svg",
        url: "https://www.cdprojektred.com",
      },
      {
        logo: "/sponsors/platinum.svg",
        url: "https://www.cdprojektred.com",
      },
      {
        logo: "/sponsors/platinum.svg",
        url: "https://www.cdprojektred.com",
      },
      {
        logo: "/sponsors/platinum.svg",
        url: "https://www.cdprojektred.com",
      },
    ],
  },
  {
    tier: "Gold",
    items: [
      {
        logo: "/sponsors/gold.svg",
        url: "https://www.linuxfoundation.org",
      },
      {
        logo: "/sponsors/gold.svg",
        url: "https://www.linuxfoundation.org",
      },
      {
        logo: "/sponsors/gold.svg",
        url: "https://www.linuxfoundation.org",
      },
      {
        logo: "/sponsors/gold.svg",
        url: "https://www.linuxfoundation.org",
      },
    ],
  },
  {
    tier: "Silver",
    items: [
      {
        logo: "/sponsors/silver.svg",
        url: "https://gen.xyz",
      },
      {
        logo: "/sponsors/silver.svg",
        url: "https://gen.xyz",
      },
      {
        logo: "/sponsors/silver.svg",
        url: "https://gen.xyz",
      },
      {
        logo: "/sponsors/silver.svg",
        url: "https://gen.xyz",
      },
    ],
  },
  {
    tier: "Bronze",
    items: [
      {
        logo: "/sponsors/bronze.svg",
        url: "https://www.socialwinterofcode.com/",
      },
      {
        logo: "/sponsors/bronze.svg",
        url: "https://www.socialwinterofcode.com/",
      },
      {
        logo: "/sponsors/bronze.svg",
        url: "https://www.socialwinterofcode.com/",
      },
      {
        logo: "/sponsors/bronze.svg",
        url: "https://www.socialwinterofcode.com/",
      },
    ],
  },
];

export default function Sponsors() {
  return (
    <section className="bg-[#1A6953] py-16">
      <h2 className="text-center text-4xl font-bold text-[#FFC627] mb-14">
  Sponsors
</h2>


      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {sponsors.map((group) => (
          <SponsorRow
            key={group.tier}
            title={group.tier}
            items={group.items}
          />
        ))}
      </div>
    </section>
  );
}

function SponsorRow({ title, items }) {
  const isSilver = title === "Silver";

  return (
    <div>
      <h3 className="mb-5 text-2xl font-semibold text-[#E6DFC1]">
        {title}
      </h3>

      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              border border-[#E6DFC1]/40
              h-28
              flex items-center justify-center
              hover:bg-white/10
              transition
            "
          >
            <Image
              src={item.logo}
              alt={`${title} sponsor`}
              width={isSilver ? 130 : 160}
              height={isSilver ? 60 : 80}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
