"use client";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function AnalyticsWrapper() {
  useEffect(() => {}, []); // Ensures it runs only on the client
  return <Analytics />;
}
