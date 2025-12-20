import { useEffect, useMemo, useState } from "react";
import { apiLinks } from "../../data/apiLinks";

const TIER_CONFIG = {
  Platinum: {
    cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    filter: "",
  },
  Gold: {
    cols: "grid-cols-1 sm:grid-cols-3",
    filter: "brightness-0 invert",
  },
  Silver: {
    cols: "grid-cols-1 sm:grid-cols-3",
    filter: "brightness-0 invert",
  },
  Bronze: {
    cols: "grid-cols-1 sm:grid-cols-3",
    filter: "",
  },
};

const LOGO_HEIGHT = {
  Platinum: "max-h-[120.21px]",
  Gold: "max-h-[68.41px]",
  Silver: "max-h-[78px]",
  Bronze: "max-h-[118px]",
};

export default function Demo() {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchSponsors() {
      try {
        const res = await fetch(apiLinks.getSponsors, {
          headers: { accept: "application/json" },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!cancelled) {
          setSponsors(Array.isArray(json?.data) ? json.data : []);
        }
      } catch {
        if (!cancelled) setError("Failed to load sponsors");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchSponsors();
    return () => {
      cancelled = true;
    };
  }, []);

  const grouped = useMemo(() => {
    const byTier = { Platinum: [], Gold: [], Silver: [], Bronze: [] };

    sponsors.forEach(s => {
      const tier = (s.tier || "").toLowerCase();
      if (tier === "platinum") byTier.Platinum.push(s);
      else if (tier === "gold") byTier.Gold.push(s);
      else if (tier === "silver") byTier.Silver.push(s);
      else if (tier === "bronze") byTier.Bronze.push(s);
    });

    return byTier;
  }, [sponsors]);

  const tiers = Object.keys(grouped);

  return (
    <section className="py-16 px-4">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <h2 className="mb-12 text-center font-poppins font-bold text-yellow text-5xl sm:text-7xl xl:text-8xl">
          Sponsors
        </h2>

        {loading && <p className="text-text">Loading sponsors...</p>}
        {error && <p className="text-yellow">{error}</p>}

        {!loading &&
          !error &&
          tiers.map(tier => {
            const items = grouped[tier];
            if (!items.length) return null;

            const config = TIER_CONFIG[tier];

            return (
              <div key={tier} className="mb-14 w-full">
                <h3 className="mb-4 font-poppins font-semibold tracking-widest text-text text-3xl sm:text-4xl">
                  {tier}
                </h3>

                <div
                  className={`grid ${config.cols} border border-text bg-white/5`}
                >
                  {items.map((sponsor, idx) => (
                    <a
                      key={`${tier}-${idx}`}
                      href={sponsor.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center min-h-[140px] sm:min-h-[180px] border border-text p-3"
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.alt || sponsor.name || "Sponsor"}
                        className={`
                          object-contain
                          max-w-full
                          ${LOGO_HEIGHT[tier]}
                          ${config.filter}
                          ${
                            tier === "Bronze" &&
                            sponsor.name?.toLowerCase().includes("swoc")
                              ? "max-h-[190px] max-w-[120%]"
                              : ""
                          }
                        `}
                        onError={e => {
                          e.currentTarget.src = "/logos/placeholder.png";
                        }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
