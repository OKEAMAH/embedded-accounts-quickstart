"use client";

import ThemeSwitch from "@/components/ui/theme-switch";
import { AuthCard, useUser } from "@account-kit/react";
import { redirect } from "next/navigation";

// [!region using-status]
export default function Home() {
  const user = useUser();

  if (user) {
    redirect("/profile");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <div className="flex flex-row rounded-lg bg-white p-6">
        <AuthCard />
      </div>
      <ThemeSwitch />
    </main>
  );
}
// [!endregion using-status]
