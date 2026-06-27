"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import EventsFloating from "@/components/EventsFloating";

export default function EventsFloatingWrapper() {
  const pathname = usePathname();
  const [hasEvents, setHasEvents] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch("/api/events")
      .then((r) => r.json())
      .then((data) => {
        const upcoming = (data.events || []).filter((e: { isUpcoming: boolean }) => e.isUpcoming);
        setHasEvents(upcoming.length > 0);
      })
      .catch(() => {})
      .finally(() => setChecked(true));
  }, []);

  if (!checked) return null;
  if (pathname === "/faq" || pathname === "/dashboard" || pathname === "/events" || pathname === "/news" || pathname === "/login" || !hasEvents) return null;

  return <EventsFloating />;
}
