import type { Metadata } from "next";
import { AR_One_Sans, Antonio, Merriweather } from 'next/font/google'
import { Box } from "@mui/material";
import "./globals.css";
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../layout/footer/Footer";
import { Providers } from "./providers";
import { ReduxProvider } from "../../lib/redux/ReduxProvider";
import ScrollBtn from "../../components/scrollToTopBtn/ScrollBtn";
import getCookies from "./api/getCookies";
getCookies()
const inter = Merriweather({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
  display:'swap'
});
export const metadata: Metadata = {
  title: "First T Skate-shop",
  description: "First T new Skate shope located in Israel/ חנות סקייטבורד חדשה בארץ",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {
    token: any;
  }
}>) {
  // params.token = await getCookies('name');
  params.token= '123';

  return (
    <html lang="en" dir="rtl">
      <ReduxProvider>
      <Providers>
        <body className={inter.variable}>
        <Navbar/> 
        <Box sx={{bgcolor:'primary.main'}}>
          {children}
          <Footer />
        </Box>
          </body>
      </Providers>
      </ReduxProvider>
    </html>
  );
}
