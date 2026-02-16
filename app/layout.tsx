import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const themeInitScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("rp-theme");
    const validTheme =
      storedTheme === "light" || storedTheme === "dark" || storedTheme === "system"
        ? storedTheme
        : "system";
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolvedTheme = validTheme === "system" ? (prefersDark ? "dark" : "light") : validTheme;
    document.documentElement.dataset.theme = resolvedTheme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export const metadata: Metadata = {
  title: {
    default: "RP Musical and Dance Group",
    template: "%s | RP Musical and Dance Group",
  },
  description:
    "Premium musical and dance group for domestic and international events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
