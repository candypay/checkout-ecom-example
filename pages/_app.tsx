import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CandyPayProvider } from "@candypay/react-checkout-sdk";
import { createContext, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export const ProductContext = createContext<any>(null);
function MyApp({ Component, pageProps }: AppProps) {
  const [prod, setProd] = useState<any[]>([]);
  return (
    <>
      <ProductContext.Provider value={{ prod, setProd }}>
        <CandyPayProvider
          publicApiKey={process.env.NEXT_PUBLIC_CANDYPAY_PUBLIC_API_KEY!}
        >
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </CandyPayProvider>
      </ProductContext.Provider>
    </>
  );
}

export default MyApp;
