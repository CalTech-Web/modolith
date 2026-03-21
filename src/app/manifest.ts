import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Modolith Structures",
    short_name: "Modolith",
    description:
      "Standing Structures. Setting Standards. Expert construction services in Houston, TX.",
    start_url: "/",
    display: "standalone",
    background_color: "#1e1e1e",
    theme_color: "#8e6d45",
    icons: [
      {
        src: "/images/logos/modolith-reduced-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logos/modolith-reduced-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
