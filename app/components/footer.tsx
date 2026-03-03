import React from "react";

const Footer = () => {
  const tech = [
    { n: "Next.js", c: "FFFFFF" },
    { n: "Three.js", slug: "threedotjs", c: "FFFFFF" },
    { n: "Tailwind CSS", c: "06B6D4" },
    { n: "Framer", c: "0055FF" },
    { n: "GSAP", c: "88CE02" },
  ];

  return (
    <footer style={s.footer} className="border border-slate-200">
      <div style={s.marquee}>
        <div style={s.track}>
          {[...tech, ...tech, ...tech].map((t, i) => (
            <div key={i} style={s.item}>
              <img
                src={`https://cdn.simpleicons.org/${t.n.toLowerCase().replace(".js", "")}/${t.c}`}
                alt={t.n}
                style={s.img}
              />
              <span style={s.name}>{t.n}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={s.credits}>
        <div style={{ marginBottom: "15px" }}>
          <strong>© 2026 CV2.</strong> Tous droits réservés.
        </div>
        <div style={s.legalBox}>
          <p>
            This work is based on
            <a
              href="https://sketchfab.com/3d-models/house-d7498a45f2e84aa397b33a8beab16950"
              target="_blank"
              rel="noreferrer"
              style={s.link}
            >
              {" "}
              "House"{" "}
            </a>
            by
            <a
              href="https://sketchfab.com/alyona_novikova22"
              target="_blank"
              rel="noreferrer"
              style={s.link}
            >
              {" "}
              alyona_novikova22{" "}
            </a>
            licensed under
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noreferrer"
              style={s.link}
            >
              {" "}
              CC-BY-4.0
            </a>
            .
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }
      `}</style>
    </footer>
  );
};

const s: { [key: string]: React.CSSProperties } = {
  footer: {
    position: "relative",
    zIndex: 1000,
    padding: "40px 0",
    background: "#fff",
    borderTop: "1px solid #eee",
    overflow: "hidden",
    borderRadius: "20px",
    margin: "8px",
  },
  marquee: { width: "100%", overflow: "hidden", position: "relative" },
  track: {
    display: "flex",
    width: "max-content",
    animation: "scroll 20s linear infinite",
  },
  item: { display: "flex", alignItems: "center", margin: "0 40px" },
  img: { height: "24px", marginRight: "10px" },
  name: { fontWeight: "bold", fontSize: "1.1rem" },
  credits: {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "12px",
    opacity: 0.6,
  },
  lic: { marginTop: "5px" },
  link: {
    color: "#007AFF",
    textDecoration: "none",
    fontWeight: "500",
  },
  legalBox: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "0 20px",
    lineHeight: "1.8",
    color: "#888",
  },
};

export default Footer;
