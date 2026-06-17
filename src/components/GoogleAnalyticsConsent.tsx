"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function loadGoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!measurementId) return;

  // Guard against loading GA twice
  if (document.querySelector(`script[src*="${measurementId}"]`)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

export default function GoogleAnalyticsConsent() {
  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent === "accepted") {
      loadGoogleAnalytics();
    }

    const handleConsentAccepted = () => {
      loadGoogleAnalytics();
    };

    window.addEventListener("postowl:consent-accepted", handleConsentAccepted);
    return () => {
      window.removeEventListener("postowl:consent-accepted", handleConsentAccepted);
    };
  }, []);

  return null;
}
