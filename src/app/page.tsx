import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ProviderBar from "@/components/ProviderBar";
import UseCaseStrip from "@/components/UseCaseStrip";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import ComparisonTable from "@/components/ComparisonTable";
import FAQAccordion from "@/components/FAQAccordion";
import DownloadCTA from "@/components/DownloadCTA";

export const metadata: Metadata = {
  title: "PostOwl.in — Send personalised bulk email for free",
  description:
    "Send personalised emails to your whole list from Gmail, Outlook, or any email account. Free desktop app for Mac and Windows. No subscription.",
  alternates: { canonical: "https://postowl.in" },
  openGraph: {
    title: "PostOwl.in — Send personalised bulk email for free",
    description:
      "Send personalised emails to your whole list from Gmail, Outlook, or any email account. Free desktop app for Mac and Windows. No subscription.",
    url: "https://postowl.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PostOwl.in — Send personalised bulk email for free",
    description:
      "Free desktop app to send personalised bulk email from Gmail, Outlook, or any email account. No subscription.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProviderBar />
      <UseCaseStrip />
      <FeatureGrid />
      <HowItWorks />
      <ComparisonTable />
      <FAQAccordion />
      <DownloadCTA location="footer" />
    </>
  );
}
