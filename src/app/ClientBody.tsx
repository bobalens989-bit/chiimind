"use client";

import { useEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { NotificationProvider } from "@/contexts/NotificationContext";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <ThemeProvider>
      <NotificationProvider>
        <div className="antialiased">{children}</div>
      </NotificationProvider>
    </ThemeProvider>
  );
}
