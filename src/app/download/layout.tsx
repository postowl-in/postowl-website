import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download PostOwl.in — Mac & Windows",
  description:
    "Download PostOwl.in for macOS or Windows. Free personalised email sender. No account required. No subscription.",
  alternates: { canonical: "https://postowl.in/download" },
  openGraph: {
    title: "Download PostOwl.in — Mac & Windows",
    description:
      "Download PostOwl.in for macOS or Windows. Free personalised email sender. No account required.",
    url: "https://postowl.in/download",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download PostOwl.in — Mac & Windows",
    description:
      "Free personalised bulk email desktop app for Mac and Windows. No account required.",
  },
};

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
