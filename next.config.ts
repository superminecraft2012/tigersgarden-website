import type { NextConfig } from "next";
import { MENU_SLUG_REDIRECTS } from "./lib/slug-redirects";

const nextConfig: NextConfig = {
  async redirects() {
    // Permanent (308) redirects for every renamed menu slug, so links,
    // bookmarks, printed QR codes and anything already indexed keep working
    // and consolidate onto the new URL. Generated from the same map the
    // rename was driven by, so the two cannot drift.
    return Object.entries(MENU_SLUG_REDIRECTS).map(([from, to]) => ({
      source: `/menu/${from}`,
      destination: `/menu/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
