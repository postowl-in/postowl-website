import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const platform = new URL(req.url).searchParams.get("platform");
  const version = await fetch("https://postowl.in/version.json", {
    next: { revalidate: 300 },
  })
    .then((r) => r.json())
    .catch(() => ({
      mac_url:
        "https://github.com/rohitagr0310/email-app/releases/latest/download/PostOwl.dmg",
      win_url:
        "https://github.com/rohitagr0310/email-app/releases/latest/download/PostOwl-Setup.exe",
    }));
  const url = platform === "mac" ? version.mac_url : version.win_url;
  return Response.redirect(url, 302);
}
