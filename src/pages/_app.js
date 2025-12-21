import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/shared/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.variable}>
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

