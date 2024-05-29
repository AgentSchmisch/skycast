import "@/app/ui/global.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <title>Skycast</title>
      </head>
      <body>{children}</body>
      <Analytics/>
    </html>
  );
}