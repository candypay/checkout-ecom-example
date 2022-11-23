import { CandyPay } from "@candypay/checkout-sdk";

export const candypay = new CandyPay({
  api_key: process.env.CANDYPAY_PRIVATE_API_KEY!,
  network: "mainnet",
  config: {
    collect_shipping_address: false,
  },
});
