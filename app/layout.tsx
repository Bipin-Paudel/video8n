import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { COMPANY_NAME } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const verificationSignature = process.env.URL_OWNERSHIP_VERIFICATION_CONTENT;

export const metadata: Metadata = {
  title: {
    default: "Video8n | Your Content, Everywhere, Instantly.",
    template: "%s | Video8n",
  },
  icons: {
    icon: [{ url: "/video8n_logo.svg", type: "image/svg+xml" }],
    shortcut: ["/video8n_logo.svg"],
  },
  description:
    `Video8n by ${COMPANY_NAME} turns one prompt into AI-generated videos and one-click publishing for TikTok, YouTube, Facebook, and Instagram.`,
};

export const viewport: Viewport = {
  themeColor: "#020208",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
        {verificationSignature ? (
          <div
            aria-hidden="true"
            data-url-ownership-verification={verificationSignature}
            hidden
            suppressHydrationWarning
          >
            {verificationSignature}
          </div>
        ) : null}
      </body>
    </html>
  );
}
