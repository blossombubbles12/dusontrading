"use client";

import { useState, useEffect } from "react";

interface EmailProtectedProps {
  user?: string;
  domain?: string;
  className?: string;
}

export default function EmailProtected({
  user = "contact",
  domain = "dusontrading.com",
  className = "",
}: EmailProtectedProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fullEmail = `${user}@${domain}`;

  if (!mounted) {
    // Prevents automated static web scrapers from harvesting email addresses from static HTML
    return (
      <span className={className} aria-label="Email Address">
        {user}&#64;{domain}
      </span>
    );
  }

  return (
    <a
      href={`mailto:${fullEmail}`}
      className={`hover:underline transition-colors ${className}`}
      title="Send email inquiry"
    >
      {fullEmail}
    </a>
  );
}
