import { useEffect, useMemo, useState } from "react";
import { apiLinks } from "../../data/apiLinks";

export default function Demo() {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchSponsors() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(apiLinks.getSponsors, {
          headers: { accept: "application/json" },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!cancelled) setSponsors(Array.isArray(json?.data) ? json.data : []);
      } catch (err) {
        if (!cancelled) setError("Failed to load sponsors");
        console.error("Failed to fetch sponsors:", err);
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

    const normalize = list => {
      if (list.length === 0) return [];
      const first = list[0];
      const result = [...list];
      while (result.length < 4) result.push(first);
      return result.slice(0, 4);
    };

    return {
      Platinum: normalize(byTier.Platinum),
      Gold: normalize(byTier.Gold),
      Silver: normalize(byTier.Silver),
      Bronze: normalize(byTier.Bronze),
    };
  }, [sponsors]);

  const tiers = [
    { title: "Platinum", items: grouped.Platinum },
    { title: "Gold", items: grouped.Gold },
    { title: "Silver", items: grouped.Silver },
    { title: "Bronze", items: grouped.Bronze },
  ];

  return (
    <section style={{ padding: "4rem 1rem" }}>
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#FFB900",
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: "700",
            lineHeight: "1.2",
            marginBottom: "32px",
          }}
        >
          Sponsors
        </h2>

        {loading && (
          <div style={{ textAlign: "center", color: "#E6DFC1", fontFamily: "Poppins, sans-serif" }}>
            Loading sponsors...
          </div>
        )}
        {error && (
          <div style={{ textAlign: "center", color: "#FFB900", fontFamily: "Poppins, sans-serif" }}>
            {error}
          </div>
        )}

        {!loading && !error && tiers.map(({ title, items }) => (
          items.length > 0 && (
            <div
              key={title}
              style={{
                marginBottom: "3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
                gap: "1rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: "600",
                  lineHeight: "1.4",
                  letterSpacing: "0.05em",
                  color: "#E6DFC1",
                  marginBottom: "0.5rem",
                }}
              >
                {title}
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(clamp(150px, 40vw, 320px), 1fr))",
                  gap: "0",
                  border: "1px solid #E6DFC1",
                  borderRadius: "1px",
                  background: "rgba(255,255,255,0.03)",
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: "1400px",
                }}
              >
                {(title === "Platinum"
                  ? items
                  : items.slice(0, Math.max(items.length - 1, 0))
                ).map((sponsor, idx) => (
                  <a
                    key={`${title}-${idx}-${sponsor.name || "sponsor"}`}
                    href={sponsor.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      borderLeft: "0.5px solid #E6DFC1",
                      borderBottom: "0.5px solid #E6DFC1",
                      borderRight: "0.5px solid #E6DFC1",
                      borderTop: "0.5px solid #E6DFC1",
                      minHeight: "clamp(140px, 18vw, 200px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.75rem",
                      boxSizing: "border-box",
                    }}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.alt || sponsor.name || "Sponsor"}
                      style={{
                        maxHeight:
                          title === "Platinum"
                            ? "120.21px"
                            : title === "Gold"
                            ? "68.41px"
                            : title === "Silver"
                            ? "78px"
                            : title === "Bronze" && sponsor.name?.toLowerCase().includes("swoc")
                            ? "190px"
                            : title === "Bronze"
                            ? "118px"
                            : "140px",
                        maxWidth: title === "Bronze" && sponsor.name?.toLowerCase().includes("swoc")
                          ? "120%"
                          : "100%",
                        objectFit: "contain",
                        filter:
                          title === "Gold" || title === "Silver"
                            ? "brightness(0) invert(1)"
                            : "none",
                      }}
                      onError={e => {
                        e.currentTarget.src = "/logos/placeholder.png";
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
}