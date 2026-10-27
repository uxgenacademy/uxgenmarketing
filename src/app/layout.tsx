import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://uxgenmarketing.com"),
  title: {
    default: "UXGen Marketing | MSME Digital Growth Partner - Roz Naye Customer",
    template: "%s | UXGen Marketing",
  },
  description: "Hum MSME ko Digital se jodte hain - Roz Naye Customer, WhatsApp par Direct Enquiry. Digital Presence, Content Engine, Ads & WhatsApp Automation.",
  keywords: ["UXGen Marketing", "MSME Digital Marketing", "Lead Generation India", "WhatsApp Leads", "Google Business Profile", "Meta Ads MSME"],
  authors: [{ name: "UXGen Technologies Pvt. Ltd." }],
  creator: "UXGen Technologies Pvt. Ltd.",
  
  // Favicon yahan se set hoga
  icons: {
    icon: "/images/favicon.png",
  },

  openGraph: {
    title: "UXGen Marketing | MSME Digital Growth Partner",
    description: "Aapka Business Best Hai, Par Customer Online Dhoondh Raha Hai. Direct Customers on WhatsApp.",
    url: "https://uxgenmarketing.com",
    siteName: "UXGen Marketing",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/uxgen-logo.jpg",
        width: 1200,
        height: 630,
        alt: "UXGen Marketing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "UXGen Marketing | MSME Digital Growth Partner",
    description: "Roz Naye Customer, WhatsApp par Direct Enquiry.",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://uxgenmarketing.com",
  },
};

// Viewport alag se export hota hai Next.js 14 me
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body className="min-h-screen bg-[#FFFBEB] text-[#475467] antialiased selection:bg-[#F59E0B] selection:text-black">
        {children}
      </body>
    </html>
  );
}