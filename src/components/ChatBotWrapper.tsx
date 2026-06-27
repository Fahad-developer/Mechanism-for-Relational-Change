"use client";

import { usePathname } from "next/navigation";
import ChatBot from "@/components/ChatBot";

export default function ChatBotWrapper() {
  const pathname = usePathname();

  if (pathname === "/faq" || pathname === "/dashboard" || pathname === "/events" || pathname === "/news" || pathname === "/login") return null;

  return <ChatBot />;
}
