import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "../custom/header";
import Footer from "../custom/footer";

type HeadProps = {
  title: string;
  description: string;
  ogImage?: string;
};

type DefaultLayoutProps = {
  children: React.ReactNode;
  head: HeadProps;
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DefaultLayout({ children, head }: DefaultLayoutProps) {
  return (
    <div
      className={cn(
        `${geistSans.variable} ${geistMono.variable}`,
        "min-h-screen bg-background text-foreground"
      )}
    >
      <Head>
        <title>{head.title}</title>
        <meta name="description" content={head.description} />
        <meta property="og:title" content={head.title} />
        <meta property="og:description" content={head.description} />
        <meta property="og:image" content={head.ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@irvanmalik48" />
        <meta name="twitter:title" content={head.title} />
        <meta name="twitter:description" content={head.description} />
        <meta name="twitter:image" content={head.ogImage} />
      </Head>
      <main className="w-full min-h-screen flex flex-col" id="ROOT_NODE">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}
